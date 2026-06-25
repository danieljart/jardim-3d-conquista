import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowDownRight } from "lucide-react";
import { useNavigate } from 'react-router-dom';

// Slideshow images
import imgFachada01 from '../content/projects/fachadas/01/SACOLÃO_ABCINTRA_0001@2x.png';
import imgFachada02 from '../content/projects/fachadas/02/FP_0001@0,75x2_.png';
import imgFachada03 from '../content/projects/fachadas/03/Scene 0.png';
import imgFachada04 from '../content/projects/fachadas/04/danieljardim.3d_1714431786_3357219602789538712_58748782469.jpg';
import imgFachada05 from '../content/projects/fachadas/05/danieljardim.3d_1743430934_3600482095865751082_58748782469.jpg';
import imgFachada06 from '../content/projects/fachadas/06/danieljardim.3d_1707262212_3297076863603207571_58748782469.jpg';

import imgCeno01 from '../content/projects/cenografia/01/D5_Scene 1_20240219_194511.png';
import imgCeno02 from '../content/projects/cenografia/02/1.png';
import imgCeno03 from '../content/projects/cenografia/03/Scene 10.png';
import imgCeno04 from '../content/projects/cenografia/04/1.jpeg';
import imgCeno05 from '../content/projects/cenografia/05/1.jpeg';
import imgCeno06 from '../content/projects/cenografia/06/danieljardim.3d_1745367992_3616731317064987583_58748782469.webp';

const slideshowImages = [
  imgFachada01, imgFachada02, imgFachada03, imgFachada04, imgFachada05, imgFachada06,
  imgCeno01, imgCeno02, imgCeno03, imgCeno04, imgCeno05, imgCeno06
];

// Preload images globally
slideshowImages.forEach((src) => {
  const img = new Image();
  img.src = src;
});

const Hero = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col justify-center overflow-hidden bg-[#07020d]">
      {/* Cinematic Background Images */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#07020d]">
        <motion.div
           key={currentImageIndex}
           initial={{ opacity: 0, scale: 1.05 }}
           animate={{ opacity: 0.3, scale: 1 }}
           exit={{ opacity: 0 }}
           transition={{ duration: 1.5, ease: "easeInOut" }}
           className="absolute inset-0 bg-cover bg-center grayscale contrast-125 will-change-transform z-0"
           style={{ backgroundImage: `url("${slideshowImages[currentImageIndex]}")` }}
        />
        <div className="absolute inset-0 bg-[#07020d]/70 z-10 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#07020d] via-transparent to-transparent z-20"></div>
        <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-none blur-[150px] z-10 opacity-40"></div>
      </div>

      <div className="container relative z-30 pt-24 pb-8 px-6 md:px-12 mx-auto pointer-events-none">
        
        {/* Diagonal Line Indicator - Cinematic Detail */}
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "100%", opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute left-6 md:left-12 top-0 w-[1px] bg-gradient-to-b from-transparent via-primary to-white/20 origin-top -z-10"
        />

        <div className="flex flex-col items-start w-full relative">
          {/* Subtle Accent Glow behind title */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[60%] bg-primary/5 blur-[120px] pointer-events-none -z-10"></div>
          
          {/* STAIRCASE TITLE - Cinematic Brutalist */}
          <div className="flex flex-col w-full leading-[0.85] tracking-tighter uppercase font-black text-white pt-8 pb-8">
            
            <motion.h1 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-[6vw] font-black whitespace-nowrap"
            >
              {t('hero.title1')}
            </motion.h1>
            
            <motion.h1 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-[6vw] pl-[3vw] font-black whitespace-nowrap"
            >
              {t('hero.title2')}
            </motion.h1>

            <motion.h1 
              initial={{ x: -150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-[6vw] pl-[6vw] font-black text-white/50 whitespace-nowrap"
            >
              {t('hero.title3') || 'QUE'}
            </motion.h1>

            <motion.h1 
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-[6vw] pl-[9vw] font-black concrete-text whitespace-nowrap"
            >
              {t('hero.titleHighlight')}
            </motion.h1>
            
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full mt-8 md:mt-12 gap-12 pointer-events-auto">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.5 }}
               className="max-w-md border-l-4 border-white pl-8"
            >
              <p className="text-lg md:text-2xl text-white font-medium leading-tight mb-2">
                {t('hero.subtitle')}
              </p>
              <p className="text-[10px] md:text-xs tracking-[0.4em] text-primary/60 uppercase font-black">
                Design 3D • Cenografia • Fachadas
              </p>
            </motion.div>
            
            <motion.button 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/contato')}
              className="group flex items-center gap-6 bg-white text-black px-10 py-6 md:px-12 md:py-8 rounded-none font-black text-xs md:text-sm tracking-[0.3em] uppercase hover:bg-primary hover:text-white transition-all duration-500 shrink-0"
            >
              <span>{t('hero.cta')}</span>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-black text-white flex items-center justify-center group-hover:rotate-[-45deg] group-hover:bg-white group-hover:text-primary transition-all duration-500">
                <ArrowDownRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={3} />
              </div>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
