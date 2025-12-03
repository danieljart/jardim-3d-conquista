import React from 'react';
import { useTranslation } from 'react-i18next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const AmbientesPage = () => {
  const { t } = useTranslation();
  return (
    <ServicePageTemplate
      title={t('services.items.ambientes.pageTitle')}
      subtitle={t('services.items.ambientes.pageSubtitle')}
      description={t('services.items.ambientes.pageDescription')}
      features={[
        t('services.items.ambientes.feature1'),
        t('services.items.ambientes.feature2'),
        t('services.items.ambientes.feature3'),
        t('services.items.ambientes.feature4')
      ]}
      category="Ambientes"
      ctaText={t('services.items.ambientes.ctaText')}
    />
  );
};

export default AmbientesPage;
