import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButton from '@/components/FloatingButton';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const portfolioItems = [
  { id: 1, title: 'Fachada Comercial Moderna', category: 'Fachadas', image: '/placeholder.svg' },
  { id: 2, title: 'Interior de Loja Conceito', category: 'Interiores', image: '/placeholder.svg' },
  { id: 3, title: 'Estande para Feira Tech', category: 'Cenografia', image: '/placeholder.svg' },
  { id: 4, title: 'Ambiente Instagramável Café', category: 'Ambientes', image: '/placeholder.svg' },
  { id: 5, title: 'Totem Personalizado', category: 'Personalizados', image: '/placeholder.svg' },
  { id: 6, title: 'Fachada Restaurante', category: 'Fachadas', image: '/placeholder.svg' },
];

const categories = ['Todos', 'Fachadas', 'Interiores', 'Cenografia', 'Ambientes', 'Personalizados'];

const GaleriaPage = () => {
  const [filter, setFilter] = useState('Todos');
  const navigate = useNavigate();

  const filteredItems = filter === 'Todos'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === filter);

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

      <main className="pt-24 pb-16 relative z-10">
        <section className="container mx-auto px-4 mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Meu <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">Portfólio</span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-400 to-violet-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Explore uma seleção dos meus melhores projetos e veja como o design 3D pode transformar ideias em realidade.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${filter === category
                  ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card key={item.id} className="bg-white/5 border-white/10 overflow-hidden hover:shadow-xl hover:shadow-indigo-900/20 transition-all duration-300 group">
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <span className="text-indigo-400 text-sm font-medium mb-1 block">{item.category}</span>
                      <h3 className="text-white text-xl font-bold">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 text-center">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-white">Gostou do que viu?</h2>
            <p className="text-white/80 mb-8 text-lg">
              Vamos criar algo incrível para o seu negócio também. Entre em contato e solicite um orçamento.
            </p>
            <Button
              size="lg"
              onClick={handleContactClick}
              className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-semibold text-lg border-none shadow-lg shadow-indigo-900/30"
            >
              Solicitar Orçamento
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingButton />
    </div>
  );
};

export default GaleriaPage;
