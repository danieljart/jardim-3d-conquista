import React from 'react';
import { useTranslation } from 'react-i18next';
import { Sparkles, ArrowRight } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { MagicCard } from "@/components/ui/magic-card";
import ShimmerButton from "@/components/ui/shimmer-button";

// Import images
import fachadasImg from '@/content/projects/fachadas/Scene 0.png';
import cenografiaImg from '@/content/projects/cenografia/1.jpeg';
import ambientesImg from '@/content/projects/ambientes/danieljardim.3d_1727818425_3469514874563525172_58748782469.jpg';
import personalizadosImg from '@/content/projects/personalizados/danieljardim.3d_1692115206_3170014560966158750_58748782469.jpg';

const Services = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const services = [
    {
      title: t('services.items.fachadas.title'),
      description: t('services.items.fachadas.description'),
      image: fachadasImg,
      slug: '/servicos/fachadas'
    },
    {
      title: t('services.items.cenografia.title'),
      description: t('services.items.cenografia.description'),
      image: cenografiaImg,
      slug: '/servicos/cenografia'
    },
    {
      title: t('services.items.ambientes.title'),
      description: t('services.items.ambientes.description'),
      image: ambientesImg,
      slug: '/servicos/ambientes'
    },
    {
      title: t('services.items.personalizados.title'),
      description: t('services.items.personalizados.description'),
      image: personalizadosImg,
      slug: '/servicos/personalizados'
    }
  ];

  return (
    <section id="servicos" className="py-6 md:py-14 bg-transparent relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white tracking-tight leading-tight whitespace-nowrap">{t('services.title')}</h2>
          <div className="w-24 h-1.5 bg-highlight mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-white/80">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => navigate(service.slug)}
              onKeyDown={(e) => e.key === 'Enter' && navigate(service.slug)}
              tabIndex={0}
              role="button"
              aria-label={`${t('services.learnMore')}: ${service.title}`}
              data-cursor="hover"
              data-cursor-color="purple"
              className="group relative flex flex-col justify-between p-8 min-h-[320px] bg-white/5 border border-white/10 rounded-[32px] overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            >
              {/* Main content container with pointer-events-none for cursor reliability */}
              <div className="flex flex-col w-full relative z-10 h-full pointer-events-none">
                {/* Number indicator */}
                <span className="text-white/20 font-black text-6xl tracking-tighter mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="mt-auto">
                  {/* Title and Button Row */}
                  <div className="flex items-end justify-between mb-4">
                    <h3 className="text-3xl font-black text-white leading-[0.85] tracking-tighter uppercase max-w-[70%] transition-colors group-hover:text-purple-400">
                      {service.title.split(' ').map((word, i, arr) => (
                        <React.Fragment key={i}>
                          {word}
                          {i === Math.floor(arr.length / 2) - 1 ? <br /> : ' '}
                        </React.Fragment>
                      ))}
                    </h3>
                    
                    {/* Round Arrow Button - Pointer events auto to be clickable but transition is handled by card click */}
                    <div className="h-14 w-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                      <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/40 text-sm leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Purple glow effect */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-600/10 blur-[80px] group-hover:bg-purple-600/30 transition-all duration-700" />
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <ShimmerButton
            onClick={() => navigate('/contato')}
            className="mx-auto"
            background="linear-gradient(90deg, #563474 0%, #9E3ED5 100%)"
            shimmerColor="#FFFFFF"
          >
            <span className="flex items-center gap-2 font-medium">
              <Sparkles className="h-5 w-5" />
              {t('services.requestQuote')}
            </span>
          </ShimmerButton>
        </div>
      </div>
    </section>
  );
};

export default Services;
