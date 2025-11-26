import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const galleryItems = [
  { id: 1, title: 'Troféu Campeonato de Surf', image: '/placeholder.svg' },
  { id: 2, title: 'Medalha Corrida de Rua', image: '/placeholder.svg' },
  { id: 3, title: 'Placa de Homenagem', image: '/placeholder.svg' },
  { id: 4, title: 'Brinde Corporativo Acrílico', image: '/placeholder.svg' },
  { id: 5, title: 'Troféu Premiação Interna', image: '/placeholder.svg' },
  { id: 6, title: 'Display de Mesa Personalizado', image: '/placeholder.svg' },
];

const PersonalizadosPage = () => {
  return (
    <ServicePageTemplate
      title="Personalizados"
      subtitle="Troféus, Medalhas e Peças em Acrílico"
      description="Criações únicas para premiações, brindes corporativos e itens especiais. Desenvolvo peças exclusivas que valorizam a conquista e fortalecem a imagem da sua marca."
      features={[
        'Design exclusivo e personalizado',
        'Prototipagem 3D antes da produção',
        'Peças em acrílico, madeira e metal',
        'Troféus e medalhas para eventos esportivos'
      ]}
      galleryItems={galleryItems}
      ctaText="Solicitar Orçamento de Personalizados"
    />
  );
};

export default PersonalizadosPage;
