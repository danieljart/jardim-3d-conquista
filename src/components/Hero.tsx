import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import heroBg from '../content/projects/fachadas/Scene 0.png';

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

const Hero = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.documentElement.style.setProperty('--parallax-y', `${scrollY * 0.1}px`);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-violet-900/90"></div>
        <div
          key={currentImageIndex}
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay animate-fade-in transition-all duration-1000"
          style={{ backgroundImage: `url("${slideshowImages[currentImageIndex]}")` }}
        ></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15),transparent_70%)] backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 parallax parallax-slow">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-fade-in mb-2">
              Crio projetos <span className="gradient-text">3D</span> que
              <span className="gradient-text"> conquistam</span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-white/90 max-w-lg mx-auto md:mx-0">
              Não deixe seu negócio passar despercebido. Com meus designs exclusivos, sua empresa não apenas se destaca: ela <span className="font-bold">impacta</span>!
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-semibold text-lg border-none shadow-lg shadow-violet-900/30"
                onClick={() => navigate('/contato')}
              >
                Fale Comigo Agora! <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 font-semibold text-lg backdrop-blur-sm"
                onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Conheça Minhas Soluções 3D
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end parallax parallax-medium">
            <div className="relative w-full max-w-md group">
              <div className="w-full h-[450px] glass-card rounded-xl shadow-2xl border border-white/10 p-5 overflow-hidden animate-float group-hover:neon-border transition-all duration-500">
                <img
                  key={currentImageIndex}
                  src={slideshowImages[currentImageIndex]}
                  alt="Mockup de design 3D"
                  className="w-full h-full object-cover rounded group-hover:scale-105 transition-all duration-700 animate-fade-in"
                />
                <div className="absolute bottom-8 left-0 right-0 mx-auto w-4/5 glass-card p-4 rounded-lg shadow-lg border border-white/10 backdrop-blur-xl">
                  <p className="text-white font-medium">Seu projeto, minha realidade 3D que <span className="font-bold">converte</span>.</p>
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
