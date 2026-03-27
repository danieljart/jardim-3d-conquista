import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import danielProfile from '@/assets/daniel-profile.jpg';

const About = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll');

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight * 0.8);

        if (isVisible) {
          el.classList.add('animate-fade-in');
          el.classList.add('opacity-100');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="sobre"
      className="py-24 bg-transparent relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neutral-900/20 rounded-none blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-neutral-900/20 rounded-none blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Profile Photo - Cinematic Brutalist Center */}
        <div className="flex justify-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-48 h-48 md:w-64 md:h-64 group"
          >
            {/* Animated Borders */}
            <div className="absolute inset-0 rounded-none border border-white/10 group-hover:border-white/30 transition-colors duration-700"></div>
            <div className="absolute -inset-4 rounded-none border border-white/5 animate-[spin_30s_linear_infinite] border-t-white/20 border-r-transparent border-b-transparent border-l-transparent"></div>
            
            <div className="w-full h-full rounded-none overflow-hidden border-8 border-[#07020d] bg-[#07020d] shadow-2xl relative z-10">
              <img 
                src={danielProfile} 
                alt="Daniel Jardim" 
                className="w-full h-full object-cover grayscale brightness-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-out" 
              />
              <div className="absolute inset-0 bg-white/5 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700"></div>
            </div>
          </motion.div>
        </div>
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white leading-tight">{t('about.homeSection.title')}</h2>
          <div className="w-24 h-1.5 bg-white mx-auto mb-8 rounded-none"></div>
          <p className="text-xl text-white/60">
            {t('about.homeSection.subtitle')}
          </p>
        </div>

        {/* First card - full width */}
        <div className="mb-12 reveal-on-scroll opacity-0 transition-all duration-700 delay-100">
          <div className="relative glass-card p-10 md:p-14 rounded-none transition-all duration-500 hover:shadow-[0_20px_60px_rgba(255,255,255,0.05)] group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-none blur-[100px] -mr-40 -mt-40 transition-all duration-700 group-hover:bg-white/10"></div>
            
            <h3 className="text-3xl font-black mb-10 text-white tracking-tight relative z-10">{t('about.homeSection.cardTitle')}</h3>
            <p className="mb-12 text-lg text-white/40 leading-relaxed font-medium relative z-10">
              {t('about.homeSection.cardDesc')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-none bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-1">{t('about.homeSection.expertise.title')}</h4>
                  <p className="text-white/40 text-sm leading-relaxed">{t('about.homeSection.expertise.desc')}</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-none bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-1">{t('about.homeSection.custom.title')}</h4>
                  <p className="text-white/40 text-sm leading-relaxed">{t('about.homeSection.custom.desc')}</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-none bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-1">{t('about.homeSection.results.title')}</h4>
                  <p className="text-white/40 text-sm leading-relaxed">{t('about.homeSection.results.desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid - Aligned for Cinematic Brutalist look */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-12">
            {[
              { value: '50+', label: t('about.homeSection.stats.projects'), desc: t('about.homeSection.stats.projectsDesc') },
              { value: '85%', label: t('about.homeSection.stats.measurable'), desc: t('about.homeSection.stats.measurableDesc') },
              { value: '100%', label: t('about.homeSection.stats.digital'), desc: t('about.homeSection.stats.digitalDesc') },
              { value: '5+', label: t('about.homeSection.stats.experience'), desc: t('about.homeSection.stats.experienceDesc') }
            ].map((stat, i) => (
              <div key={i} className="bg-neutral-900/40 border border-neutral-800/50 p-10 md:p-14 rounded-none transition-all duration-300 hover:border-white/20 group relative overflow-hidden h-full flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-24 h-24 bg-neutral-900/20 rounded-none blur-2xl -mr-12 -mt-12 group-hover:bg-neutral-900/30 transition-colors"></div>
                <div className="relative z-10">
                  <div className="text-5xl md:text-6xl font-black mb-4 text-white tracking-tighter">{stat.value}</div>
                  <h4 className="text-neutral-500 font-black text-xs md:text-sm mb-4 tracking-[0.2em] uppercase">{stat.label}</h4>
                  <p className="text-neutral-500 text-sm leading-relaxed font-sans max-w-[200px]">{stat.desc}</p>
                </div>
              </div>
            ))}
        </div>

        {/* Pillars Card */}
        <div className="reveal-on-scroll opacity-0 transition-all duration-700 delay-300">
          <div className="glass-card p-10 md:p-14 rounded-none transition-all duration-300 hover:shadow-[0_20px_50px_rgba(255,255,255,0.05)] group">
            <h3 className="text-2xl font-black mb-12 text-white text-center tracking-wide">{t('about.homeSection.focusTitle')}</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {[
                { label: t('about.homeSection.values.commitment'), desc: t('about.homeSection.values.commitmentDesc') },
                { label: t('about.homeSection.values.excellence'), desc: t('about.homeSection.values.excellenceDesc') },
                { label: t('about.homeSection.values.customization'), desc: t('about.homeSection.values.customizationDesc') },
                { label: t('about.homeSection.values.strategy'), desc: t('about.homeSection.values.strategyDesc') },
                { label: t('about.homeSection.values.punctuality'), desc: t('about.homeSection.values.punctualityDesc') }
              ].map((value, i) => (
                <div key={i} className="flex flex-col items-center text-center group/item hover:scale-105 transition-transform">
                  <div className="mb-4 w-10 h-10 rounded-none bg-white/5 flex items-center justify-center border border-white/10 group-hover/item:border-white/50 transition-colors">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-white font-bold text-sm mb-2">{value.label}</p>
                  <p className="text-white/30 text-[10px] leading-relaxed font-medium">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
