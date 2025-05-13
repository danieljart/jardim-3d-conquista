
import React from 'react';
import { 
  Image, 
  LayoutDashboard, 
  PanelRight, 
  Video, 
  MessageSquare,
  Sparkles
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Fachadas 3D Impactantes que Atraem e Convertem",
      description: "Valorize a primeira impressão do seu negócio. Criamos fachadas 3D realistas e atraentes que destacam sua marca, comunicam seu valor e convidam novos clientes a entrar.",
      icon: <Image className="h-10 w-10 text-white" />,
    },
    {
      title: "Interiores 3D Funcionais e Inspiradores",
      description: "Otimize cada metro quadrado do seu espaço comercial. Desenvolvemos layouts e ambientações de interiores 3D que unem funcionalidade, estética e a identidade da sua marca, criando ambientes produtivos e acolhedores.",
      icon: <LayoutDashboard className="h-10 w-10 text-white" />,
    },
    {
      title: "Comunicação Visual 3D que Fortalece Sua Marca",
      description: "Comunique-se de forma eficaz e memorável. Criamos letreiros em ACM, sinalizações internas e displays 3D personalizados que reforçam a identidade da sua marca e guiam seus clientes com clareza e impacto.",
      icon: <PanelRight className="h-10 w-10 text-white" />,
    },
    {
      title: "Identidade Visual 3D Coesa e Marcante",
      description: "Construa uma marca forte e reconhecível em todas as dimensões. Desenvolvemos sua identidade visual completa, do logo 3D à paleta de cores e tipografia, garantindo consistência e impacto em todas as aplicações e pontos de contato.",
      icon: <MessageSquare className="h-10 w-10 text-white" />,
    },
    {
      title: "Experiências Imersivas com Vídeos e Tours Virtuais 3D",
      description: "Leve seus clientes para dentro do seu projeto antes mesmo de ele existir. Produzimos vídeos e tours virtuais 3D interativos que oferecem uma experiência imersiva e detalhada do seu espaço, encantando e convencendo.",
      icon: <Video className="h-10 w-10 text-white" />,
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-gradient-to-br from-indigo-950 via-purple-950 to-violet-950 relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Soluções 3D Completas para Sua Empresa</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-400 to-violet-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-white/80">
            Explore nossas soluções completas em design 3D, desenvolvidas para empresas que buscam não apenas se destacar no mercado, mas também criar experiências visuais memoráveis que engajam e convertem. Cada projeto é uma oportunidade de transformar sua visão em realidade impactante.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300"
            >
              <div className="h-2 bg-gradient-to-r from-indigo-500 to-violet-500"></div>
              <div className="p-6">
                <div className="mb-5 bg-gradient-to-br from-indigo-600 to-violet-600 w-16 h-16 rounded-full flex items-center justify-center shadow-lg shadow-indigo-900/30">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-white/70">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-lg font-medium mb-6 text-white">
            Tem um projeto específico em mente ou precisa de uma solução 3D personalizada?
          </p>
          <button 
            onClick={() => window.open('https://wa.me/5591982591612', '_blank')}
            className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-8 py-3 rounded-lg transition-all duration-300 font-medium flex items-center gap-2 mx-auto shadow-lg shadow-indigo-900/30"
          >
            <Sparkles className="h-5 w-5" />
            Solicite um Orçamento Personalizado
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
