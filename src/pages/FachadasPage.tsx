import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const galleryItems = [
  { id: 1, title: 'Fachada FitOne Academia', image: '/placeholder.svg' },
  { id: 2, title: 'Docile Confeitaria', image: '/placeholder.svg' },
  { id: 3, title: 'Centro Comercial', image: '/placeholder.svg' },
  { id: 4, title: 'Restaurante Premium', image: '/placeholder.svg' },
  { id: 5, title: 'Clínica Odontológica', image: '/placeholder.svg' },
  { id: 6, title: 'Loja de Roupas', image: '/placeholder.svg' },
];

const FachadasPage = () => {
  return (
    <ServicePageTemplate
      title="Fachadas"
      subtitle="Projetos 3D de Fachadas Comerciais"
      description="A fachada é o cartão de visita do seu negócio. Com minha expertise em modelagem 3D, transformo a frente do seu estabelecimento em um elemento de atração que destaca sua marca e conquista clientes antes mesmo de entrarem."
      features={[
        'Visualização realista antes da execução',
        'Otimização de custos com planejamento 3D',
        'Projeto alinhado com a identidade da sua marca',
        'Aumento comprovado no fluxo de clientes'
      ]}
      galleryItems={galleryItems}
      ctaText="Solicitar Orçamento de Fachada"
    />
  );
};

export default FachadasPage;
