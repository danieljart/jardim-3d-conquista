import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButton from '@/components/FloatingButton';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const galleryItems = [
  { id: 1, title: 'Interior Loja Conceito', image: '/placeholder.svg' },
  { id: 2, title: 'Layout Restaurante', image: '/placeholder.svg' },
  { id: 3, title: 'Espaço Corporativo', image: '/placeholder.svg' },
  { id: 4, title: 'Salão de Beleza', image: '/placeholder.svg' },
  { id: 5, title: 'Clínica Médica', image: '/placeholder.svg' },
  { id: 6, title: 'Coworking Space', image: '/placeholder.svg' },
];

const AmbientesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ServicePageTemplate
        title="Ambientes Internos"
        subtitle="Layouts Funcionais e Impactantes"
        description="Transformo espaços comerciais em ambientes otimizados que valorizam a experiência do cliente e aumentam a eficiência do seu negócio. Cada detalhe é pensado para gerar resultados."
        features={[
          'Layouts que otimizam o fluxo de clientes',
          'Ambientes que valorizam produtos e serviços',
          'Design funcional e esteticamente impactante',
          'Projetos alinhados com sua identidade visual'
        ]}
        galleryItems={galleryItems}
        ctaText="Solicitar Orçamento de Ambiente"
      />
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default AmbientesPage;
