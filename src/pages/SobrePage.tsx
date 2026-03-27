import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCTA from '@/components/ProjectCTA';
import FloatingButton from '@/components/FloatingButton';
import { ArrowDownRight } from 'lucide-react';
import profileImage from '@/assets/daniel-profile.jpg';

const SobrePage = () => {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const yImage = useTransform(heroScroll, [0, 1], ["0%", "30%"]);
  const opacityHero = useTransform(heroScroll, [0, 0.8], [1, 0]);

  const stats = [
    { value: '100+', label: t('about.page.stats.projects') },
    { value: '80+', label: t('about.page.stats.clients') },
    { value: '5+', label: t('about.page.stats.experience') },
    { value: '100%', label: t('about.page.stats.results') },
  ];

  const topSkills = t('about.page.skills.top', { returnObjects: true }) as string[] || [];
  const technicalSkills = t('about.page.skills.technical', { returnObjects: true }) as string[] || [];
  const softwareSkills = t('about.page.skills.software', { returnObjects: true }) as string[] || [];

  return (
    <div className="h-screen w-screen bg-black overflow-hidden flex flex-col selection:bg-purple-500/30 font-sans">
      <Navbar />

      <div className="flex-1 w-full overflow-y-auto scroll-smooth snap-y snap-mandatory relative z-10 no-scrollbar">
        {/* Cinematic Hero */}
        <section ref={heroRef} className="relative h-screen flex flex-col snap-start shrink-0 overflow-hidden">
           {/* Background neutral glows */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none z-0">
            <div className="absolute top-[10%] left-[-10%] w-[1000px] h-[1000px] bg-white/5 rounded-none blur-[200px]"></div>
            <div className="absolute top-[50%] right-[-10%] w-[1000px] h-[1000px] bg-neutral-900/10 rounded-none blur-[200px]"></div>
          </div>

          <div className="container mx-auto px-6 md:px-12 relative z-20 flex-1 flex flex-col justify-center">
            <motion.div style={{ opacity: opacityHero }} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
              
              <div className="lg:col-span-8 flex flex-col">
                <motion.div
                  initial={{ opacity: 0, x: -30 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.8 }}
                  className="flex items-center gap-6 mb-8"
                >
                  <div className="w-16 h-[2px] bg-white" />
                  <span className="text-[10px] md:text-xs tracking-[0.6em] uppercase text-neutral-400 font-black">
                    {t('about.page.hero.role')}
                  </span>
                </motion.div>
                
                <div className="mb-8">
                  <motion.h1 
                    initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-6xl md:text-[10vw] font-black text-white leading-[0.75] tracking-tighter uppercase mb-2"
                  >
                    Daniel
                  </motion.h1>
                  <motion.h1 
                    initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    className="text-6xl md:text-[10vw] font-black leading-[0.75] tracking-tighter uppercase text-primary"
                  >
                    Jardim
                  </motion.h1>
                </div>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1 }}
                  className="text-lg md:text-xl text-neutral-400 max-w-2xl font-medium leading-relaxed mb-6 border-l-4 border-white/10 pl-8"
                >
                  {t('about.page.hero.desc')}
                </motion.p>
              </div>

              <div className="lg:col-span-4 relative">
                <div className="w-full aspect-[3/4] overflow-hidden rounded-none bg-black border border-white/5 shadow-2xl relative group max-h-[50vh] lg:max-h-none">
                  <motion.img
                    style={{ y: yImage }}
                    src={profileImage}
                    alt="Daniel Jardim"
                    className="w-full h-[140%] object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-[2s] ease-out -mt-[20%]"
                  />
                  <div className="absolute inset-0 bg-white/5 mix-blend-overlay pointer-events-none" />
                </div>
              </div>

            </motion.div>
          </div>

          {/* Integrated Stats Row */}
          <div className="w-full border-t border-white/5 bg-black/40 backdrop-blur-md relative z-30">
            <div className="container mx-auto px-6 md:px-12">
              <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/5 border-x border-white/5">
                {stats.map((stat, index) => (
                  <div key={index} className="py-8 md:py-12 flex flex-col items-center justify-center text-center group hover:bg-white/[0.02] transition-colors">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                      className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-2 group-hover:text-primary transition-colors"
                    >
                      {stat.value}
                    </motion.div>
                    <p className="text-[8px] md:text-[10px] text-neutral-500 tracking-[0.4em] font-black uppercase">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="h-screen flex items-center bg-black snap-start shrink-0 relative overflow-hidden">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col mb-12">
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-primary font-black tracking-[0.6em] uppercase text-[10px] mb-6"
              >
                History
              </motion.p>
              <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.75]">
                Minha <br/><span className="text-primary">Jornada</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 bg-white/5 gap-px border border-white/5">
              {[
                { 
                  id: 'foundation', 
                  title: t('about.page.story.p1_title'), 
                  desc: t('about.page.story.p1'),
                  index: "01"
                },
                { 
                  id: 'mastery', 
                  title: t('about.page.story.p2_title'), 
                  desc: t('about.page.story.p2'),
                  index: "02"
                }
              ].map((item, idx) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="bg-black p-8 md:p-14 relative group hover:bg-neutral-900/30 transition-all duration-1000 overflow-hidden"
                >
                  <span className="absolute top-10 right-10 text-7xl font-black text-white/5 group-hover:text-white/10 transition-colors pointer-events-none">
                    {item.index}
                  </span>
                  <div className="max-w-lg relative z-10">
                    <h3 className="text-3xl md:text-5xl font-black text-white mb-8 uppercase tracking-tighter leading-none group-hover:text-neutral-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-neutral-500 font-medium leading-relaxed text-sm md:text-xl opacity-80 group-hover:opacity-100 transition-opacity">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Arsenal Técnico */}
        <section className="h-screen flex items-center bg-black border-y border-white/5 snap-start shrink-0">
          <div className="container mx-auto px-6 md:px-12">
            <div className="mb-12">
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-primary font-black tracking-[0.6em] uppercase text-[10px] mb-6"
                >
                  Technical Stack
                </motion.p>
                <h2 className="text-5xl md:text-[8vw] font-black text-white tracking-tighter uppercase leading-[0.75]">
                  Arsenal <br/><span className="text-primary">Técnico</span>
                </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px md:bg-white/5 border-y md:border-x border-white/5">
              {[
                { title: t('about.page.skills.topTitle'), skills: topSkills, icon: "01" },
                { title: t('about.page.skills.techTitle'), skills: technicalSkills, icon: "02" },
                { title: t('about.page.skills.softTitle'), skills: softwareSkills, icon: "03" }
              ].map((group, i) => (
                <div key={i} className="flex flex-col p-8 md:p-12 bg-black group hover:bg-neutral-900/40 transition-all duration-700 relative overflow-hidden">
                  <span className="absolute -top-6 -right-6 text-7xl font-black text-white/5 group-hover:text-white/5 transition-colors">{group.icon}</span>
                  <h3 className="text-xl font-black text-white mb-8 uppercase flex items-center gap-4">
                    <span className="w-3 h-3 bg-white" />
                    {group.title}
                  </h3>
                  <ul className="flex flex-col gap-4">
                    {group.skills.map((skill, idx) => (
                      <li key={idx} className="text-neutral-500 font-bold text-sm md:text-lg hover:text-white transition-colors flex items-center gap-4 group/item">
                        <span className="text-neutral-700 text-[10px] font-black group-hover/item:text-neutral-400 transition-colors">/</span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Me */}
        <section className="h-screen flex items-center bg-black snap-start shrink-0">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-primary font-black tracking-[0.6em] uppercase text-[10px] mb-6"
              >
                Excellence
              </motion.p>
              <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.75]">
                Por que <span className="text-primary">Contratar?</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 border border-white/5 lg:divide-x divide-white/5">
              {[
                { title: t('about.page.why.results.title'), desc: t('about.page.why.results.desc') },
                { title: t('about.page.why.communication.title'), desc: t('about.page.why.communication.desc') },
                { title: t('about.page.why.experience.title'), desc: t('about.page.why.experience.desc') }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="group relative p-10 bg-neutral-900/10 hover:bg-neutral-900/30 transition-all duration-700 rounded-none overflow-hidden"
                >
                  <div className="w-14 h-14 rounded-none border border-neutral-800 bg-black flex items-center justify-center mb-8 group-hover:bg-white group-hover:border-white transition-all duration-700">
                    <ArrowDownRight strokeWidth={2.5} className="text-neutral-500 group-hover:text-black group-hover:-rotate-45 transition-all duration-700" />
                  </div>
                  <h4 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter group-hover:text-neutral-400 transition-colors leading-[0.85]">
                    {item.title}
                  </h4>
                  <p className="text-neutral-500 font-medium leading-relaxed group-hover:text-neutral-300 transition-colors text-base md:text-lg">
                    {item.desc}
                  </p>
                  <div className="absolute bottom-0 left-0 h-1 bg-white w-0 group-hover:w-full transition-all duration-1000" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="snap-start flex flex-col min-h-screen shrink-0 bg-black">
          <div className="flex-1 flex items-center justify-center px-6 md:px-12">
            <ProjectCTA />
          </div>
          <Footer />
        </section>
      </div>

      <FloatingButton />
    </div>
  );
};

export default SobrePage;
