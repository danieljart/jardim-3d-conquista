import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const CenografiaPage = () => {
  return (
    <ServicePageTemplate
      title="Cenografia"
      subtitle="Projetos 3D para Eventos e Estandes"
      description="Crie experiências memoráveis com cenografia 3D. Projetos para estandes, palcos e eventos corporativos que capturam a atenção e comunicam a mensagem da sua marca de forma impactante."
      features={[
        'Design criativo e funcional',
        'Visualização de fluxos e circulação',
        'Detalhamento técnico para montagem',
        'Ambientação e iluminação cênica'
      ]}
      category="Cenografia"
      ctaText="Solicitar Orçamento de Cenografia"
    />
  );
};

export default CenografiaPage;
