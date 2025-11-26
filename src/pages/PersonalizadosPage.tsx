import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const PersonalizadosPage = () => {
  return (
    <ServicePageTemplate
      title="Personalizados"
      subtitle="Projetos 3D Personalizados e Modelagem de Produtos"
      description="Tem uma ideia única? Eu transformo em 3D. Desde modelagem de produtos específicos, totens, quiosques até projetos conceituais que fogem do padrão. Sua imaginação é o limite."
      features={[
        'Modelagem de produtos com alta fidelidade',
        'Prototipagem virtual rápida',
        'Visualização de materiais e acabamentos',
        'Soluções criativas para demandas específicas'
      ]}
      category="Personalizados"
      ctaText="Solicitar Orçamento Personalizado"
    />
  );
};

export default PersonalizadosPage;
