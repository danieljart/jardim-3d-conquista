import React from 'react';
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projectsData } from "@/data/projectsData";
import { ServiceCategorySection } from "@/components/ui/service-category-section";

const ServicosPage = () => {
  const { t } = useTranslation();

  const getCategoryImage = (slug: string) => {
    // Priority mapping for better visuals
    const mapping: Record<string, number> = {
      'fachadas': 1,
      'cenografia': 4,
      'ambientes': 5,
      'personalizados': 9
    };
    
    const projectId = mapping[slug];
    const project = projectsData.find(p => p.id === projectId) || projectsData.find(p => p.categorySlug === slug);
    return project?.images[0] || "/placeholder.svg";
  };

  const services = [
    {
      id: "cenografia",
      title: t('services.items.cenografia.title'),
      desc: t('services.items.cenografia.description'),
      path: "/servicos/cenografia",
      image: getCategoryImage("cenografia")
    },
    {
      id: "ambientes",
      title: t('services.items.ambientes.title'),
      desc: t('services.items.ambientes.description'),
      path: "/servicos/ambientes",
      image: getCategoryImage("ambientes")
    },
    {
      id: "fachadas",
      title: t('services.items.fachadas.title'),
      desc: t('services.items.fachadas.description'),
      path: "/servicos/fachadas",
      image: getCategoryImage("fachadas")
    },
    {
      id: "personalizados",
      title: t('services.items.personalizados.title'),
      desc: t('services.items.personalizados.description'),
      path: "/servicos/personalizados",
      image: getCategoryImage("personalizados")
    }
  ];

  return (
    <div className="h-screen w-screen bg-black overflow-hidden flex flex-col">
      <Navbar />
      
      {/* Background Decor - Global purple glows */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
        <div className="absolute top-[10%] left-[-10%] w-[800px] h-[800px] bg-white/5 rounded-none blur-[150px]"></div>
        <div className="absolute top-[40%] right-[-10%] w-[800px] h-[800px] bg-neutral-900/10 rounded-none blur-[150px]"></div>
      </div>

      {/* Main Snap Container */}
      <div className="flex-1 w-full overflow-y-auto scroll-smooth snap-y snap-mandatory relative z-10">
        
        {/* Header Section */}
        <section className="snap-start min-h-[70vh] w-full flex flex-col justify-center bg-black relative overflow-hidden pt-32 pb-20">
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="max-w-4xl">
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-[10px] md:text-xs tracking-[0.5em] uppercase text-primary mb-8 font-black"
              >
                {t('services.overviewTitle')}
              </motion.p>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-6xl md:text-[10vw] font-black tracking-tighter leading-[0.8] uppercase mb-12"
              >
                <span className="text-white">{t('services.pageTitle')}</span> <br />
                <span className="text-primary inline-block">{t('services.pageTitleHighlight')}</span>
                <span className="text-white/20 inline-block ml-2">{t('services.pageTitleEnd')}</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-neutral-400 text-lg md:text-2xl font-sans max-w-2xl leading-relaxed"
              >
                {t('services.pageDescription')}
              </motion.p>
            </div>
          </div>
        </section>

        {/* Category Sections */}
        {services.map((service, index) => (
          <ServiceCategorySection 
            key={service.id}
            id={service.id}
            title={service.title}
            description={service.desc}
            imageUrl={service.image}
            path={service.path}
            index={index}
          />
        ))}

        {/* Footer Section */}
        <section className="snap-start w-full bg-background border-t border-neutral-900">
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default ServicosPage;
