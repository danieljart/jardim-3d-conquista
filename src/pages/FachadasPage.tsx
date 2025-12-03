import React from 'react';
import { useTranslation } from 'react-i18next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const FachadasPage = () => {
  const { t } = useTranslation();
  return (
    <ServicePageTemplate
      title={t('services.items.fachadas.pageTitle')}
      subtitle={t('services.items.fachadas.pageSubtitle')}
      description={t('services.items.fachadas.pageDescription')}
      features={[
        t('services.items.fachadas.feature1'),
        t('services.items.fachadas.feature2'),
        t('services.items.fachadas.feature3'),
        t('services.items.fachadas.feature4')
      ]}
      category="Fachadas"
      ctaText={t('services.items.fachadas.ctaText')}
    />
  );
};

export default FachadasPage;
