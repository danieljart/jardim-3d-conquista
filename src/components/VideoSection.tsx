import React from 'react';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import videoSrc from '@/content/projects/ambientes/03/danieljardim.3d_1680981222_3076612849003130764_58748782469.mp4';

const VideoSection = () => {
  const navigate = useNavigate();
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

        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          <div className="group flex-1 flex flex-col">
            <div className="w-full flex-1 bg-[#151515] rounded-xl overflow-hidden mb-4 border border-[#252525] group-hover:border-indigo-500/30 transition-all duration-300 min-h-[300px]">
              <iframe
                src="https://kuula.co/share/collection/7Fwmv?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1"
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
                loading="lazy"
                title="Tour virtual - Loja conceito"
              ></iframe>
            </div>
            <div className="h-32 flex flex-col justify-start">
              <h3 className="text-xl font-semibold mb-2 text-white">Tour virtual - Loja conceito</h3>
              <p className="text-white/70">
                Tour virtual interativo que permite explorar cada detalhe do espaço antes da construção.
              </p>
            </div>
          </div>

          <div className="group md:w-auto flex flex-col flex-shrink-0 items-end text-right">
            <div className="max-w-xs ml-auto aspect-[9/16] bg-[#151515] rounded-xl overflow-hidden mb-4 border border-[#252525] group-hover:border-indigo-500/30 transition-all duration-300 w-full md:w-80">
              <video
                src={videoSrc}
                className="w-full h-full object-cover"
                controls
              >
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
            <div className="h-32 flex flex-col justify-start items-end">
              <h3 className="text-xl font-semibold mb-2 text-white">Apresentação 3D - Fachada comercial</h3>
              <p className="text-white/70 max-w-xs">
                Vídeo demonstrativo das transformações de uma fachada comercial, destacando detalhes e comunicação visual.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="mb-8 text-xl text-white/80">
            Meus vídeos e tours virtuais 3D proporcionam uma experiência realista que antecipa a realização do seu projeto.
          </p>
          <Button
            onClick={() => navigate('/contato')}
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
