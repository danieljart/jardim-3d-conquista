import React from 'react';
import { Sparkles, ArrowRight } from "lucide-react";
import { useNavigate } from 'react-router-dom';

// Import images
import fachadasImg from '@/content/projects/fachadas/Scene 0.png';
import cenografiaImg from '@/content/projects/cenografia/1.jpeg';
import ambientesImg from '@/content/projects/ambientes/danieljardim.3d_1727818425_3469514874563525172_58748782469.jpg';
import personalizadosImg from '@/content/projects/personalizados/danieljardim.3d_1692115206_3170014560966158750_58748782469.jpg';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Fachadas",
      description: "Projetos de fachadas comerciais impactantes.",
      image: fachadasImg,
      slug: '/servicos/fachadas'
    },
    {
      title: "Cenografia",
      description: "Estandes e cenografia para eventos memoráveis.",
      image: cenografiaImg,
      slug: '/servicos/cenografia'
    },
    {
      title: "Ambientes",
      description: "Design de interiores e ambientes otimizados.",
      image: ambientesImg,
      slug: '/servicos/ambientes'
    },
    {
      title: "Personalizados",
      description: "Peças exclusivas e personalizadas para sua marca.",
      image: personalizadosImg,
      slug: '/servicos/personalizados'
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-gradient-to-br from-indigo-950 via-purple-950 to-violet-950 relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Soluções de design para a transformação do seu negócio</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-400 to-violet-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-white/80">
            Transformo sua visão em realidade com projetos 3D de alta qualidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => navigate(service.slug)}
              className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 h-full cursor-pointer hover:shadow-xl hover:shadow-indigo-900/20"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
              </div>
              <div className="p-6 relative">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-indigo-300 transition-colors">{service.title}</h3>
                <p className="text-white/70 text-sm mb-4">{service.description}</p>
                <div className="flex items-center text-indigo-400 text-sm font-medium">
                  Ver projetos <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button
            onClick={() => window.open('https://wa.me/5591982591612', '_blank')}
            className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-8 py-3 rounded-lg transition-all duration-300 font-medium flex items-center gap-2 mx-auto shadow-lg shadow-indigo-900/30"
          >
            <Sparkles className="h-5 w-5" />
            Solicitar um orçamento personalizado
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
