import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCategorySectionProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  path: string;
  index: number;
}

export const ServiceCategorySection: React.FC<ServiceCategorySectionProps> = ({ 
  id, title, description, imageUrl, path, index 
}) => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Sophisticated parallax movement
  const yOffset = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={ref}
      className="h-screen w-full flex flex-col justify-center items-center relative overflow-hidden snap-start bg-[#07020d]"
    >
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          src={imageUrl} 
          alt={title}
          style={{ 
            y: yOffset,
            scale: 1.25 // Provides buffer for parallax
          }}
          animate={{ 
            filter: isInView ? "grayscale(0%) contrast(1.1) brightness(0.6)" : "grayscale(50%) contrast(1) brightness(0.4)"
          }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full h-full object-cover transition-all"
          loading="lazy"
        />
        {/* Gradients to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
      </div>

      <motion.div 
        onViewportEnter={() => setIsInView(true)}
        onViewportLeave={() => setIsInView(false)}
        className="container mx-auto px-6 md:px-12 relative z-20 flex flex-col items-center text-center"
      >
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary font-black tracking-[0.6em] uppercase text-[10px] md:text-xs mb-8"
        >
          {t('services.overviewTitle')} 0{index + 1}
        </motion.span>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-[9vw] font-black text-white leading-[0.9] tracking-tighter uppercase mb-12 max-w-5xl"
        >
          {title}
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-neutral-300 font-sans text-lg md:text-2xl max-w-2xl leading-relaxed mb-16"
        >
          {description}
        </motion.p>

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link 
            to={path}
            className="group px-10 py-6 bg-primary text-white text-xs md:text-sm font-black tracking-widest uppercase hover:bg-neutral-200 hover:text-black transition-all flex items-center gap-8 rounded-none shadow-2xl relative z-40"
          >
            {t('services.learnMore') || 'Detalhes'}
            <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Index Number Indicator (Side) */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:block z-20">
        <div className="flex flex-col items-center gap-4">
          <div className="h-20 w-[1px] bg-neutral-800 relative">
             <motion.div 
               className="absolute top-0 left-0 w-full bg-primary"
               style={{ height: "100%", transformOrigin: "top" }}
               whileInView={{ scaleY: 1 }}
               initial={{ scaleY: 0 }}
               transition={{ duration: 0.8 }}
             />
          </div>
          <span className="text-[10px] font-black text-white mix-blend-difference tracking-tighter">0{index + 1}</span>
        </div>
      </div>
    </section>
  );
};
