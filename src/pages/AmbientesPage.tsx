import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const AmbientesPage = () => {
  return (
    <ServicePageTemplate
      title="Ambientes"
      subtitle="Projetos 3D de Ambientes Instagramáveis"
      description="Transforme espaços comuns em cenários perfeitos para fotos. Projetos focados na experiência do usuário e no compartilhamento social, ideais para bares, restaurantes, lojas e eventos."
      features={[
        'Design focado em fotografia e vídeo',
        'Iluminação estratégica',
        'Elementos interativos e "instagramáveis"',
        'Viralização da sua marca nas redes sociais'
      ]}
      category="Ambientes"
      ctaText="Solicitar Orçamento de Ambiente"
    />
  );
};

export default AmbientesPage;
