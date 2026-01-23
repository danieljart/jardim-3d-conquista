import React from 'react';
import { Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import ShimmerButton from '@/components/ui/shimmer-button';
import { useNavigate } from 'react-router-dom';
import videoSrc from '@/content/projects/ambientes/03/danieljardim.3d_1680981222_3076612849003130764_58748782469.mp4';

const VideoSection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <section id="videos" className="py-6 md:py-24 bg-[#0d0d0d] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-800/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-violet-800/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t('home.videoSection.title')}</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-400 to-violet-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-white/80">
            {t('home.videoSection.subtitle')}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          <div className="group flex-1 flex flex-col">
            <div className="w-full flex-1 bg-[#151515] rounded-xl overflow-hidden mb-2 border border-[#252525] group-hover:border-indigo-500/30 transition-all duration-300 aspect-video md:aspect-auto md:h-auto md:min-h-[400px]">
              <iframe
                src="https://kuula.co/share/collection/7Fwmv?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1"
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
                loading="lazy"
                title="Tour virtual - Loja conceito"
              ></iframe>
            </div>
            <div className="h-auto md:h-16 flex flex-col justify-center items-center">
              <h3 className="text-xl font-semibold mb-2 text-white text-center">{t('home.videoSection.tourTitle')}</h3>
            </div>
          </div>

          <div className="group md:w-auto flex flex-col flex-shrink-0 items-center text-center md:items-end md:text-right">
            <div className="max-w-xs mx-auto md:ml-auto aspect-[9/16] bg-[#151515] rounded-xl overflow-hidden mb-2 border border-[#252525] group-hover:border-indigo-500/30 transition-all duration-300 w-full md:w-80">
              <video
                src={videoSrc}
                className="w-full h-full object-cover"
                controls
              >
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
            <div className="h-auto md:h-16 flex flex-col justify-center items-center w-full">
              <h3 className="text-xl font-semibold mb-2 text-white text-center">{t('home.videoSection.presentationTitle')}</h3>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="mb-8 text-xl text-white/80">
            {t('home.videoSection.footerText')}
          </p>
          <ShimmerButton
            onClick={() => navigate('/contato')}
            className="mx-auto"
            background="linear-gradient(90deg, #4f46e5 0%, #7c3aed 100%)"
          >
            <span className="text-white font-medium px-4">
              {t('home.videoSection.cta')}
            </span>
          </ShimmerButton>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
