
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GalleryHorizontal } from "lucide-react";

const Portfolio = () => {
  // Mockup portfolio items
  const portfolioItems = [
    {
      id: 1,
      title: "Fachada 3D - FitOne Academia",
      category: "Fachada Comercial",
      imageUrl: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Redesign Interior - Docile Confeitaria",
      category: "Layout Interno",
      imageUrl: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Identidade Visual - Coonline",
      category: "Comunicação Visual",
      imageUrl: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Tour Virtual - Espaço Corporativo",
      category: "Vídeo 3D",
      imageUrl: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Letreiros em ACM - Centro Comercial",
      category: "Comunicação Visual",
      imageUrl: "/placeholder.svg"
    },
    {
      id: 6,
      title: "Projeto Completo - Lounge Bar",
      category: "Projeto Integrado",
      imageUrl: "/placeholder.svg"
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Portfólio</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-text">
            Confira alguns de nossos trabalhos recentes e descubra como podemos transformar o visual do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <div className="text-sm text-secondary font-medium mb-1">{item.category}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">@danieljardim.3d</span>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-primary hover:text-secondary"
                  >
                    <GalleryHorizontal className="h-4 w-4 mr-1" /> Ver Mais
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4">Veja mais projetos em nosso Instagram</p>
          <Button 
            onClick={() => window.open('https://instagram.com/danieljardim.3d', '_blank')}
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            @danieljardim.3d
          </Button>
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-8 text-center">Antes & Depois</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="bg-gray-200 h-64 rounded-lg mb-4 overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Antes" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="text-center">
                <span className="font-medium text-text">Antes</span>
              </div>
            </div>
            <div>
              <div className="bg-gray-200 h-64 rounded-lg mb-4 overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Depois" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="text-center">
                <span className="font-medium text-text">Depois</span>
                <p className="text-sm text-gray-500 mt-1">60% de aumento no fluxo de clientes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
