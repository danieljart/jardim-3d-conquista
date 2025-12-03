import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButton from '@/components/FloatingButton';
import { Building2, Warehouse, Home, Trophy, ArrowRight } from 'lucide-react';
import ProjectCTA from '@/components/ProjectCTA';

// Import images
import fachadasImg from '@/content/projects/fachadas/Scene 0.png';
import cenografiaImg from '@/content/projects/cenografia/1.jpeg';
import ambientesImg from '@/content/projects/ambientes/danieljardim.3d_1727818425_3469514874563525172_58748782469.jpg';
import personalizadosImg from '@/content/projects/personalizados/danieljardim.3d_1692115206_3170014560966158750_58748782469.jpg';

const ServicosPage = () => {
  const { t } = useTranslation();

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
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-violet-950 relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl"></div>
      </div>

      <Navbar />

      <main className="pt-20 pb-8 md:pt-24 md:pb-16 relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-8 md:mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-white">
              {t('servicesPage.title')}
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-400 to-violet-400 mx-auto mb-4 md:mb-8 rounded-full"></div>
            <p className="text-xl text-white/80">
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
                <Link
                  key={service.id}
                  to={service.slug}
                  className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="h-48 overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-950 to-violet-950 relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-gradient-to-br from-indigo-600 to-violet-600 w-20 h-20 rounded-full flex items-center justify-center shadow-lg">
                        <IconComponent className="h-10 w-10 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-indigo-400 transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-white/70 mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center text-indigo-400 font-medium">
                      {t('servicesPage.viewMore')} <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
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
