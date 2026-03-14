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
    <section id="videos" className="py-6 md:py-14 bg-transparent relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-highlight/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t('home.videoSection.title')}</h2>
          <div className="w-24 h-1.5 bg-highlight mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-white/80">
            {t('home.videoSection.subtitle')}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-stretch mb-16">
          <div className="group flex-1 flex flex-col">
            <div className="w-full flex-1 glass-card rounded-[24px] overflow-hidden mb-6 border border-white/5 group-hover:border-primary/30 transition-all duration-500 aspect-video md:aspect-auto md:h-auto md:min-h-[450px] shadow-[0_32px_64px_rgba(0,0,0,0.5)] group-hover:scale-[1.01] group-hover:shadow-[0_20px_50px_rgba(158,62,213,0.15)] bg-white/5">
              <iframe
                src="https://kuula.co/share/collection/7Fwmv?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1"
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
                loading="lazy"
                title="Tour virtual - Loja conceito"
              ></iframe>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-sm font-black text-white tracking-wide opacity-40 group-hover:opacity-100 group-hover:text-highlight transition-all">{t('home.videoSection.tourTitle')}</h3>
            </div>
          </div>

          <div className="group md:w-auto flex flex-col flex-shrink-0 items-center">
            <div className="max-w-xs mx-auto md:ml-auto aspect-[9/16] glass-card rounded-[24px] overflow-hidden mb-6 border border-white/5 group-hover:border-primary/30 transition-all duration-500 w-full md:w-80 shadow-[0_32px_64px_rgba(0,0,0,0.5)] group-hover:scale-[1.01] group-hover:shadow-[0_20px_50px_rgba(158,62,213,0.15)] bg-white/5">
              <video
                src={videoSrc}
                className="w-full h-full object-cover"
                controls
              >
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
            <div className="flex flex-col items-center w-full">
              <h3 className="text-sm font-black text-white tracking-wide opacity-40 group-hover:opacity-100 group-hover:text-highlight transition-all">{t('home.videoSection.presentationTitle')}</h3>
            </div>
          </div>
        </div>

        <div className="max-w-[800px] mx-auto text-left">
          <p className="mb-8 text-lg text-white/60 leading-relaxed">
            {t('home.videoSection.footerText')}
          </p>
          <div className="flex justify-start">
            <ShimmerButton
              onClick={() => navigate('/contato')}
              shimmerColor="#FFFFFF"
              background="linear-gradient(90deg, #563474 0%, #9E3ED5 100%)"
            >
              <span className="text-white font-bold px-6 py-1">
                {t('home.videoSection.cta')}
              </span>
            </ShimmerButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
