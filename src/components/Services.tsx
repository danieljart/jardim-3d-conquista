
import React from 'react';
import { 
  Image, 
  LayoutDashboard, 
  PanelRight, 
  MessageSquare,
  Video, 
  Sparkles
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Fachadas\nImpactantes",
      description: "A fachada é o cartão de visita do seu negócio. Com minha expertise, transformo-a em um elemento de atração que destaca sua marca.",
      icon: <Image className="h-10 w-10 text-white" />,
    },
    {
      title: "Interiores\nFuncionais",
      description: "Transformo seu espaço comercial em um ambiente otimizado. Desenvolvo layouts que valorizam a experiência do cliente e a eficiência.",
      icon: <LayoutDashboard className="h-10 w-10 text-white" />,
    },
    {
      title: "Comunicação\nEstratégica",
      description: "Fortaleço a identidade da sua marca com projetos de letreiros e sinalização que comunicam com clareza, orientando seus clientes.",
      icon: <PanelRight className="h-10 w-10 text-white" />,
    },
    {
      title: "Identidade\nVisual",
      description: "Construo uma marca sólida e reconhecida. Do logotipo à aplicação em diversos materiais, asseguro uma identidade que atrai negócios.",
      icon: <MessageSquare className="h-10 w-10 text-white" />,
    },
    {
      title: "Vídeos\nImersivos",
      description: "Permito que você vivencie seu projeto de forma interativa. Meus vídeos e tours virtuais são ferramentas para encantar e acelerar decisões.",
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Soluções de design para a transformação do seu negócio</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-400 to-violet-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-white/80">
            Em meu trabalho, não me dedico apenas à criação de imagens esteticamente agradáveis, mas ao desenvolvimento de <strong>resultados concretos</strong>. Com anos de experiência e utilizando tecnologia de ponta, transformo sua visão em uma poderosa ferramenta de posicionamento e vendas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 h-full"
            >
              <div className="h-2 bg-gradient-to-r from-indigo-500 to-violet-500"></div>
              <div className="p-6">
                <div className="flex items-center mb-5">
                  <div className="bg-gradient-to-br from-indigo-600 to-violet-600 min-w-16 h-16 rounded-full flex items-center justify-center shadow-lg shadow-indigo-900/30 flex-shrink-0">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold ml-4 text-white whitespace-pre-line">{service.title}</h3>
                </div>
                <p className="text-white/70">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-lg font-medium mb-6 text-white">
            Cada projeto é único e merece uma solução personalizada. Convido você a discutirmos como posso contribuir para o seu sucesso.
          </p>
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
