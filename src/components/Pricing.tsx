import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProjectCTA from './ProjectCTA';

const Pricing = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  const processSteps = [
    { number: '01', title: t('pricing.steps.1.title'), description: t('pricing.steps.1.desc') },
    { number: '02', title: t('pricing.steps.2.title'), description: t('pricing.steps.2.desc') },
    { number: '03', title: t('pricing.steps.3.title'), description: t('pricing.steps.3.desc') },
    { number: '04', title: t('pricing.steps.4.title'), description: t('pricing.steps.4.desc') }
  ];

  return (
    <>
      <section id="processo" className="w-full bg-background pt-16 md:pt-24 pb-16 border-t border-neutral-950 snap-start h-screen flex flex-col justify-center">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col gap-4 md:gap-6 mb-12 md:mb-24">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px] bg-white"></div>
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-neutral-400">
                Work Process
              </span>
            </div>
            <h2 className="text-6xl md:text-8xl lg:text-[8vw] font-black text-white tracking-tighter leading-[0.8] uppercase max-w-5xl">
              {t('pricing.title').split(' ').slice(0, -2).join(' ')} <span className="text-primary">{t('pricing.title').split(' ').slice(-2).join(' ')}</span>
            </h2>
            <div className="flex items-center gap-4 mt-4">
              <div className="w-2 h-2 rounded-none bg-white"></div>
              <p className="text-white font-sans max-w-2xl text-base md:text-xl leading-relaxed">
                {t('pricing.subtitle')}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12 md:gap-y-20">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0.8 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: 0.8 }}
                className="flex flex-col border-t border-neutral-900 pt-8 md:pt-10 relative group snap-center md:snap-align-none"
              >
                <div className="absolute top-0 left-0 w-12 h-[1px] bg-white transition-all duration-700 group-hover:w-full group-hover:bg-primary"></div>
                
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-xl md:text-2xl font-black text-white/50 tracking-tighter shrink-0 pt-0.5 group-hover:text-primary group-hover:scale-110 transform origin-left transition-all duration-500">{step.number}</span>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-white uppercase tracking-tighter leading-none max-w-[12ch] group-hover:text-primary group-hover:scale-[1.05] transform origin-left transition-all duration-500">
                    {step.title}
                  </h3>
                </div>
                
                <p className="text-neutral-500 group-hover:text-white group-hover:scale-[1.05] transform origin-left transition-all duration-500 text-xs md:text-sm lg:text-base font-sans leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Card as its own snap-start section to guarantee visibility on PC */}
      {/* Final CTA Card as its own snap-start section to guarantee visibility on PC */}
      <section className="snap-start w-full bg-background flex items-center justify-center h-screen">
        <ProjectCTA titleKey="pricing.final.title" descKey="pricing.final.desc" btnKey="pricing.final.button" />
      </section>
    </>
  );
};

export default Pricing;