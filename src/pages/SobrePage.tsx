import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCTA from '@/components/ProjectCTA';
import FloatingButton from '@/components/FloatingButton';
import ShimmerButton from '@/components/ui/shimmer-button';
import { MagicCard } from '@/components/ui/magic-card';
import { Award, Users, Clock, Target } from 'lucide-react';
import profileImage from '@/assets/daniel-profile.jpg';

import { BeamsBackground } from '@/components/ui/beams-background';

const SobrePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const stats = [
    { icon: Award, value: '100+', label: t('about.page.stats.projects') },
    { icon: Users, value: '80+', label: t('about.page.stats.clients') },
    { icon: Clock, value: '5+', label: t('about.page.stats.experience') },
    { icon: Target, value: '100%', label: t('about.page.stats.results') },
  ];

  const handleContactClick = () => {
    navigate('/contato');
  };

  return (
    <div className="min-h-screen bg-transparent relative overflow-hidden">
      <Navbar />

      <main className="pt-36 md:pt-44 pb-16 relative z-10">
        <section className="container mx-auto px-4 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <h1 className="text-3xl md:text-5xl font-black mb-6 text-white leading-tight">
                {t('about.page.hero.greeting')}<br />
                <span className="text-primary tracking-tight">
                  Daniel Jardim
                </span>
              </h1>
              <div className="w-16 h-1 bg-primary mb-8 rounded-full"></div>
              <p className="text-xl text-white/80 mb-4 font-medium">
                {t('about.page.hero.role')}
              </p>
              <p className="text-white/60 mb-8 leading-relaxed max-w-lg">
                {t('about.page.hero.desc')}
              </p>
              <ShimmerButton
                onClick={handleContactClick}
                shimmerColor="#FFFFFF"
                background="linear-gradient(90deg, #563474 0%, #9E3ED5 100%)"
                className="shadow-xl py-4 px-10"
              >
                <span className="text-white font-black tracking-wide text-sm md:text-base px-2">
                  {t('about.page.hero.cta')}
                </span>
              </ShimmerButton>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md group">
                <div className="w-full h-auto glass-card rounded-[24px] border border-white/10 p-4 transition-all duration-500 bg-white/5 shadow-[0_32px_64px_rgba(0,0,0,0.5)]">
                  <img
                    src={profileImage}
                    alt="Daniel Jardim"
                    className="w-full h-auto object-cover rounded-[20px] transition-all duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="glass-card rounded-[32px] p-8 transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_20px_50px_rgba(158,62,213,0.15)] group flex items-center gap-6 text-left bg-white/3 border border-white/10 backdrop-blur-[24px]"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary transition-colors duration-300 shrink-0">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-4xl font-black text-white mb-1 leading-none group-hover:text-highlight transition-all">{stat.value}</div>
                    <div className="text-white/40 text-[10px] font-black tracking-widest group-hover:text-white transition-colors">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="container mx-auto px-4 mb-20">
          <MagicCard 
            gradientColor="rgba(158, 62, 213, 0.1)"
            className="rounded-[32px] p-12 md:p-20 relative transition-all duration-300 shadow-[0_32px_64px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(158,62,213,0.2)] bg-white/3 border border-white/10 backdrop-blur-[24px]"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -mr-48 -mt-48 transition-all duration-700"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-[120px] -ml-40 -mb-40 transition-all duration-700"></div>
            
            <h2 className="text-3xl md:text-5xl font-black mb-16 text-white text-center tracking-tight relative z-10 leading-relaxed">
              {t('about.page.story.title')}
            </h2>
            
            <div className="max-w-[850px] mx-auto space-y-16 text-white/50 text-left text-lg md:text-xl leading-relaxed relative z-10 font-medium group">
              <div className="relative pl-20 border-l-[3px] border-primary/20 hover:border-primary transition-all duration-500 py-8">
                <p className="group-hover:text-white/90 transition-colors duration-500">
                  {t('about.page.story.p1')}
                </p>
              </div>
              <div className="relative pl-20 border-l-[3px] border-primary/20 hover:border-primary transition-all duration-500 py-8">
                <p className="group-hover:text-white/90 transition-colors duration-500">
                  {t('about.page.story.p2')}
                </p>
              </div>
            </div>
          </MagicCard>
        </section>

        <section className="container mx-auto px-4 mb-12">
          <h2 className="text-3xl font-bold mb-12 text-white text-center">{t('about.page.skills.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
            {/* Design & 3D */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-white border-b border-white/10 pb-4">{t('about.page.skills.design')}</h3>
              <div className="space-y-6">
                {[
                  { name: 'Blender 3D', level: 5 },
                  { name: 'CorelDRAW', level: 5 },
                  { name: 'Photoshop', level: 4 },
                  { name: 'D5 Render', level: 4 },
                  { name: 'Illustrator', level: 3 },
                ].map((skill, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-white/80 font-medium">{skill.name}</span>
                    <div className="flex gap-1.5">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-2.5 w-8 rounded-sm transition-all duration-300 ${i < skill.level ? '' : 'bg-white/10'}`}
                          style={i < skill.level ? {
                            background: 'linear-gradient(90deg, #563474 0%, #9E3ED5 100%)',
                            backgroundSize: '500% 100%',
                            backgroundPosition: `${(i * 100) / 4}% 0%`
                          } : {}}
                        ></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Audiovisual */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-white border-b border-white/10 pb-4">{t('about.page.skills.audiovisual')}</h3>
              <div className="space-y-6">
                {[
                  { name: 'Premiere', level: 5 },
                  { name: 'Filmmaking', level: 5 },
                  { name: 'After Effects', level: 3 },
                ].map((skill, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-white/80 font-medium">{skill.name}</span>
                    <div className="flex gap-1.5">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-2.5 w-8 rounded-sm transition-all duration-300 ${i < skill.level ? '' : 'bg-white/10'}`}
                          style={i < skill.level ? {
                            background: 'linear-gradient(90deg, #563474 0%, #9E3ED5 100%)',
                            backgroundSize: '500% 100%',
                            backgroundPosition: `${(i * 100) / 4}% 0%`
                          } : {}}
                        ></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 mb-12">
          <h2 className="text-3xl font-bold mb-12 text-white text-center">
            {t('about.page.why.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card rounded-[32px] p-8 md:p-10 transition-all duration-300 shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(158,62,213,0.15)] group bg-white/3 border border-white/10 backdrop-blur-[24px]">
              <h3 className="text-2xl font-black mb-6 text-white tracking-tight group-hover:text-highlight transition-colors">{t('about.page.why.results.title')}</h3>
              <p className="text-white/40 leading-relaxed text-sm font-medium group-hover:text-white transition-colors">
                {t('about.page.why.results.desc')}
              </p>
            </div>
            <div className="glass-card rounded-[32px] p-8 md:p-10 transition-all duration-300 shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(158,62,213,0.15)] group bg-white/3 border border-white/10 backdrop-blur-[24px]">
              <h3 className="text-2xl font-black mb-6 text-white tracking-tight group-hover:text-highlight transition-colors">{t('about.page.why.communication.title')}</h3>
              <p className="text-white/40 leading-relaxed text-sm font-medium group-hover:text-white transition-colors">
                {t('about.page.why.communication.desc')}
              </p>
            </div>
            <div className="glass-card rounded-[32px] p-8 md:p-10 transition-all duration-300 shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(158,62,213,0.15)] group bg-white/3 border border-white/10 backdrop-blur-[24px]">
              <h3 className="text-2xl font-black mb-6 text-white tracking-tight group-hover:text-highlight transition-colors">{t('about.page.why.experience.title')}</h3>
              <p className="text-white/40 leading-relaxed text-sm font-medium group-hover:text-white transition-colors">
                {t('about.page.why.experience.desc')}
              </p>
            </div>
          </div>
        </section>

        <ProjectCTA />
      </main>

      <Footer />
      <FloatingButton />
    </div>
  );
};

export default SobrePage;
