import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButton from '@/components/FloatingButton';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const galleryItems = [
  { id: 1, title: 'Troféu Campeonato', image: '/placeholder.svg' },
  { id: 2, title: 'Medalhas Evento Esportivo', image: '/placeholder.svg' },
  { id: 3, title: 'Placa Comemorativa', image: '/placeholder.svg' },
  { id: 4, title: 'Brinde Corporativo', image: '/placeholder.svg' },
  { id: 5, title: 'Troféu Premiação', image: '/placeholder.svg' },
  { id: 6, title: 'Peça Decorativa Acrílico', image: '/placeholder.svg' },
];

const PersonalizadosPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ServicePageTemplate
        title="Personalizados"
        subtitle="Troféus, Medalhas e Peças em Acrílico"
        description="Criações únicas e personalizadas para premiações, brindes corporativos e itens especiais. Trabalho com acrílico e outros materiais para desenvolver peças exclusivas que marcam momentos importantes."
        features={[
          'Troféus personalizados para eventos e campeonatos',
          'Medalhas exclusivas para premiações',
          'Placas comemorativas e de reconhecimento',
          'Brindes corporativos diferenciados'
        ]}
        galleryItems={galleryItems}
        ctaText="Solicitar Orçamento Personalizado"
      />
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default PersonalizadosPage;
