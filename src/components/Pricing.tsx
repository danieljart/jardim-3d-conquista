import React from 'react';
import { useTranslation } from 'react-i18next';
import { Check, Sparkles } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import ShimmerButton from "@/components/ui/shimmer-button";
import { MagicCard } from "@/components/ui/magic-card";
import { RoadmapCard } from "@/components/ui/roadmap-card";

const Pricing = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const processSteps = [{
    title: t('pricing.steps.1.title'),
    description: t('pricing.steps.1.desc'),
    icon: <div className="w-16 h-16 rounded-full bg-highlight flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-purple-900/30">1</div>
  }, {
    title: t('pricing.steps.2.title'),
    description: t('pricing.steps.2.desc'),
    icon: <div className="w-16 h-16 rounded-full bg-highlight flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-purple-900/30">2</div>
  }, {
    title: t('pricing.steps.3.title'),
    description: t('pricing.steps.3.desc'),
    icon: <div className="w-16 h-16 rounded-full bg-highlight flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-purple-900/30">3</div>
  }, {
    title: t('pricing.steps.4.title'),
    description: t('pricing.steps.4.desc'),
    icon: <div className="w-16 h-16 rounded-full bg-highlight flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-purple-900/30">4</div>
  }];

  return (
    <section id="processo" className="pt-4 md:pt-6 pb-12 md:pb-20 bg-transparent relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 pt-6 md:pt-8 pb-4 md:pb-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white leading-tight">{t('pricing.title')}</h2>
          <div className="w-20 h-1.5 bg-highlight mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-white/60">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="mb-8">
          <RoadmapCard
            title=""
            description=""
            items={processSteps.map((step, index) => ({
              quarter: `${index + 1}`,
              title: step.title,
              description: step.description,
              status: "in-progress"
            }))}
          />
        </div>

        <MagicCard 
          gradientColor="rgba(158, 62, 213, 0.2)" 
          className="mt-6 w-full shadow-2xl bg-white/3 backdrop-blur-[24px] border border-white/10 text-left rounded-[32px] glass-card group relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -mr-32 -mt-32"></div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 h-full relative z-10 p-6 md:p-8">
            <div className="flex flex-row items-center gap-6 text-left md:max-w-xl w-full">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white font-black text-xl flex-shrink-0 border border-white/10">5</div>
              <div className="flex flex-col">
                <h3 className="text-2xl font-black text-white leading-tight mb-2 tracking-tight">{t('pricing.final.title')}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{t('pricing.final.desc')}</p>
              </div>
            </div>
            <div className="w-full md:w-auto flex-shrink-0">
              <ShimmerButton
                onClick={() => navigate('/contato')}
                className="py-4 px-10 shadow-2xl transition-transform hover:scale-105"
                shimmerColor="#FFFFFF"
                background="linear-gradient(90deg, #563474 0%, #9E3ED5 100%)"
              >
                <span className="flex items-center justify-center gap-3 text-white font-black tracking-wide text-sm md:text-base">
                  <Sparkles className="h-5 w-5" />
                  {t('pricing.final.button')}
                </span>
              </ShimmerButton>
            </div>
          </div>
        </MagicCard>
      </div>
    </section>
  );
};

export default Pricing;