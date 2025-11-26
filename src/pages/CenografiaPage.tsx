import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const galleryItems = [
  { id: 1, title: 'Estande Feira Tech', image: '/placeholder.svg' },
  { id: 2, title: 'Cenografia Evento Corporativo', image: '/placeholder.svg' },
  { id: 3, title: 'Estande Exposição', image: '/placeholder.svg' },
  { id: 4, title: 'Palco Show', image: '/placeholder.svg' },
  { id: 5, title: 'Estande Lançamento Produto', image: '/placeholder.svg' },
  { id: 6, title: 'Cenografia Premiação', image: '/placeholder.svg' },
];

const CenografiaPage = () => {
  return (
    <ServicePageTemplate
      title="Cenografia & Estandes"
      subtitle="Projetos para Feiras, Eventos e Exposições"
      description="Crio estandes e cenografias que capturam atenção e geram impacto visual memorável. Do conceito à execução, desenvolvo projetos que destacam sua marca em qualquer evento."
      features={[
        'Estandes para feiras e exposições',
        'Cenografia para eventos corporativos',
        'Projetos para lançamentos de produtos',
        'Palcos e ambientes para shows e premiações'
      ]}
      galleryItems={galleryItems}
      ctaText="Solicitar Orçamento de Cenografia"
    />
  );
};

export default CenografiaPage;
