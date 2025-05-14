
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
    <section id="portfolio" className="py-24 bg-[#111111] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-800/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-violet-800/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Meus clientes já estão lucrando mais. Veja como:</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-400 to-violet-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-white/80">
            Estes não são apenas projetos bonitos. São cases de sucesso. Inspire-se e imagine o que posso fazer pelo seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div key={item.id} className="bg-[#151515] border border-[#252525] rounded-lg overflow-hidden hover:shadow-lg hover:shadow-indigo-500/10 transition-transform duration-300 hover:-translate-y-1 group">
              <div className="h-64 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="text-sm text-indigo-400 font-medium mb-1">{item.category}</div>
                <h3 className="font-semibold text-lg mb-2 text-white">{item.title}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">@danieljardim.3d</span>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-indigo-400 hover:text-indigo-300 hover:bg-indigo-900/20"
                  >
                    <GalleryHorizontal className="h-4 w-4 mr-1" /> Ver o sucesso
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-white/80">Veja mais projetos em meu Instagram</p>
          <Button 
            onClick={() => window.open('https://instagram.com/danieljardim.3d', '_blank')}
            variant="outline"
            className="border-indigo-500/30 text-indigo-400 hover:bg-indigo-900/20 hover:text-indigo-300"
          >
            @danieljardim.3d
          </Button>
        </div>

        <div className="mt-16 bg-[#151515] p-8 rounded-lg border border-[#252525]">
          <h3 className="text-3xl font-bold mb-8 text-center text-white">Veja a transformação real com meu 3D!</h3>
          <p className="text-center text-white/80 mb-8">Compare o antes e depois e comprove o impacto visual que posso criar para seu negócio. Os resultados falam por si.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="bg-[#181818] h-64 rounded-lg mb-4 overflow-hidden group">
                <img 
                  src="/placeholder.svg" 
                  alt="Antes" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" 
                />
              </div>
              <div className="text-center">
                <span className="font-medium text-white">Antes</span>
              </div>
            </div>
            
            <div>
              <div className="bg-[#181818] h-64 rounded-lg mb-4 overflow-hidden group">
                <img 
                  src="/placeholder.svg" 
                  alt="Render do Projeto" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" 
                />
              </div>
              <div className="text-center">
                <span className="font-medium text-white">Meu Render 3D</span>
                <p className="text-sm text-indigo-400 mt-1">Visualização realista do resultado</p>
              </div>
            </div>
            
            <div>
              <div className="bg-[#181818] h-64 rounded-lg mb-4 overflow-hidden group">
                <img 
                  src="/placeholder.svg" 
                  alt="Depois" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" 
                />
              </div>
              <div className="text-center">
                <span className="font-medium text-white">Depois</span>
                <p className="text-sm text-indigo-400 mt-1">60% de aumento no fluxo de clientes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
