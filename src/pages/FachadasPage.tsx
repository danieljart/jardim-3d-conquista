import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

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
      category="Fachadas"
      ctaText="Solicitar Orçamento de Fachada"
    />
  );
};

export default FachadasPage;
