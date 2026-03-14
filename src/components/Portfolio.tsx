
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ShimmerButton from "@/components/ui/shimmer-button";
import { MagicCard } from "@/components/ui/magic-card";
import { GalleryHorizontal } from "lucide-react";

const Portfolio = () => {
  const { t } = useTranslation();
  // Mockup portfolio items
  const portfolioItems = [
    {
      id: 1,
      title: t('portfolio.items.1.title'),
      category: t('portfolio.items.1.category'),
      imageUrl: "/placeholder.svg"
    },
    {
      id: 2,
      title: t('portfolio.items.2.title'),
      category: t('portfolio.items.2.category'),
      imageUrl: "/placeholder.svg"
    },
    {
      id: 3,
      title: t('portfolio.items.3.title'),
      category: t('portfolio.items.3.category'),
      imageUrl: "/placeholder.svg"
    },
    {
      id: 4,
      title: t('portfolio.items.4.title'),
      category: t('portfolio.items.4.category'),
      imageUrl: "/placeholder.svg"
    },
    {
      id: 5,
      title: t('portfolio.items.5.title'),
      category: t('portfolio.items.5.category'),
      imageUrl: "/placeholder.svg"
    },
    {
      id: 6,
      title: t('portfolio.items.6.title'),
      category: t('portfolio.items.6.category'),
      imageUrl: "/placeholder.svg"
    },
  ];

  return (
    <section id="portfolio" className="py-6 md:py-14 bg-transparent relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-800/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-violet-800/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white tracking-tight leading-tight">{t('portfolio.title')}</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-400 to-violet-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-white/80">
            {t('portfolio.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-[24px] overflow-hidden cursor-pointer group transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(158,62,213,0.2)] bg-white/5"
              onClick={() => { }}
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0714] to-transparent opacity-80"></div>
              </div>
              <div className="p-8 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors"></div>
                <div className="text-[10px] text-primary font-black tracking-widest mb-2">{item.category}</div>
                <h3 className="font-black text-xl mb-4 text-white tracking-tight group-hover:text-highlight transition-colors leading-tight">{item.title}</h3>
                <div className="flex justify-between items-center pt-4 border-t border-white/5">
                  <span className="text-[11px] text-white/30 font-black tracking-widest">@danieljardim.3d</span>
                  <div className="flex items-center text-primary text-[11px] font-black tracking-wide">
                    <GalleryHorizontal className="h-4 w-4 mr-2" /> {t('portfolio.viewProjects') || 'Ver detalhes'}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <p className="mb-4 text-white/80">{t('portfolio.instagram')}</p>
          <ShimmerButton
            onClick={() => window.open('https://instagram.com/danieljardim.3d', '_blank')}
            className="mx-auto"
            background="linear-gradient(90deg, #4f46e5 0%, #7c3aed 100%)"
          >
            <span className="text-white font-medium">@danieljardim.3d</span>
          </ShimmerButton>
        </div>

        <div className="mt-12 md:mt-16 bg-white/5 p-8 rounded-[32px] border border-white/10 backdrop-blur-md">
          <h3 className="text-2xl md:text-3xl font-black mb-8 text-center text-white tracking-tight">{t('portfolio.transformation.title')}</h3>
          <p className="text-center text-white/80 mb-8">{t('portfolio.transformation.desc')}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="h-full">
              <div className="glass-card rounded-[24px] p-4 bg-white/5 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(158,62,213,0.15)] h-full group">
                <div className="bg-[#0B0714] h-72 rounded-[18px] mb-6 overflow-hidden relative">
                  <img
                    src="/placeholder.svg"
                    alt="Antes"
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0714] to-transparent opacity-60"></div>
                </div>
                <div className="text-center p-2">
                  <span className="font-black text-white tracking-wide text-sm">{t('portfolio.transformation.before')}</span>
                </div>
              </div>
            </div>

            <div className="h-full">
              <div className="glass-card rounded-[24px] p-4 bg-white/5 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(158,62,213,0.2)] h-full group border-primary/20">
                <div className="bg-[#0B0714] h-72 rounded-[18px] mb-6 overflow-hidden relative">
                  <img
                    src="/placeholder.svg"
                    alt="Render do Projeto"
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0714] to-transparent opacity-60"></div>
                  <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full tracking-widest shadow-lg">Render</div>
                </div>
                <div className="text-center p-2">
                  <span className="font-black text-white tracking-wide text-sm group-hover:text-highlight transition-colors">{t('portfolio.transformation.render')}</span>
                  <p className="text-[11px] text-white/40 mt-2 tracking-wide font-medium">{t('portfolio.transformation.renderDesc')}</p>
                </div>
              </div>
            </div>
          </div>

          <MagicCard className="p-0 bg-white/5 backdrop-blur-md border border-white/10 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1" gradientColor="#6366f1">
            <div className="bg-[#181818] h-64 rounded-lg mb-4 overflow-hidden group">
              <img
                src="/placeholder.svg"
                alt="Depois"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="text-center">
              <span className="font-medium text-white">{t('portfolio.transformation.after')}</span>
              <p className="text-sm text-indigo-400 mt-1">{t('portfolio.transformation.afterDesc')}</p>
            </div>
          </MagicCard>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
