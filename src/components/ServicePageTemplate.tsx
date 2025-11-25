import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GalleryItem {
  id: number;
  title: string;
  image: string;
}

interface ServicePageTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  galleryItems: GalleryItem[];
  ctaText: string;
}

const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({
  title,
  subtitle,
  description,
  features,
  galleryItems,
  ctaText,
}) => {
  return (
    <main className="pt-24 pb-16">
      {/* Back Link */}
      <section className="container mx-auto px-4 mb-8">
        <Link 
          to="/servicos" 
          className="inline-flex items-center text-muted-foreground hover:text-indigo-400 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar para Serviços
        </Link>
      </section>

      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {title}
          </h1>
          <p className="text-xl text-indigo-400 mb-6">{subtitle}</p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-400 to-violet-400 mb-8 rounded-full"></div>
          <p className="text-lg text-muted-foreground mb-8">
            {description}
          </p>
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="bg-gradient-to-br from-indigo-600 to-violet-600 rounded-full p-1 mt-0.5">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>

          <Button
            onClick={() => window.open('https://wa.me/5591982591612', '_blank')}
            className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white shadow-lg"
          >
            {ctaText}
          </Button>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-foreground">Projetos Realizados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div 
              key={item.id}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg text-foreground">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Link to full gallery */}
        <div className="mt-8 text-center">
          <Link to="/galeria">
            <Button variant="outline" className="border-indigo-500/30 text-foreground hover:bg-indigo-900/20">
              Ver Galeria Completa
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 mt-16">
        <div className="bg-gradient-to-br from-indigo-950 via-purple-950 to-violet-950 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Pronto para transformar seu projeto?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Vamos conversar sobre suas ideias. Cada projeto é único e merece atenção especial.
          </p>
          <button 
            onClick={() => window.open('https://wa.me/5591982591612', '_blank')}
            className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-8 py-3 rounded-lg transition-all duration-300 font-medium shadow-lg"
          >
            Falar no WhatsApp
          </button>
        </div>
      </section>
    </main>
  );
};

export default ServicePageTemplate;
