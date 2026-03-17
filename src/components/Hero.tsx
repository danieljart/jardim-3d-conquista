import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ShimmerButton from "@/components/ui/shimmer-button";
import { FadeText } from "@/components/ui/fade-text";
import { ArrowRight } from "lucide-react";
import { useNavigate } from 'react-router-dom';

// Slideshow images
import imgFachada01 from '../content/projects/fachadas/01/SACOLÃO_ABCINTRA_0001@2x.png';
import imgFachada02 from '../content/projects/fachadas/02/FP_0001@0,75x2_.png';
import imgFachada03 from '../content/projects/fachadas/03/Scene 0.png';
import imgFachada04 from '../content/projects/fachadas/04/danieljardim.3d_1714431786_3357219602789538712_58748782469.jpg';
import imgFachada05 from '../content/projects/fachadas/05/danieljardim.3d_1743430934_3600482095865751082_58748782469.jpg';
import imgFachada06 from '../content/projects/fachadas/06/danieljardim.3d_1707262212_3297076863603207571_58748782469.jpg';

import imgCeno01 from '../content/projects/cenografia/01/D5_Scene 1_20240219_194511.png';
import imgCeno02 from '../content/projects/cenografia/02/1.png';
import imgCeno03 from '../content/projects/cenografia/03/Scene 10.png';
import imgCeno04 from '../content/projects/cenografia/04/1.jpeg';
import imgCeno05 from '../content/projects/cenografia/05/1.jpeg';
import imgCeno06 from '../content/projects/cenografia/06/danieljardim.3d_1745367992_3616731317064987583_58748782469.webp';

const slideshowImages = [
  imgFachada01, imgFachada02, imgFachada03, imgFachada04, imgFachada05, imgFachada06,
  imgCeno01, imgCeno02, imgCeno03, imgCeno04, imgCeno05, imgCeno06
];

// Preload images globally to ensure they are cached once and never re-requested on remount
slideshowImages.forEach((src) => {
  const img = new Image();
  img.src = src;
});

const Hero = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-[#0F071A]">
      <div className="absolute inset-0 z-0">
        {/* Simplified background overlay with less blur and deep purple tint */}
        <div className="absolute inset-0 bg-[#0F071A]/75 z-10 backdrop-blur-[3px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F071A] via-transparent to-[#0F071A]/30 z-15"></div>

        {slideshowImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            style={{ backgroundImage: `url("${image}")` }}
          ></div>
        ))}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1),transparent_70%)] z-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-30">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Main Title */}
          <div className="mb-8 flex flex-col items-center">
            <FadeText
              direction="up"
              delay={0.2}
              className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] tracking-tight text-white whitespace-nowrap"
              text={t('hero.title')}
            />
            <FadeText
              direction="up"
              delay={0.4}
              className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] tracking-tight text-highlight"
              text={t('hero.titleHighlight')}
            />
          </div>

          <FadeText
            className="text-lg md:text-xl text-white/50 max-w-[800px] mb-12 font-medium leading-relaxed"
            direction="up"
            delay={0.6}
            text={t('hero.subtitle')}
          />

          <FadeText
            delay={1.0}
            text={
              <ShimmerButton
                shimmerColor="#FFFFFF"
                shimmerSize="0.1em"
                background="linear-gradient(90deg, #563474 0%, #9E3ED5 100%)"
                onClick={() => navigate('/contato')}
                className="py-3 px-10 shadow-[0_20px_50px_rgba(158,62,213,0.3)] transition-all hover:scale-105"
              >
                <span className="flex items-center gap-4 text-sm md:text-base font-black tracking-wide">
                  {t('hero.cta')} <ArrowRight className="h-5 w-5" />
                </span>
              </ShimmerButton>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
