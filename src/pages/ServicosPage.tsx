import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButton from '@/components/FloatingButton';
import { Building2, Warehouse, Home, Trophy, ArrowRight } from 'lucide-react';

// Import images
import fachadasImg from '@/content/projects/fachadas/Scene 0.png';
import cenografiaImg from '@/content/projects/cenografia/1.jpeg';
import ambientesImg from '@/content/projects/ambientes/danieljardim.3d_1727818425_3469514874563525172_58748782469.jpg';
import personalizadosImg from '@/content/projects/personalizados/danieljardim.3d_1692115206_3170014560966158750_58748782469.jpg';

const services = [
  {
    id: 'fachadas',
    title: 'Fachadas',
    description: 'Projetos 3D de fachadas comerciais e residenciais que transformam a identidade visual do seu negócio, atraindo mais clientes e destacando sua marca.',
    icon: Building2,
    image: fachadasImg,
    slug: '/servicos/fachadas'
  },
  {
    id: 'cenografia',
    title: 'Cenografia & Estandes',
    description: 'Criação de estandes para feiras, eventos e exposições. Projetos que capturam atenção e geram impacto visual memorável.',
    icon: Warehouse,
    image: cenografiaImg,
    slug: '/servicos/cenografia'
  },
  {
    id: 'ambientes',
    title: 'Ambientes Internos',
    description: 'Layouts internos funcionais e esteticamente impactantes. Transformo espaços comerciais em ambientes que otimizam a experiência do cliente.',
    icon: Home,
    image: ambientesImg,
    slug: '/servicos/ambientes'
  },
  {
    id: 'personalizados',
    title: 'Personalizados',
    description: 'Troféus, medalhas e peças em acrílico personalizadas. Criações únicas para premiações, brindes corporativos e itens especiais.',
    icon: Trophy,
    image: personalizadosImg,
    slug: '/servicos/personalizados'
  }
];

const ServicosPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-violet-950 relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl"></div>
      </div>

      <Navbar />

      <main className="pt-24 pb-16 relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Meus Serviços
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-400 to-violet-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-white/80">
              Soluções completas em design 3D, cenografia e personalizados.
              Cada projeto é desenvolvido para gerar resultados reais para o seu negócio.
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
                      Ver mais <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 mt-16">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Tem um projeto em mente?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Cada projeto é único. Vamos conversar sobre como posso transformar sua visão em realidade.
            </p>
            <button
              onClick={() => window.open('https://wa.me/5591982591612', '_blank')}
              className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-8 py-3 rounded-lg transition-all duration-300 font-medium shadow-lg"
            >
              Solicitar Orçamento
            </button>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingButton />
    </div>
  );
};

export default ServicosPage;
