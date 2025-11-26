import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const galleryItems = [
  { id: 1, title: 'Recepção Corporativa', image: '/placeholder.svg' },
  { id: 2, title: 'Sala de Reuniões', image: '/placeholder.svg' },
  { id: 3, title: 'Escritório Open Space', image: '/placeholder.svg' },
  { id: 4, title: 'Loja Conceito', image: '/placeholder.svg' },
  { id: 5, title: 'Cafeteria Moderna', image: '/placeholder.svg' },
  { id: 6, title: 'Showroom de Móveis', image: '/placeholder.svg' },
];

const AmbientesPage = () => {
  return (
    <ServicePageTemplate
      title="Ambientes Internos"
      subtitle="Design de Interiores Comerciais e Corporativos"
      description="Transformo espaços comerciais em ambientes funcionais e esteticamente impactantes. Meus projetos de interiores são focados na experiência do usuário e na otimização do fluxo de trabalho."
      features={[
        'Layouts funcionais e ergonômicos',
        'Visualização fotorrealista dos materiais',
        'Otimização do espaço disponível',
        'Projetos que reforçam a cultura da empresa'
      ]}
      galleryItems={galleryItems}
      ctaText="Solicitar Orçamento de Interiores"
    />
  );
};

export default AmbientesPage;
