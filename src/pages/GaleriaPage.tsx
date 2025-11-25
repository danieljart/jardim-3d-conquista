import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButton from '@/components/FloatingButton';
import { Button } from '@/components/ui/button';

const categories = [
  { id: 'todos', label: 'Todos' },
  { id: 'fachadas', label: 'Fachadas' },
  { id: 'cenografia', label: 'Cenografia' },
  { id: 'ambientes', label: 'Ambientes' },
  { id: 'personalizados', label: 'Personalizados' },
];

const galleryItems = [
  { id: 1, title: 'Fachada FitOne Academia', category: 'fachadas', image: '/placeholder.svg' },
  { id: 2, title: 'Estande Feira Tech', category: 'cenografia', image: '/placeholder.svg' },
  { id: 3, title: 'Interior Loja Conceito', category: 'ambientes', image: '/placeholder.svg' },
  { id: 4, title: 'Troféu Campeonato', category: 'personalizados', image: '/placeholder.svg' },
  { id: 5, title: 'Docile Confeitaria', category: 'fachadas', image: '/placeholder.svg' },
  { id: 6, title: 'Cenografia Evento', category: 'cenografia', image: '/placeholder.svg' },
  { id: 7, title: 'Layout Restaurante', category: 'ambientes', image: '/placeholder.svg' },
  { id: 8, title: 'Medalhas Evento', category: 'personalizados', image: '/placeholder.svg' },
  { id: 9, title: 'Centro Comercial', category: 'fachadas', image: '/placeholder.svg' },
  { id: 10, title: 'Estande Exposição', category: 'cenografia', image: '/placeholder.svg' },
  { id: 11, title: 'Espaço Corporativo', category: 'ambientes', image: '/placeholder.svg' },
  { id: 12, title: 'Placa Comemorativa', category: 'personalizados', image: '/placeholder.svg' },
];

const GaleriaPage = () => {
  const [activeCategory, setActiveCategory] = useState('todos');

  const filteredItems = activeCategory === 'todos' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-12">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Galeria de Projetos
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-400 to-violet-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-muted-foreground">
              Explore meu portfólio completo. Cada projeto representa uma transformação real 
              e resultados comprovados para meus clientes.
            </p>
          </div>
        </section>

        {/* Filter Buttons */}
        <section className="container mx-auto px-4 mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={activeCategory === category.id 
                  ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white border-0" 
                  : "border-indigo-500/30 text-foreground hover:bg-indigo-900/20"
                }
              >
                {category.label}
              </Button>
            ))}
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
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
                  <span className="text-sm text-indigo-400 font-medium capitalize">
                    {item.category}
                  </span>
                  <h3 className="font-semibold text-lg text-foreground mt-1">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 mt-16">
          <div className="bg-gradient-to-br from-indigo-950 via-purple-950 to-violet-950 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Gostou do que viu?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Vamos criar algo incrível juntos. Entre em contato e transforme sua visão em realidade.
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

      <Footer />
      <FloatingButton />
    </div>
  );
};

export default GaleriaPage;
