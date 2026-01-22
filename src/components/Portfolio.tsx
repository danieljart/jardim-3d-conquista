
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
    <section id="portfolio" className="py-6 md:py-24 bg-[#111111] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-800/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-violet-800/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t('portfolio.title')}</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-400 to-violet-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-white/80">
            {t('portfolio.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <MagicCard
              key={item.id}
              className="bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden cursor-pointer group hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1"
              gradientColor="#6366f1"
              onClick={() => { }}
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4 relative z-10">
                <div className="text-sm text-indigo-400 font-medium mb-1">{item.category}</div>
                <h3 className="font-semibold text-lg mb-2 text-white">{item.title}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">@danieljardim.3d</span>
                  <div className="flex items-center text-indigo-400 text-sm font-medium">
                    <GalleryHorizontal className="h-4 w-4 mr-1" /> Ver o sucesso
                  </div>
                </div>
              </div>
            </MagicCard>
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

        <div className="mt-12 md:mt-16 bg-[#151515] p-8 rounded-lg border border-[#252525]">
          <h3 className="text-3xl font-bold mb-8 text-center text-white">{t('portfolio.transformation.title')}</h3>
          <p className="text-center text-white/80 mb-8">{t('portfolio.transformation.desc')}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="h-full">
              <MagicCard className="p-0 bg-white/5 backdrop-blur-md border border-white/10 h-full hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1" gradientColor="#6366f1">
                <div className="bg-[#181818] h-64 rounded-lg mb-4 overflow-hidden group">
                  <img
                    src="/placeholder.svg"
                    alt="Antes"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="text-center">
                  <span className="font-medium text-white">{t('portfolio.transformation.before')}</span>
                </div>
              </MagicCard>
            </div>

            <div className="h-full">
              <MagicCard className="p-0 bg-white/5 backdrop-blur-md border border-white/10 h-full hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1" gradientColor="#6366f1">
                <div className="bg-[#181818] h-64 rounded-lg mb-4 overflow-hidden group">
                  <img
                    src="/placeholder.svg"
                    alt="Render do Projeto"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="text-center">
                  <span className="font-medium text-white">{t('portfolio.transformation.render')}</span>
                  <p className="text-sm text-indigo-400 mt-1">{t('portfolio.transformation.renderDesc')}</p>
                </div>
              </MagicCard>
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
