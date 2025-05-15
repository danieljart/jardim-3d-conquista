
import React from 'react';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VideoSection = () => {
  return (
    <section id="videos" className="py-24 bg-[#0d0d0d] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-800/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-violet-800/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">A prova do meu poder 3D!</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-400 to-violet-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-white/80">
            Palavras convencem, mas resultados transformam. Veja como meu trabalho 3D proporciona uma transformação radical para seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group">
            <div className="aspect-video bg-[#151515] rounded-xl overflow-hidden mb-4 border border-[#252525] group-hover:border-indigo-500/30 transition-all duration-300">
              <div className="w-full h-full flex items-center justify-center relative group-hover:bg-[#151515]/80 transition-all duration-300 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 to-violet-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="h-6 w-6 text-white ml-1" />
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Tour virtual - Loja conceito</h3>
            <p className="text-white/70">
              Tour virtual interativo que permite explorar cada detalhe do espaço antes da construção.
            </p>
          </div>
          
          <div className="group">
            <div className="aspect-video bg-[#151515] rounded-xl overflow-hidden mb-4 border border-[#252525] group-hover:border-indigo-500/30 transition-all duration-300">
              <div className="w-full h-full flex items-center justify-center relative group-hover:bg-[#151515]/80 transition-all duration-300 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 to-violet-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="h-6 w-6 text-white ml-1" />
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Apresentação 3D - Fachada comercial</h3>
            <p className="text-white/70">
              Vídeo demonstrativo das transformações de uma fachada comercial, destacando detalhes e comunicação visual.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="mb-8 text-xl text-white/80">
            Meus vídeos e tours virtuais 3D proporcionam uma experiência realista que antecipa a realização do seu projeto.
          </p>
          <Button 
            onClick={() => window.open('https://wa.me/5591982591612?text=Olá! Tenho interesse em vídeos e tours virtuais para meu negócio.', '_blank')}
            className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-8 py-3 rounded-lg transition-colors font-medium"
          >
            Quero falar com o Daniel AGORA!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
