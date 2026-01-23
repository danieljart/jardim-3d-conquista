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

const stats = [
  { icon: Award, value: '100+', label: 'Projetos Entregues' },
  { icon: Users, value: '80+', label: 'Clientes Satisfeitos' },
  { icon: Clock, value: '5+', label: 'Anos de Experiência' },
  { icon: Target, value: '100%', label: 'Foco em Resultados' },
];

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
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-violet-950 relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl"></div>
      </div>

      <Navbar />

      <main className="pt-20 pb-8 md:pt-24 md:pb-16 relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-8 md:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-white">
                {t('about.page.hero.greeting')}<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                  Daniel Jardim
                </span>
              </h1>
              <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-400 to-violet-400 mb-4 md:mb-8 rounded-full"></div>
              <p className="text-xl text-white/80 mb-3">
                {t('about.page.hero.role')}
              </p>
              <p className="text-white/70 mb-6">
                {t('about.page.hero.desc')}
              </p>
              <ShimmerButton
                onClick={handleContactClick}
                background="linear-gradient(90deg, #4f46e5 0%, #7c3aed 100%)"
                className="shadow-lg"
              >
                <span className="text-white font-medium">
                  {t('about.page.hero.cta')}
                </span>
              </ShimmerButton>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md group">
                <MagicCard className="w-full h-auto glass-card rounded-xl shadow-2xl border border-white/10 p-5 overflow-hidden animate-float group-hover:neon-border transition-all duration-500 bg-white/5" gradientColor="#6366f1">
                  <img
                    src={profileImage}
                    alt="Daniel Jardim"
                    className="w-full h-auto object-cover rounded group-hover:scale-105 transition-all duration-700 animate-fade-in"
                  />
                </MagicCard>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-full blur-2xl opacity-70 animate-pulse"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-full blur-2xl opacity-70 animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-4 mb-8 md:mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <MagicCard
                  key={index}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1"
                  gradientColor="#6366f1"
                >
                  <div className="bg-gradient-to-br from-indigo-600 to-violet-600 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-indigo-900/30">
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </MagicCard>
              );
            })}
          </div>
        </section>

        {/* My Story Section */}
        <section className="container mx-auto px-4 mb-8 md:mb-16">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-12">
            <h2 className="text-3xl font-bold mb-6 md:mb-8 text-white text-center">{t('about.page.story.title')}</h2>
            <div className="max-w-3xl mx-auto space-y-6 text-white/80 text-center">
              <p>
                {t('about.page.story.p1')}
              </p>
              <p>
                {t('about.page.story.p2')}
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="container mx-auto px-4 mb-8 md:mb-16">
          <h2 className="text-3xl font-bold mb-8 md:mb-12 text-white text-center">{t('about.page.skills.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
            {/* Design & 3D */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white border-b border-white/10 pb-2">{t('about.page.skills.design')}</h3>
              <div className="space-y-4">
                {[
                  { name: 'Blender 3D', level: 5 },
                  { name: 'CorelDRAW', level: 5 },
                  { name: 'Photoshop', level: 4 },
                  { name: 'D5 Render', level: 4 },
                  { name: 'Illustrator', level: 3 },
                ].map((skill, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-white/90 font-medium">{skill.name}</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-3 w-6 rounded-sm ${i < skill.level ? 'bg-gradient-to-r from-indigo-500 to-violet-500' : 'bg-white/10'}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Audiovisual */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white border-b border-white/10 pb-2">{t('about.page.skills.audiovisual')}</h3>
              <div className="space-y-4">
                {[
                  { name: 'Premiere', level: 5 },
                  { name: 'Filmmaking', level: 5 },
                  { name: 'After Effects', level: 3 },
                ].map((skill, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-white/90 font-medium">{skill.name}</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-3 w-6 rounded-sm ${i < skill.level ? 'bg-gradient-to-r from-indigo-500 to-violet-500' : 'bg-white/10'}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Me Section */}
        <section className="container mx-auto px-4 mb-8 md:mb-16">
          <h2 className="text-3xl font-bold mb-8 md:mb-12 text-white text-center">
            {t('about.page.why.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <MagicCard className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1" gradientColor="#6366f1">
              <h3 className="text-xl font-bold mb-3 text-white">{t('about.page.why.results.title')}</h3>
              <p className="text-white/70">
                {t('about.page.why.results.desc')}
              </p>
            </MagicCard>
            <MagicCard className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1" gradientColor="#6366f1">
              <h3 className="text-xl font-bold mb-3 text-white">{t('about.page.why.communication.title')}</h3>
              <p className="text-white/70">
                {t('about.page.why.communication.desc')}
              </p>
            </MagicCard>
            <MagicCard className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1" gradientColor="#6366f1">
              <h3 className="text-xl font-bold mb-3 text-white">{t('about.page.why.experience.title')}</h3>
              <p className="text-white/70">
                {t('about.page.why.experience.desc')}
              </p>
            </MagicCard>
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
