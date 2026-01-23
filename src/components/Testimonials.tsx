
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Sparkles } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";

const Testimonials = () => {
  const { t } = useTranslation();
  const testimonials = [
    {
      id: 1,
      name: t('testimonials.items.1.name'),
      company: t('testimonials.items.1.company'),
      quote: t('testimonials.items.1.quote'),
      avatar: "/placeholder.svg"
    },
    {
      id: 2,
      name: t('testimonials.items.2.name'),
      company: t('testimonials.items.2.company'),
      quote: t('testimonials.items.2.quote'),
      avatar: "/placeholder.svg"
    },
    {
      id: 3,
      name: t('testimonials.items.3.name'),
      company: t('testimonials.items.3.company'),
      quote: t('testimonials.items.3.quote'),
      avatar: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-6 md:py-24 bg-gradient-to-r from-indigo-950 to-violet-950 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t('testimonials.title')}</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-400 to-violet-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-white/80">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <MagicCard
              key={testimonial.id}
              className="glass-card rounded-xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-indigo-500/10 group bg-transparent"
              gradientColor="#6366f1"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={testimonial.avatar}
                  alt={`Projeto para ${testimonial.company}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-3xl text-indigo-400 mb-4">"</div>
                <p className="text-white/80 mb-6 min-h-[100px]">
                  {testimonial.quote}
                </p>
                <div className="mt-auto border-t border-white/10 pt-4">
                  <h4 className="font-semibold text-white text-lg">{testimonial.name}</h4>
                  <p className="text-white/70 text-sm flex items-center">
                    <Sparkles className="h-3 w-3 mr-1 text-indigo-400" /> {testimonial.company}
                  </p>
                </div>
              </div>
            </MagicCard>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-white">{t('testimonials.commitment.title')}</h3>
          <blockquote className="text-xl italic">
            {t('testimonials.commitment.quote')}
          </blockquote>
          <p className="mt-4 font-semibold flex items-center justify-center">
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 w-8 h-8 rounded-full flex items-center justify-center mr-2">
              <Sparkles className="h-4 w-4 text-white" />
            </span>
            {t('testimonials.commitment.signature')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
