
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
      title: "Design de fachadas de alto impacto",
      description: "A fachada é um dos principais cartões de visita do seu negócio. Com minha expertise, ela se torna um elemento de atração e comunicação de valor, destacando sua marca.",
      icon: <Image className="h-10 w-10 text-white" />,
    },
    {
      title: "Design de interiores estratégico e funcional",
      description: "Transforme seu espaço comercial em um ambiente otimizado e funcional. Desenvolvo layouts que valorizam a experiência do cliente e a eficiência operacional.",
      icon: <LayoutDashboard className="h-10 w-10 text-white" />,
    },
    {
      title: "Comunicação visual estratégica",
      description: "Fortaleça a identidade da sua marca. Desenvolvo projetos de letreiros e sinalização que comunicam com clareza e profissionalismo, orientando e impactando seus clientes.",
      icon: <PanelRight className="h-10 w-10 text-white" />,
    },
    {
      title: "Identidade visual profissional e coesa",
      description: "Construa uma marca sólida e reconhecida. Do logotipo à aplicação em diversos materiais, asseguro uma identidade visual que transmite credibilidade e atrai negócios.",
      icon: <MessageSquare className="h-10 w-10 text-white" />,
    },
    {
      title: "Vídeos e tours virtuais imersivos",
      description: "Permitindo que você vivencie seu projeto de forma interativa. Meus vídeos e tours virtuais são ferramentas eficazes para encantar e acelerar decisões.",
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
