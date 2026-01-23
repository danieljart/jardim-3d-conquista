import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Global cache for aspect ratios - persists across component unmounts
const aspectRatioCache = new Map<string, number>();

function getImageRatio(src: string): number | null {
    return aspectRatioCache.get(src) ?? null;
}

function setImageRatio(src: string, ratio: number): void {
    aspectRatioCache.set(src, ratio);
}

interface ThumbnailCarouselProps {
    images: string[];
    className?: string;
}

interface ThumbnailsProps {
    images: string[];
    index: number;
    setIndex: (i: number) => void;
    orientation: 'horizontal' | 'vertical';
}

function Thumbnails({ images, index, setIndex, orientation }: ThumbnailsProps) {
    const thumbnailsRef = useRef<HTMLDivElement>(null);
    const isVertical = orientation === 'vertical';

    useEffect(() => {
        if (thumbnailsRef.current) {
            const activeNode = thumbnailsRef.current.children[1]?.children[index] as HTMLElement;
            if (activeNode) {
                const behavior = 'smooth';
                if (orientation === 'vertical') {
                    // Center vertical
                    const top = activeNode.offsetTop - thumbnailsRef.current.clientHeight / 2 + activeNode.clientHeight / 2;
                    thumbnailsRef.current.scrollTo({ top, behavior });
                } else {
                    // Center horizontal
                    const left = activeNode.offsetLeft - thumbnailsRef.current.clientWidth / 2 + activeNode.clientWidth / 2;
                    thumbnailsRef.current.scrollTo({ left, behavior });
                }
            }
        }
    }, [index, orientation]);

    return (
        <div
            ref={thumbnailsRef}
            className={cn(
                "scrollbar-hide p-1 relative flex-shrink-0 transition-all duration-300",
                isVertical
                    // Vertical Props (Desktop Side-by-Side)
                    ? "overflow-y-auto w-[100px] h-full py-1"
                    // Horizontal Props (Stacked)
                    : "overflow-x-auto w-full h-[80px] py-2"
            )}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>

            <div
                className={cn(
                    "flex gap-2 relative transition-all duration-300",
                    isVertical ? "flex-col w-full min-h-full" : "flex-row min-w-full h-full"
                )}
            >
                {images.map((img, i) => (
                    <motion.button
                        key={i}
                        onClick={() => setIndex(i)}
                        initial={false}
                        animate={i === index ? 'active' : 'inactive'}
                        variants={{
                            active: { opacity: 1, scale: 1.0, borderColor: 'rgba(99, 102, 241, 0.5)', borderWidth: 2 },
                            inactive: { opacity: 0.6, scale: 1.0, borderColor: 'transparent', borderWidth: 2 },
                        }}
                        transition={{ duration: 0.2 }}
                        className={cn(
                            "relative overflow-hidden rounded-lg transition-all shrink-0 bg-black/5 dark:bg-white/5",
                            isVertical
                                ? (i === index ? "w-full aspect-[4/3]" : "w-full aspect-[16/9]") // Vertical: Active taller, inactive compressed
                                : (i === index ? "h-full aspect-[16/9]" : "h-full aspect-[3/4]") // Horizontal: Active wider, inactive compressed
                        )}
                    >
                        <img
                            src={img}
                            alt={`Thumbnail ${i + 1}`}
                            className='w-full h-full object-cover pointer-events-none select-none'
                            draggable={false}
                        />
                    </motion.button>
                ))}
            </div>
        </div>
    );
}

const ThumbnailCarousel = ({ images, className }: ThumbnailCarouselProps) => {
    const [index, setIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const imgRefs = useRef<(HTMLImageElement | null)[]>([]);

    // Initialize ratios from global cache (instant layout on revisit)
    const [ratios, setRatios] = useState<Record<number, number>>(() => {
        const initial: Record<number, number> = {};
        images.forEach((src, i) => {
            const cached = getImageRatio(src);
            if (cached !== null) initial[i] = cached;
        });
        return initial;
    });

    // Ready if we already have the first image's ratio from cache
    const [isReady, setIsReady] = useState(() => ratios[0] !== undefined);

    // Explicit IsDesktop state to coordinate heavy layout changes
    // Initialize with actual value to avoid flash
    const [isDesktop, setIsDesktop] = useState(() => {
        if (typeof window !== 'undefined') {
            return window.innerWidth >= 1024;
        }
        return false;
    });

    const x = useMotionValue(0);

    // Get current aspect ratio (from local state which is synced with global cache)
    const currentAspectRatio = ratios[index] ?? ratios[0] ?? null;

    // Mark as ready once we have at least the first image's ratio
    React.useEffect(() => {
        if (ratios[0] !== undefined && !isReady) {
            setIsReady(true);
        }
    }, [ratios, isReady]);

    // Use a safe ratio (fallback to 16/9 for calculations but don't render until ready)
    const safeRatio = currentAspectRatio ?? 16 / 9;

    // Logic: 
    // - Square (0.9 - 1.1): Side-by-Side on Desktop (Small)
    // - Vertical (< 0.9): Side-by-Side on Desktop (Fill Height)
    // - Horizontal (> 1.1): Stacked (Including 4:3 like Sacolão)
    const isSquare = safeRatio >= 0.9 && safeRatio <= 1.1;
    const isVertical = safeRatio < 0.9;
    const isSideBySide = (isSquare || isVertical) && isDesktop;

    useEffect(() => {
        const check = () => setIsDesktop(window.innerWidth >= 1024);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    // Detect ratios
    useEffect(() => {
        images.forEach((_, i) => {
            const img = imgRefs.current[i];
            if (img && img.complete && img.naturalWidth) {
                setRatios(prev => {
                    const ratio = img.naturalWidth / img.naturalHeight;
                    if (prev[i] === ratio) return prev;
                    return { ...prev, [i]: ratio };
                });
            }
        });
    }, [images]);

    useEffect(() => {
        if (!isDragging && containerRef.current) {
            const containerSize = containerRef.current.clientWidth;
            // Round to avoid sub-pixel gaps caused by fractional container widths
            const targetX = Math.round(-index * containerSize);
            animate(x, targetX, { type: 'spring', stiffness: 300, damping: 30 });
        }
    }, [index, isDragging, isSideBySide]);

    useEffect(() => {
        if (index >= images.length) setIndex(0);
    }, [images.length]);

    if (!images || images.length === 0) return null;

    // Show loading skeleton until first image ratio is known
    if (!isReady) {
        return (
            <div className={cn("flex items-center justify-center w-full", className)}>
                <div className="relative overflow-hidden rounded-2xl bg-black/5 dark:bg-white/5 border border-white/10 w-full max-w-2xl aspect-video animate-pulse">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
                </div>
                {/* Hidden preloader for first image */}
                <img
                    src={images[0]}
                    alt=""
                    className="hidden"
                    onLoad={(e) => {
                        const { naturalWidth, naturalHeight } = e.currentTarget;
                        const ratio = naturalWidth / naturalHeight;
                        setImageRatio(images[0], ratio); // Save to global cache
                        setRatios({ 0: ratio });
                    }}
                />
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className={cn(
                "flex w-full",
                // Layout Switching - Center everything, but keep internal gap small
                isSideBySide ? "flex-row items-stretch justify-center gap-2" : "flex-col items-center gap-4",
                // If stacked (Horizontal/Mobile) but container is taller (e.g. h-full parent), align bottom
                (!isSideBySide) && "justify-end",
                className
            )}
        >

            {/* Thumbnails Component */}
            <div className={cn(
                "flex-shrink-0",
                // SideBySide: Order 1 (Left), Fixed Width
                // Stacked: Order 2 (Bottom), Full Width
                isSideBySide ? "order-1 w-auto" : "order-2 w-full max-w-full"
            )}>
                <Thumbnails
                    images={images}
                    index={index}
                    setIndex={setIndex}
                    orientation={isSideBySide ? 'vertical' : 'horizontal'}
                />
            </div>


            {/* Main Carousel Area */}
            <div className={cn(
                "relative flex justify-center items-center",
                // SideBySide: Order 2 (Right), auto width to stay tight
                // Stacked: Order 1 (Top), Full width
                isSideBySide ? "order-2 h-full flex-shrink-0" : "order-1 w-full h-auto"
            )}>
                <div
                    className={cn(
                        "relative overflow-hidden rounded-2xl bg-black/5 dark:bg-white/5 border border-white/10 group",
                        // SideBySide (Desktop Vertical): Fill height, auto width
                        // Stacked (Mobile/Horizontal): Full width (or auto), constrained height
                    )}
                    style={isSideBySide ? {
                        // Desktop Vertical/Square Mode
                        ...(isSquare ? {
                            aspectRatio: safeRatio,
                            maxHeight: '75vh', // Same as vertical for consistent sizing
                            width: 'auto',
                        } : {
                            // Vertical: max height to fit screen, never overflow viewport
                            maxHeight: '75vh',
                            width: 'auto',
                            aspectRatio: safeRatio,
                        })
                    } : {
                        // Stacked Mode (Mobile OR Desktop Horizontal)

                        // "PowerClip" Style: ONLY for truly horizontal images (ratio > 1.1)
                        ...(safeRatio > 1.1 ? {
                            width: '100%',
                            aspectRatio: 1.58,
                            maxHeight: '75vh',
                        } : {
                            // Mobile Vertical/Square: Natural aspect ratio, strict height cap
                            // This ensures we don't crop vertical images into a horizontal box (PowerClip)
                            width: '100%',
                            height: 'auto',
                            maxHeight: '75vh',
                            aspectRatio: 'auto',
                        })
                    }}
                    ref={containerRef}
                >
                    <motion.div
                        className='flex h-full w-full'
                        drag='x'
                        dragElastic={0.2}
                        dragMomentum={false}
                        onDragStart={() => setIsDragging(true)}
                        onDragEnd={(e, info) => {
                            setIsDragging(false);
                            const containerWidth = containerRef.current?.clientWidth || 1;
                            const offset = info.offset.x;
                            const velocity = info.velocity.x;
                            let newIndex = index;
                            if (Math.abs(velocity) > 500) newIndex = velocity > 0 ? index - 1 : index + 1;
                            else if (Math.abs(offset) > containerWidth * 0.3) newIndex = offset > 0 ? index - 1 : index + 1;
                            setIndex(Math.max(0, Math.min(images.length - 1, newIndex)));
                        }}
                        style={{ x }}
                    >
                        {images.map((img, i) => (
                            <div key={i} className='shrink-0 w-full h-full'>
                                <img
                                    ref={el => imgRefs.current[i] = el}
                                    src={img}
                                    alt={`Slide ${i + 1}`}
                                    className='w-full h-full object-cover select-none pointer-events-none'
                                    draggable={false}
                                    onLoad={(e) => {
                                        const { naturalWidth, naturalHeight } = e.currentTarget;
                                        const ratio = naturalWidth / naturalHeight;
                                        setImageRatio(img, ratio); // Save to global cache
                                        setRatios(prev => ({ ...prev, [i]: ratio }));
                                    }}
                                />
                            </div>
                        ))}
                    </motion.div>

                    {/* Controls */}
                    <button
                        disabled={index === 0}
                        onClick={() => setIndex((i) => Math.max(0, i - 1))}
                        className={cn(
                            "absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0 z-10",
                            index === 0 && "hidden"
                        )}
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        disabled={index === images.length - 1}
                        onClick={() => setIndex((i) => Math.min(images.length - 1, i + 1))}
                        className={cn(
                            "absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0 z-10",
                            index === images.length - 1 && "hidden"
                        )}
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                    <div className='absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium border border-white/10 z-10'>
                        {index + 1} / {images.length}
                    </div>
                </div>
            </div>

        </motion.div>
    );
};

export default ThumbnailCarousel;
