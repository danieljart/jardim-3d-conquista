
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.documentElement.style.setProperty('--parallax-y', `${scrollY * 0.1}px`);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-violet-900/90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15),transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 parallax parallax-slow">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-fade-in mb-2">
              Sua Fachada <span className="gradient-text">3D</span> que 
              <span className="gradient-text"> Conquista!</span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-white/90 max-w-lg mx-auto md:mx-0">
              Chega de passar despercebido. Com nosso Design 3D, sua empresa não apenas se destaca: ela <span className="font-bold">domina</span>!
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-semibold text-lg border-none shadow-lg shadow-violet-900/30"
                onClick={() => window.open('https://wa.me/5591982591612', '_blank')}
              >
                Fale Comigo Agora! <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 font-semibold text-lg backdrop-blur-sm"
                onClick={() => document.getElementById('servicos')?.scrollIntoView({behavior: 'smooth'})}
              >
                Quero Minha Solução 3D
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end parallax parallax-medium">
            <div className="relative w-full max-w-md group">
              <div className="w-full h-[450px] glass-card rounded-xl shadow-2xl border border-white/10 p-5 overflow-hidden animate-float group-hover:neon-border transition-all duration-500">
                <img 
                  src="/placeholder.svg" 
                  alt="Mockup de design 3D" 
                  className="w-full h-full object-cover rounded group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-8 left-0 right-0 mx-auto w-4/5 glass-card p-4 rounded-lg shadow-lg border border-white/10 backdrop-blur-xl">
                  <p className="text-white font-medium">Seu Projeto, Realidade 3D que <span className="font-bold">Converte</span>.</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-full blur-2xl opacity-70 animate-pulse"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-full blur-2xl opacity-70 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="custom-shape-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
