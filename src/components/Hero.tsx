
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in">
              Sua Fachada em 3D que Conquista Clientes!
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/90 max-w-lg mx-auto md:mx-0">
              Design 3D profissional para empresas que querem se destacar e atrair mais clientes com tecnologia de ponta.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 font-semibold text-lg"
                onClick={() => window.open('https://wa.me/5591982591612', '_blank')}
              >
                Fale no WhatsApp <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 font-semibold text-lg"
                onClick={() => document.getElementById('servicos')?.scrollIntoView({behavior: 'smooth'})}
              >
                Conheça Nossos Serviços
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md">
              <div className="w-full h-[400px] bg-white/10 backdrop-blur-sm rounded-lg shadow-lg border border-white/20 p-4 overflow-hidden animate-float">
                <img 
                  src="/placeholder.svg" 
                  alt="Mockup de design 3D" 
                  className="w-full h-full object-cover rounded"
                />
                <div className="absolute bottom-8 left-0 right-0 mx-auto w-4/5 bg-white/90 backdrop-blur-md p-4 rounded shadow-lg">
                  <p className="text-primary text-sm font-medium">Transformamos sua ideia em realidade 3D</p>
                </div>
              </div>
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
