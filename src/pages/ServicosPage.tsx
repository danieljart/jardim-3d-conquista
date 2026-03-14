import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButton from '@/components/FloatingButton';
import { Building2, Warehouse, Home, Trophy, ArrowRight } from 'lucide-react';
import ProjectCTA from '@/components/ProjectCTA';
import { MagicCard } from "@/components/ui/magic-card";

// Import images
import fachadasImg from '@/content/projects/fachadas/Scene 0.png';
import cenografiaImg from '@/content/projects/cenografia/1.jpeg';
import ambientesImg from '@/content/projects/ambientes/danieljardim.3d_1727818425_3469514874563525172_58748782469.jpg';
import personalizadosImg from '@/content/projects/personalizados/danieljardim.3d_1692115206_3170014560966158750_58748782469.jpg';

import { BeamsBackground } from '@/components/ui/beams-background';

const ServicosPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const services = [
    {
      id: 'fachadas',
      title: t('services.items.fachadas.title'),
      description: t('services.items.fachadas.description'),
      icon: Building2,
      image: fachadasImg,
      slug: '/servicos/fachadas'
    },
    {
      id: 'cenografia',
      title: t('services.items.cenografia.overviewTitle'),
      description: t('services.items.cenografia.description'),
      icon: Warehouse,
      image: cenografiaImg,
      slug: '/servicos/cenografia'
    },
    {
      id: 'ambientes',
      title: t('services.items.ambientes.overviewTitle'),
      description: t('services.items.ambientes.description'),
      icon: Home,
      image: ambientesImg,
      slug: '/servicos/ambientes'
    },
    {
      id: 'personalizados',
      title: t('services.items.personalizados.title'),
      description: t('services.items.personalizados.description'),
      icon: Trophy,
      image: personalizadosImg,
      slug: '/servicos/personalizados'
    }
  ];

  return (
    <div className="min-h-screen bg-transparent relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"></div>
      </div>

      <Navbar />

      <main className="pt-36 md:pt-44 pb-16 relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white leading-tight">
              {t('servicesPage.title')}
            </h1>
            <div className="w-20 h-1.5 bg-highlight mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-white/60">
              {t('servicesPage.subtitle')}
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  onClick={() => navigate(service.slug)}
                  className="cursor-pointer group relative h-[500px] rounded-[24px] overflow-hidden border border-white/10 transition-all duration-500 hover:border-primary/50"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Netflix-style Gradient Overlay */}
                  <div 
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(to top, #0B0714 10%, rgba(11,7,20, 0.8) 40%, transparent 100%)'
                    }}
                  />

                  {/* Hover Overlay Light */}
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content positioned at the bottom half */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 text-left">
                    <div className="mb-6 transform transition-all duration-500 group-hover:-translate-y-2">
                      <div className="bg-highlight/20 backdrop-blur-md w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                        <IconComponent className="h-7 w-7 text-[#9E3ED5]" />
                      </div>
                      <h2 className="text-3xl font-bold mb-4 text-white">
                        {service.title}
                      </h2>
                      <p className="text-white/60 mb-6 text-[15px] leading-relaxed max-w-md line-clamp-3">
                        {service.description}
                      </p>
                      <div className="flex items-center text-highlight font-bold tracking-wide group/btn">
                        {t('servicesPage.viewMore').toUpperCase()} 
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-2" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <ProjectCTA />
      </main>

      <Footer />
      <FloatingButton />
    </div>
  );
};

export default ServicosPage;
