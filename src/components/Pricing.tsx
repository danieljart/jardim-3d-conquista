import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import ShimmerButton from "@/components/ui/shimmer-button";
import { MagicCard } from "@/components/ui/magic-card";
// import { CardSpotlight } from "@/components/ui/card-spotlight";
import { RoadmapCard } from "@/components/ui/roadmap-card";

const Pricing = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const processSteps = [{
    title: t('pricing.steps.1.title'),
    description: t('pricing.steps.1.desc'),
    icon: <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-900/30">1</div>
  }, {
    title: t('pricing.steps.2.title'),
    description: t('pricing.steps.2.desc'),
    icon: <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-900/30">2</div>
  }, {
    title: t('pricing.steps.3.title'),
    description: t('pricing.steps.3.desc'),
    icon: <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-900/30">3</div>
  }, {
    title: t('pricing.steps.4.title'),
    description: t('pricing.steps.4.desc'),
    icon: <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-900/30">4</div>
  }];

  return <section id="processo" className="py-6 md:py-24 bg-[#111111] relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full opacity-20">
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"></div>
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t('pricing.title')}</h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-400 to-violet-400 mx-auto mb-8 rounded-full"></div>
        <p className="text-xl text-white/80">
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

      <MagicCard gradientColor="#6366f1" className="mt-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1 p-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 h-full">
          <div className="flex flex-row items-center gap-4 text-left md:max-w-xl">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-lg shadow-indigo-900/30">5</div>
            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-white leading-tight mb-1">{t('pricing.final.title')}</h3>
              <p className="text-white/70 text-sm">{t('pricing.final.desc')}</p>
            </div>
          </div>
          <div className="w-full md:w-auto flex-shrink-0">
            <ShimmerButton
              onClick={() => navigate('/contato')}
              background="white"
              className="px-6 py-3 shadow-xl w-full md:w-auto"
              shimmerColor="#7c3aed"
            >
              <span className="flex items-center justify-center gap-2 text-indigo-900 font-bold text-sm">
                <Sparkles className="h-4 w-4 fill-indigo-900" />
                {t('pricing.final.button')}
              </span>
            </ShimmerButton>
          </div>
        </div>
      </MagicCard>
    </div>
  </section>;
};
export default Pricing;