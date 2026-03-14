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
              className="glass-card rounded-[24px] overflow-hidden cursor-pointer group transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(158,62,213,0.2)]"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0714] to-transparent opacity-80"></div>
              </div>
              <div className="p-8 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors"></div>
                <h3 className="text-xl font-black mb-3 text-white tracking-tight group-hover:text-highlight transition-colors leading-tight">{service.title}</h3>
                <p className="text-white/40 text-sm mb-6 leading-relaxed font-medium line-clamp-2">{service.description}</p>
                <div className="flex items-center text-primary text-[11px] font-black uppercase tracking-[0.2em]">
                  {t('services.viewProjects')} <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
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
