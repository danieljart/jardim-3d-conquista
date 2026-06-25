import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ServicesOverview = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const services = [
    {
      title: t('services.items.cenografia.title'),
      description: t('services.items.cenografia.overviewDesc'),
      slug: '/servicos/cenografia',
      number: '01'
    },
    {
      title: t('services.items.ambientes.title'),
      description: t('services.items.ambientes.overviewDesc'),
      slug: '/servicos/ambientes',
      number: '02'
    },
    {
      title: t('services.items.fachadas.title'),
      description: t('services.items.fachadas.overviewDesc'),
      slug: '/servicos/fachadas',
      number: '03'
    },
    {
      title: t('services.items.personalizados.title'),
      description: t('services.items.personalizados.overviewDesc'),
      slug: '/servicos/personalizados',
      number: '04'
    }
  ];

  return (
    <section id="servicos" className="w-full bg-background pt-20 md:pt-32 pb-20 border-t border-neutral-950 snap-start h-screen flex flex-col justify-center">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 md:mb-32">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-white"></div>
              <span className="text-[10px] md:text-xs font-black tracking-[0.4em] uppercase text-neutral-400">Áreas de Atuação</span>
            </div>
            <h2 className="text-6xl md:text-8xl lg:text-[7vw] font-black text-white tracking-tighter leading-[0.8] uppercase break-words">
              {t('services.overviewTitle').split(' ').slice(0, -1).join(' ')} <span className="text-primary">{t('services.overviewTitle').split(' ').slice(-1)}</span>
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-between items-end">
             <button
                onClick={() => navigate('/servicos')}
                className="group px-8 py-4 bg-white text-black text-[10px] md:text-xs font-black tracking-widest uppercase hover:bg-primary hover:text-white transition-all flex items-center gap-6 mb-8 lg:mb-0"
              >
                <span>{t('services.viewAll')}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
              
             <div className="flex items-start gap-4 border-l border-neutral-800 pl-6 py-2">
                <div className="w-2 h-2 rounded-none bg-white mt-2 shrink-0"></div>
                <p className="text-white font-sans text-xs md:text-sm leading-relaxed">
                  {t('services.overviewSubtitle')}
                </p>
             </div>
          </div>
        </div>

        <div className="w-full border-t border-neutral-900/50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-neutral-900/50">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              onClick={() => navigate(service.slug)}
              onKeyDown={(e) => e.key === 'Enter' && navigate(service.slug)}
              tabIndex={0}
              role="button"
              aria-label={`${t('services.learnMore')}: ${service.title}`}
              initial={{ opacity: 0.8 }}
              whileInView={{ opacity: 1 }}
              viewport={{ amount: 0.8 }}
              className="group w-full flex flex-col items-start p-6 md:p-10 cursor-pointer hover:bg-neutral-900/10 transition-all duration-700 relative overflow-hidden focus:outline-none focus:bg-neutral-900/20 snap-center md:snap-align-none"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-none blur-[60px]"></div>
              </div>

              <div className="flex flex-col w-full relative z-10 h-full pointer-events-none">
                {/* Number and Title row */}
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-xl md:text-2xl font-black text-white/50 tracking-tighter shrink-0 pt-0.5">
                    {service.number}
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl md:text-2xl font-black text-white tracking-tighter uppercase group-hover:text-neutral-400 transition-colors duration-500 leading-none max-w-[12ch]">
                      {service.title.split(' ').slice(0, -1).join(' ')} <span className="text-primary">{service.title.split(' ').slice(-1)}</span>
                    </h3>
                  </div>
                  <div className="ml-auto flex w-10 h-10 rounded-none border border-neutral-800 items-center justify-center bg-white border-white text-black md:bg-transparent md:border-neutral-800 md:group-hover:bg-white md:group-hover:border-white transition-all duration-500 shrink-0">
                    <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                  </div>
                </div>
                
                {/* Description below */}
                <p className="text-white text-xs md:text-sm font-sans leading-relaxed text-left transition-colors duration-500 line-clamp-3">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesOverview;
