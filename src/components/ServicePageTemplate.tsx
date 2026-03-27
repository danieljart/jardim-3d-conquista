import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingButton from './FloatingButton';
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import ProjectCTA from './ProjectCTA';
import { projectsData } from '@/data/projectsData';
import { motion } from 'framer-motion';

interface ServicePageProps {
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    category: string; 
    ctaText?: string;
}

const ServicePageTemplate: React.FC<ServicePageProps> = ({
    title,
    subtitle,
    description,
    features,
    category,
    ctaText
}) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const categoryProjects = projectsData.filter(p => p.category === category || p.categorySlug?.toLowerCase() === category.toLowerCase());
    const finalCta = ctaText || t('services.items.fachadas.ctaText');

    return (
    <div className="h-screen w-screen bg-black overflow-hidden flex flex-col selection:bg-purple-500/30 font-sans">
      <Navbar />

      <div className="flex-1 w-full overflow-y-auto scroll-smooth snap-y snap-mandatory relative z-10 no-scrollbar">
        {/* Hero Section - Brutalist & Cinematic */}
        <header className="relative h-screen min-h-screen flex flex-col justify-center overflow-hidden snap-start shrink-0">
          {/* Background Decor - Subtle */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-[15%] right-[-5%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] opacity-30"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] opacity-30"></div>
          </div>

          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
              
              {/* Main Typography */}
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-6 mb-10"
                >
                  <div className="w-16 h-[2px] bg-primary" />
                  <span className="text-[10px] md:text-xs tracking-[0.6em] uppercase text-primary font-black">
                    {category}
                  </span>
                </motion.div>

                <motion.h1 
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl md:text-[7.5vw] font-black mb-12 text-white leading-[0.8] tracking-tighter uppercase"
                >
                  {title.split(' ').map((word, i) => (
                    <span key={i} className={i % 2 !== 0 ? "text-primary block" : "block text-white"}>
                      {word}
                    </span>
                  ))}
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg md:text-2xl text-neutral-400 mb-16 font-medium leading-relaxed max-w-2xl border-l-4 border-primary/30 pl-8"
                >
                  {description}
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <button
                    onClick={() => navigate('/contato')}
                    className="group px-12 py-7 bg-white text-black text-xs md:text-sm font-black tracking-widest uppercase hover:bg-primary hover:text-white transition-all flex items-center gap-10 rounded-none shadow-2xl"
                  >
                    {finalCta}
                    <ChevronRight className="w-6 h-6 group-hover:translate-x-3 transition-transform" />
                  </button>
                </motion.div>
              </div>

              {/* Features Sidebar - Strictly Square/Brutalist */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="lg:w-[450px] shrink-0 bg-neutral-900/50 border border-white/5 p-10 md:p-14 backdrop-blur-xl rounded-none relative overflow-hidden"
              >
                {/* Decorative side accent */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary" />
                
                <h3 className="text-[10px] tracking-[0.4em] uppercase text-neutral-500 mb-12 font-black flex items-center gap-4">
                  {t('services.included')}
                </h3>
                <ul className="space-y-8">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-6 group">
                      <div className="mt-1 shrink-0 h-6 w-6 rounded-none border border-neutral-800 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                        <Check className="h-3 w-3 text-white" strokeWidth={4} />
                      </div>
                      <p className="text-neutral-300 text-sm md:text-lg font-bold tracking-tight uppercase leading-tight group-hover:text-white transition-colors">
                        {feature}
                      </p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </header>

        {/* Projects Gallery - High Impact Snapped Layout */}
        {categoryProjects.map((item, idx) => (
          <section 
            key={item.id}
            className="snap-start h-screen min-h-screen w-full flex items-center justify-center px-6 md:px-12 relative overflow-hidden bg-black shrink-0"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ margin: "-10%", amount: 0.5 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={`container mx-auto flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
            >
              {/* Visual */}
              <div 
                onClick={() => navigate(`/projeto/${item.id}`)}
                className="w-full lg:w-2/3 aspect-video bg-neutral-900 border border-white/5 relative overflow-hidden group cursor-pointer rounded-none"
              >
                <motion.img
                  src={item.images[0]}
                  alt={item.title}
                  initial={{ grayscale: "100%", opacity: 0.4, scale: 1.1 }}
                  whileInView={{ grayscale: "0%", opacity: 1, scale: 1 }}
                  viewport={{ amount: 0.6 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700" />
                
                {/* Category Indicator */}
                <div className="absolute bottom-0 left-0 bg-primary px-6 py-3 text-[10px] font-black text-white uppercase tracking-[0.4em] translate-y-full group-hover:translate-y-0 transition-transform">
                  {category}
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/3 flex flex-col items-start">
                <span className="text-primary font-black text-[10px] md:text-xs tracking-[0.4em] uppercase mb-4">
                  Case Study 0{idx + 1}
                </span>
                <h3 className="text-white text-4xl md:text-6xl font-black leading-[0.85] tracking-tighter uppercase mb-8">
                  {item.title}
                </h3>
                <button 
                  onClick={() => navigate(`/projeto/${item.id}`)}
                  className="group flex items-center gap-6 text-white text-[10px] md:text-xs font-black tracking-[0.4em] uppercase border-b border-white/20 pb-4 hover:border-primary transition-all"
                >
                  {t('portfolio.viewProject')} <ArrowRight className="h-4 w-4 group-hover:translate-x-3 transition-transform" />
                </button>
              </div>
            </motion.div>
          </section>
        ))}
        
        {categoryProjects.length === 0 && (
          <div className="text-center py-48 border-2 border-dashed border-white/5 rounded-none snap-start h-screen flex items-center justify-center shrink-0">
            <p className="text-neutral-700 text-lg font-black uppercase tracking-[0.4em]">{t('project.notFound')}</p>
          </div>
        )}

        <div className="px-6 md:px-12 py-20 snap-start h-screen flex items-center justify-center shrink-0 bg-black">
          <ProjectCTA />
        </div>

        <section className="snap-start w-full bg-background shrink-0">
          <Footer />
        </section>
      </div>
      
      <FloatingButton />
    </div>
    );
};

export default ServicePageTemplate;
