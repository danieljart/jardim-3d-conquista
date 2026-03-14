import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { Building2, Warehouse, Home, Trophy, ArrowRight } from 'lucide-react';
import ShimmerButton from "@/components/ui/shimmer-button";
import { MagicCard } from "@/components/ui/magic-card";

const ServicesOverview = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const services = [
    {
      title: t('services.items.fachadas.title'),
      description: t('services.items.fachadas.overviewDesc'),
      icon: Building2,
      slug: '/servicos/fachadas'
    },
    {
      title: t('services.items.cenografia.overviewTitle'),
      description: t('services.items.cenografia.overviewDesc'),
      icon: Warehouse,
      slug: '/servicos/cenografia'
    },
    {
      title: t('services.items.ambientes.overviewTitle'),
      description: t('services.items.ambientes.overviewDesc'),
      icon: Home,
      slug: '/servicos/ambientes'
    },
    {
      title: t('services.items.personalizados.title'),
      description: t('services.items.personalizados.overviewDesc'),
      icon: Trophy,
      slug: '/servicos/personalizados'
    }
  ];
  return (
    <section id="servicos" className="pt-8 md:pt-12 pb-4 md:pb-6 bg-transparent relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mb-8 md:mb-10 text-center mx-auto">
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white leading-tight tracking-tight">
            {t('services.overviewTitle')}
          </h2>
          <div className="w-20 h-1.5 bg-highlight mb-8 rounded-full mx-auto"></div>
          <p className="text-xl text-white/60">
            {t('services.overviewSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                onClick={() => navigate(service.slug)}
                className="cursor-pointer h-full group glass-card rounded-[24px] p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(158,62,213,0.15)] flex flex-col items-start text-left relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors"></div>
                
                <div className="relative z-10 w-full flex flex-col h-full items-start">
                  <div className="flex items-center gap-5 mb-4 w-full">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/80 transition-all duration-300 shrink-0">
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white leading-tight group-hover:text-highlight transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-white/40 text-sm leading-relaxed mb-8 flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="mt-auto flex items-center text-highlight text-[11px] font-black tracking-wide group-hover:opacity-80 transition-opacity">
                    {t('services.learnMore')} <ArrowRight className="ml-2 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 md:mt-10 text-center">
          <ShimmerButton
            onClick={() => navigate('/servicos')}
            className="mx-auto py-4 px-10 shadow-xl hover:scale-105 transition-transform"
            shimmerColor="#FFFFFF"
            background="linear-gradient(90deg, #563474 0%, #9E3ED5 100%)"
          >
            <span className="flex items-center gap-4 font-black tracking-wide text-sm md:text-base">
              {t('services.viewAll')}
              <ArrowRight className="h-6 w-6" />
            </span>
          </ShimmerButton>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
