import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  index: number;
  align?: 'left' | 'right';
  containerRef?: React.RefObject<HTMLDivElement>;
}

export const ProjectCard3D: React.FC<ProjectCardProps> = ({ id, title, category, imageUrl, index, align = 'left', containerRef }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    container: containerRef,
    offset: ["start end", "end start"]
  });

  // Balanced parallax movement
  const yOffset = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const xOffset = useTransform(scrollYProgress, [0, 1], index % 2 === 0 ? ["-5%", "5%"] : ["5%", "-5%"]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => setIsInView(true)}
      onViewportLeave={() => setIsInView(false)}
      viewport={{ margin: "-20%" }}
      className="w-full h-full flex flex-col items-center justify-center py-10 md:py-20 relative group"
    >
      {/* Aspect Container */}
      <Link 
        to={`/projeto/${id}`} 
        className="block relative w-full aspect-[3/4] md:aspect-auto md:h-[65vh] max-w-full md:max-w-5xl mx-auto overflow-hidden bg-black border border-white/5 transition-all duration-700 ease-out group-hover:border-white/20"
      >
        <div className="relative w-full h-full overflow-hidden bg-black">
          <motion.img 
            src={imageUrl} 
            alt={title} 
            style={{ 
              y: yOffset,
              x: xOffset,
              scale: 1.3 // Extra scale to provide padding for parallax
            }}
            animate={{ 
              filter: isInView ? "grayscale(0%) contrast(1) brightness(1)" : "grayscale(100%) contrast(1.1) brightness(0.8)"
            }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full object-cover block will-change-transform" 
            loading="lazy" 
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
        </div>
      </Link>
      
      {/* Title Overlay */}
      <div className={`absolute bottom-8 z-20 px-4 md:px-0 flex flex-col pointer-events-none w-full ${
        align === 'left' ? 'left-0 md:left-[5%] items-start' : 'right-0 md:right-[5%] items-end text-right'
      }`}>
        <div className="overflow-hidden bg-[#07020d]/80 backdrop-blur-md p-4 md:p-6 border border-white/5 shadow-2xl max-w-[90%] md:max-w-full">
          <motion.p 
            initial={{ opacity: 0, x: align === 'left' ? -20 : 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-primary mb-2 font-black"
          >
            {category}
          </motion.p>
          <motion.h3 
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-3xl md:text-7xl font-black uppercase tracking-tighter text-white leading-[0.85] truncate max-w-full"
          >
            {title}
          </motion.h3>
        </div>
      </div>
    </motion.div>
  );
};
