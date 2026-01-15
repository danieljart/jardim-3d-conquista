import React, { useEffect, useState, useCallback, memo } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from 'react-router-dom';

// Slideshow images - lazy loaded
const slideshowImagePaths = [
  () => import('../content/projects/fachadas/01/SACOLÃO_ABCINTRA_0001@2x.png'),
  () => import('../content/projects/fachadas/02/FP_0001@0,75x2_.png'),
  () => import('../content/projects/fachadas/03/Scene 0.png'),
  () => import('../content/projects/fachadas/04/danieljardim.3d_1714431786_3357219602789538712_58748782469.jpg'),
  () => import('../content/projects/fachadas/05/danieljardim.3d_1743430934_3600482095865751082_58748782469.jpg'),
  () => import('../content/projects/fachadas/06/danieljardim.3d_1707262212_3297076863603207571_58748782469.jpg'),
  () => import('../content/projects/cenografia/01/D5_Scene 1_20240219_194511.png'),
  () => import('../content/projects/cenografia/02/1.png'),
  () => import('../content/projects/cenografia/03/Scene 10.png'),
  () => import('../content/projects/cenografia/04/1.jpeg'),
  () => import('../content/projects/cenografia/05/1.jpeg'),
  () => import('../content/projects/cenografia/06/danieljardim.3d_1745367992_3616731317064987583_58748782469.webp'),
];

// Memoized background slide component
const BackgroundSlide = memo(({ 
  imageUrl, 
  isActive 
}: { 
  imageUrl: string; 
  isActive: boolean; 
}) => (
  <div
    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
      isActive ? 'opacity-100' : 'opacity-0'
    }`}
    style={{ 
      backgroundImage: `url("${imageUrl}")`,
      willChange: isActive ? 'opacity' : 'auto',
    }}
  />
));

BackgroundSlide.displayName = 'BackgroundSlide';

const Hero = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);
  const [isFirstImageLoaded, setIsFirstImageLoaded] = useState(false);

  // Preload images progressively
  useEffect(() => {
    const loadImage = async (index: number) => {
      if (index >= slideshowImagePaths.length) return;
      
      try {
        const module = await slideshowImagePaths[index]();
        const imageUrl = module.default;
        
        // Preload in browser
        const img = new Image();
        img.src = imageUrl;
        
        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
        });
        
        setLoadedImages(prev => {
          if (prev.includes(imageUrl)) return prev;
          return [...prev, imageUrl];
        });
        
        if (index === 0) {
          setIsFirstImageLoaded(true);
        }
        
        // Load next image after a small delay
        setTimeout(() => loadImage(index + 1), 100);
      } catch (error) {
        console.error(`Failed to load image ${index}:`, error);
        // Continue loading next images even if one fails
        setTimeout(() => loadImage(index + 1), 100);
      }
    };
    
    loadImage(0);
  }, []);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.documentElement.style.setProperty('--parallax-y', `${scrollY * 0.1}px`);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Slideshow interval
  useEffect(() => {
    if (loadedImages.length < 2) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % loadedImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [loadedImages.length]);

  const handleNavigate = useCallback(() => {
    navigate('/contato');
  }, [navigate]);

  return (
    <section className="min-h-screen flex items-start md:items-center pt-20 md:pt-16 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-violet-900/90 z-10 mix-blend-multiply"></div>

        {/* Loading placeholder */}
        {!isFirstImageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 to-violet-950 animate-pulse" />
        )}

        {loadedImages.map((imageUrl, index) => (
          <BackgroundSlide 
            key={imageUrl}
            imageUrl={imageUrl}
            isActive={index === currentImageIndex}
          />
        ))}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15),transparent_70%)] backdrop-blur-[2px] z-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 parallax parallax-slow">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-fade-in mb-1">
              <Trans i18nKey="hero.title">
                Crio projetos <span className="gradient-text">3D</span> que
                <span className="gradient-text"> conquistam</span>
              </Trans>
            </h1>
            <p className="mt-2 text-xl md:text-2xl text-white/90 max-w-lg mx-auto md:mx-0">
              <Trans i18nKey="hero.subtitle">
                Não deixe seu negócio passar despercebido. Com meus designs exclusivos, sua empresa não apenas se destaca: ela <span className="font-bold">impacta</span>!
              </Trans>
            </p>
            <div className="mt-4 flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-semibold text-lg border-none shadow-lg shadow-violet-900/30"
                onClick={handleNavigate}
              >
                {t('hero.cta')} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end parallax parallax-medium">
            <div className="relative w-full max-w-md group">
              <div className="w-full h-[450px] glass-card rounded-xl shadow-2xl border border-white/10 p-5 overflow-hidden animate-float group-hover:neon-border transition-all duration-500">
                {/* Loading state */}
                {!isFirstImageLoaded && (
                  <div className="w-full h-full bg-white/5 rounded animate-pulse" />
                )}
                {loadedImages[currentImageIndex] && (
                  <img
                    key={currentImageIndex}
                    src={loadedImages[currentImageIndex]}
                    alt={t('hero.alt')}
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover rounded group-hover:scale-105 transition-all duration-700 animate-fade-in"
                  />
                )}
                <div className="absolute bottom-8 left-0 right-0 mx-auto w-4/5 glass-card p-4 rounded-lg shadow-lg border border-white/10 backdrop-blur-xl">
                  <p className="text-white font-medium">
                    <Trans i18nKey="hero.card">
                      Seu projeto, minha realidade 3D que <span className="font-bold">converte</span>.
                    </Trans>
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-full blur-2xl opacity-70 animate-pulse"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-full blur-2xl opacity-70 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
