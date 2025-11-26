import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButton from '@/components/FloatingButton';
import ProjectCTA from '@/components/ProjectCTA';
import { projectsData } from '@/data/projectsData';
import useEmblaCarousel from 'embla-carousel-react';
import AutoHeight from 'embla-carousel-auto-height';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [AutoHeight()]);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [orientations, setOrientations] = React.useState<Record<number, 'horizontal' | 'vertical'>>({});

    const project = projectsData.find(p => p.id === Number(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold mb-4">Projeto não encontrado</h1>
                <Button onClick={() => navigate('/servicos')} variant="outline">
                    Voltar para Serviços
                </Button>
            </div>
        );
    }

    const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
    const scrollNext = () => emblaApi && emblaApi.scrollNext();

    const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
        containScroll: 'keepSnaps',
        dragFree: true
    });

    const onThumbClick = React.useCallback(
        (index: number) => {
            if (!emblaApi || !emblaThumbsApi) return;
            emblaApi.scrollTo(index);
        },
        [emblaApi, emblaThumbsApi]
    );

    const onSelect = React.useCallback((api: any) => {
        setSelectedIndex(api.selectedScrollSnap());
        if (emblaThumbsApi) emblaThumbsApi.scrollTo(api.selectedScrollSnap());
    }, [emblaThumbsApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on('select', onSelect);
        onSelect(emblaApi);
    }, [emblaApi, onSelect]);

    const handleImageLoad = (index: number, event: React.SyntheticEvent<HTMLImageElement>) => {
        const { naturalWidth, naturalHeight } = event.currentTarget;
        console.log(`Image ${index} loaded: ${naturalWidth}x${naturalHeight} (${naturalHeight > naturalWidth ? 'vertical' : 'horizontal'})`);
        setOrientations(prev => ({
            ...prev,
            [index]: naturalHeight > naturalWidth ? 'vertical' : 'horizontal'
        }));
    };

    const isVertical = orientations[selectedIndex] === 'vertical';

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-violet-950 relative">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl"></div>
            </div>

            <Navbar />

            <main className="pt-24 pb-16 relative z-10">
                <div className="container mx-auto px-4 flex flex-col gap-2">
                    <div className="flex justify-start">
                        <Button
                            onClick={() => navigate(-1)}
                            variant="ghost"
                            className="text-white/70 hover:text-white pl-0 hover:bg-transparent"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
                        </Button>
                    </div>

                    <div className={`grid grid-cols-1 ${isVertical ? 'lg:grid-cols-2' : 'lg:grid-cols-1'} gap-2 transition-all duration-500 ease-in-out`}>
                        {/* Image Section */}
                        <div className="flex flex-col gap-2">
                            {/* Main Slider */}
                            <div className={`relative group overflow-hidden rounded-2xl flex items-center justify-center ${isVertical ? 'h-[calc(100vh-12rem)] min-h-[600px]' : 'h-auto'}`}>
                                <div className="w-full h-full" ref={emblaRef}>
                                    <div className="flex h-full">
                                        {project.images.map((img, index) => (
                                            <div key={index} className="flex-[0_0_100%] min-w-0 relative h-full flex items-center justify-center">
                                                <img
                                                    src={img}
                                                    alt={`${project.title} - Imagem ${index + 1}`}
                                                    className="max-w-full max-h-full object-contain rounded-2xl"
                                                    onLoad={(e) => handleImageLoad(index, e)}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/10 z-10"
                                    onClick={scrollPrev}
                                >
                                    <ChevronLeft className="h-6 w-6" />
                                </button>
                                <button
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/10 z-10"
                                    onClick={scrollNext}
                                >
                                    <ChevronRight className="h-6 w-6" />
                                </button>
                            </div>

                            {/* Thumbnails */}
                            <div className="overflow-hidden" ref={emblaThumbsRef}>
                                <div className="flex gap-2">
                                    {project.images.map((img, index) => (
                                        <button
                                            key={index}
                                            onClick={() => onThumbClick(index)}
                                            className={`relative flex-[0_0_15%] min-w-0 aspect-video rounded-lg overflow-hidden border-2 transition-all ${index === selectedIndex
                                                ? 'border-indigo-500 opacity-100'
                                                : 'border-transparent opacity-50 hover:opacity-80'
                                                }`}
                                        >
                                            <img
                                                src={img}
                                                alt={`Thumbnail ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col overflow-hidden ${isVertical ? 'h-full' : 'h-auto'}`}>
                            <div className="mb-6">
                                <span className="inline-block px-4 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-medium mb-4 border border-indigo-500/30">
                                    {project.category}
                                </span>
                                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    {project.title}
                                </h1>
                                <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-400 to-violet-400 rounded-full"></div>
                            </div>

                            <div className="pr-4">
                                <h2 className="text-xl font-bold text-white mb-4">Sobre o Projeto</h2>
                                <p className="text-white/80 text-lg leading-relaxed whitespace-pre-line">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16">
                    <ProjectCTA />
                </div>
            </main>

            <Footer />
            <FloatingButton />
        </div>
    );
};

export default ProjectDetailsPage;
