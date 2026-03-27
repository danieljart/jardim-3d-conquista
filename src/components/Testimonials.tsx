
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
    <section className="py-6 md:py-14 bg-transparent text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-white/5 rounded-none blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-white/5 rounded-none blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white tracking-tight leading-tight">{t('testimonials.title')}</h2>
          <div className="w-24 h-1.5 bg-white mx-auto mb-8 rounded-none"></div>
          <p className="text-xl text-white/80">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="glass-card rounded-none overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(255,255,255,0.05)] group bg-white/5 relative"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={testimonial.avatar}
                  alt={`${t('testimonials.projectAlt')} ${testimonial.company}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0714] to-transparent opacity-80"></div>
              </div>
              <div className="p-8 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-none blur-2xl -mr-16 -mt-16 group-hover:bg-white/10 transition-colors"></div>
                <div className="text-4xl text-white mb-6 opacity-30 font-serif italic">"</div>
                <p className="text-white/40 mb-10 min-h-[100px] leading-relaxed font-medium italic">
                  {testimonial.quote}
                </p>
                <div className="mt-auto pt-6 border-t border-white/5">
                  <h4 className="font-black text-white text-base tracking-tight mb-1">{testimonial.name}</h4>
                  <span className="flex items-center gap-4 font-black tracking-wide text-sm md:text-base">
                    <Sparkles className="h-3 w-3 mr-2 text-white" /> {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-white">{t('testimonials.commitment.title')}</h3>
          <blockquote className="text-xl italic">
            {t('testimonials.commitment.quote')}
          </blockquote>
          <p className="mt-4 font-semibold flex items-center justify-center">
            <span className="bg-white w-8 h-8 rounded-none flex items-center justify-center mr-2">
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
