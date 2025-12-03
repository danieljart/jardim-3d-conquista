import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Building2, Warehouse, Home, Trophy, ArrowRight } from 'lucide-react';

const ServicesOverview = () => {
  const { t } = useTranslation();

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
              <Link
                key={index}
                to={service.slug}
                className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-indigo-600 to-violet-600 w-16 h-16 rounded-full flex items-center justify-center mb-5 shadow-lg shadow-indigo-900/30">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-indigo-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/70 mb-4 text-sm">{service.description}</p>
                <div className="flex items-center text-indigo-400 text-sm font-medium">
                  {t('services.learnMore')} <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <Link
            to="/servicos"
            className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-8 py-3 rounded-lg transition-all duration-300 font-medium shadow-lg shadow-indigo-900/30"
          >
            {t('services.viewAll')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
