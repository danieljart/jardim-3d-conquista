
import React from 'react';

const VideoSection = () => {
  return (
    <section id="videos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Vídeos e Tours</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-text">
            Experiências imersivas que apresentam seu espaço de forma interativa e memorável.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-4">
              {/* Placeholder for video */}
              <div className="w-full h-full flex items-center justify-center bg-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Tour Virtual - Loja Conceito</h3>
            <p className="text-text">
              Um exemplo de tour virtual interativo que permite ao cliente explorar cada detalhe do espaço antes mesmo da sua construção.
            </p>
          </div>
          <div>
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-4">
              {/* Placeholder for video */}
              <div className="w-full h-full flex items-center justify-center bg-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Apresentação 3D - Fachada Comercial</h3>
            <p className="text-text">
              Vídeo demonstrativo que apresenta as transformações de uma fachada comercial, destacando os detalhes arquitetônicos e a comunicação visual.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="mb-6 text-text">
            Nossos vídeos e tours virtuais são criados com tecnologia de ponta para proporcionar uma experiência realista e imersiva.
          </p>
          <button 
            onClick={() => window.open('https://wa.me/5591982591612?text=Olá! Tenho interesse em vídeos e tours virtuais para meu negócio.', '_blank')}
            className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-secondary transition-colors font-medium"
          >
            Solicitar Demonstração
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
