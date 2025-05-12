
import React from 'react';
import { 
  Image, 
  LayoutDashboard, 
  Design, 
  Video, 
  MessageSquare
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Modelagem e Renderização 3D de Fachadas",
      description: "Transforme sua fachada comercial em um atrativo visual que destaca sua marca e atrai novos clientes.",
      icon: <Image className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Layouts e Ambientação de Interiores",
      description: "Projetos de interiores corporativos que otimizam o espaço e criam ambientes funcionais e atraentes.",
      icon: <LayoutDashboard className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Projetos de Comunicação Visual",
      description: "Letreiros em ACM, sinalização e displays personalizados que fortalecem a identidade da sua marca.",
      icon: <Design className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Identidade Visual Completa",
      description: "Desenvolvimento de logo, paleta de cores, tipografia e aplicações para consolidar sua marca no mercado.",
      icon: <MessageSquare className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Vídeos e Tours Virtuais 3D",
      description: "Apresentações interativas do seu espaço que proporcionam experiências imersivas aos seus clientes.",
      icon: <Video className="h-10 w-10 text-secondary" />,
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Nossos Serviços</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-text">
            Oferecemos soluções completas em design 3D para empresas que desejam se destacar no mercado e criar experiências visuais memoráveis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="service-card bg-white border-none shadow-md overflow-hidden">
              <CardContent className="p-0">
                <div className="h-2 bg-secondary"></div>
                <div className="p-6">
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-text">{service.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg font-medium mb-6">
            Precisa de um serviço personalizado? Entre em contato conosco!
          </p>
          <button 
            onClick={() => window.open('https://wa.me/5591982591612', '_blank')}
            className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-secondary transition-colors font-medium"
          >
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
