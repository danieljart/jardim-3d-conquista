import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ProjectCard3D } from './ui/3d-project-card';
import { ArrowDownRight } from "lucide-react";
import { projectsData } from '@/data/projectsData';

// Fallback images for development if dynamic content is missing
const imgPlaceholder = "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1200&auto=format&fit=crop";

const Portfolio = ({ containerRef }: { containerRef?: React.RefObject<HTMLDivElement> }) => {
  const { t, i18n } = useTranslation();
  
  // Specific projects requested: McCain, Fernando Perez, Schweppes, Amaral
  const featuredIds = [3004, 1002, 3005, 1003];
  
  const portfolioItems = featuredIds
    .map(id => projectsData.find(p => p.id === id))
    .filter((p): p is typeof projectsData[0] => !!p)
    .map((p, index) => ({
      id: p.id,
      title: i18n.language === 'en' && p.title_en ? p.title_en : p.title,
      category: t(`services.items.${p.categorySlug}.title`),
      imageUrl: p.images[0] || imgPlaceholder,
      align: index % 2 === 0 ? 'left' as const : 'right' as const
    }));

  return (
    <>
      {/* Projects Snap Points - Snapping directly into content as requested */}
      {portfolioItems.map((item, index) => (
        <section 
          key={item.id} 
          id={index === 0 ? "portfolio" : undefined}
          className="snap-start h-screen w-full flex items-center justify-center px-4 md:px-12 bg-[#07020d] relative overflow-hidden"
        >
          <ProjectCard3D 
            id={item.id}
            index={index}
            title={item.title}
            category={item.category}
            imageUrl={item.imageUrl}
            align={item.align}
            containerRef={containerRef}
          />
        </section>
      ))}

      {/* Instagram CTA Snap Point */}
      <section className="snap-start h-screen flex flex-col items-center justify-center bg-[#07020d] border-t border-neutral-900/50 overflow-hidden relative">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-neutral-900/20 rounded-none blur-[120px]"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          className="container mx-auto px-6 md:px-12 text-center"
        >
          <a 
            href="https://instagram.com/danieljardim.3d" 
            target="_blank" 
            rel="noreferrer"
            data-cursor="hover"
            className="group flex flex-col items-center gap-8"
          >
            <div className="w-24 md:w-32 h-24 md:h-32 rounded-none border border-white/10 bg-black flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
              <ArrowDownRight strokeWidth={1} className="w-8 h-8 md:w-10 md:h-10 group-hover:-rotate-45 transition-transform duration-700" />
            </div>
            <div>
              <p className="text-neutral-500 text-xs md:text-sm tracking-[0.3em] uppercase mb-4">{t('portfolio.instagram')}</p>
              <h3 className="text-4xl md:text-6xl lg:text-[7vw] font-black text-white tracking-tighter uppercase group-hover:text-neutral-400 transition-colors duration-500 leading-none">
                @danieljardim.3d
              </h3>
            </div>
          </a>
        </motion.div>
      </section>
    </>
  );
};

export default Portfolio;
