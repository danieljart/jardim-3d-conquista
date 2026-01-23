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
    <section className="py-6 md:py-24 bg-gradient-to-br from-indigo-950 via-purple-950 to-violet-950 relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {t('services.overviewTitle')}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-400 to-violet-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-white/80">
            {t('services.overviewSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <MagicCard
                key={index}
                onClick={() => navigate(service.slug)}
                className="cursor-pointer h-full group bg-white/5 backdrop-blur-md border border-white/10 p-6 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1 flex flex-col"
                gradientColor="#6366f1"
              >
                <div className="flex flex-col h-full">
                  <div className="flex flex-col flex-grow items-center">
                    <div className="flex flex-row items-center justify-center gap-4 mb-4 w-full">
                      <div className="bg-gradient-to-br from-indigo-600 to-violet-600 w-16 h-16 rounded-full flex items-center justify-center shadow-lg shadow-indigo-900/30 flex-shrink-0">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-xl font-semibold mb-1 text-white group-hover:text-indigo-400 transition-colors text-left leading-tight">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    <div className="text-white/70 text-sm text-center">
                      {service.description}
                    </div>
                  </div>
                  <div className="mt-auto w-full flex justify-center text-indigo-400 text-sm font-medium pt-4">
                    {t('services.learnMore')} <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </MagicCard>
            );
          })}
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <ShimmerButton
            onClick={() => window.location.href = '/servicos'}
            className="mx-auto"
            background="linear-gradient(90deg, #4f46e5 0%, #7c3aed 100%)"
          >
            <span className="flex items-center gap-2 font-medium">
              {t('services.viewAll')}
              <ArrowRight className="h-5 w-5" />
            </span>
          </ShimmerButton>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
