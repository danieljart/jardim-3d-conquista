
import React from 'react';
import { 
  Image, 
  LayoutDashboard, 
  PanelRight, 
  Video, 
  MessageSquare,
  Sparkles
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Modelagem e Renderização 3D de Fachadas",
      description: "Transforme sua fachada comercial em um atrativo visual que destaca sua marca e atrai novos clientes.",
      icon: <Image className="h-10 w-10 text-white" />,
    },
    {
      title: "Layouts e Ambientação de Interiores",
      description: "Projetos de interiores corporativos que otimizam o espaço e criam ambientes funcionais e atraentes.",
      icon: <LayoutDashboard className="h-10 w-10 text-white" />,
    },
    {
      title: "Projetos de Comunicação Visual",
      description: "Letreiros em ACM, sinalização e displays personalizados que fortalecem a identidade da sua marca.",
      icon: <PanelRight className="h-10 w-10 text-white" />,
    },
    {
      title: "Identidade Visual Completa",
      description: "Desenvolvimento de logo, paleta de cores, tipografia e aplicações para consolidar sua marca no mercado.",
      icon: <MessageSquare className="h-10 w-10 text-white" />,
    },
    {
      title: "Vídeos e Tours Virtuais 3D",
      description: "Apresentações interativas do seu espaço que proporcionam experiências imersivas aos seus clientes.",
      icon: <Video className="h-10 w-10 text-white" />,
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-gradient-to-br from-indigo-900 via-purple-800 to-violet-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Nossos Serviços</h2>
          <div className="w-20 h-1 bg-indigo-300 mx-auto mb-6"></div>
          <p className="text-lg text-white/90">
            Oferecemos soluções completas em design 3D para empresas que desejam se destacar no mercado e criar experiências visuais memoráveis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {services.map((service, index) => (
            <Card key={index} className="service-card bg-white/10 backdrop-blur-sm border-none overflow-hidden hover:bg-white/20 transition-colors">
              <CardContent className="p-0">
                <div className="h-2 bg-indigo-400"></div>
                <div className="p-6">
                  <div className="mb-4 bg-indigo-600 w-16 h-16 rounded-full flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                  <p className="text-white/80">{service.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg font-medium mb-6 text-white">
            Precisa de um serviço personalizado? Entre em contato conosco!
          </p>
          <button 
            onClick={() => window.open('https://wa.me/5591982591612', '_blank')}
            className="bg-indigo-400 text-white px-8 py-3 rounded-lg hover:bg-indigo-300 transition-colors font-medium flex items-center gap-2 mx-auto"
          >
            <Sparkles className="h-5 w-5" />
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
