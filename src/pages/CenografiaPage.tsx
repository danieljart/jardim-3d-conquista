import React from 'react';
import { useTranslation } from 'react-i18next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const CenografiaPage = () => {
  const { t } = useTranslation();
  return (
    <ServicePageTemplate
      title={t('services.items.cenografia.pageTitle')}
      subtitle={t('services.items.cenografia.pageSubtitle')}
      description={t('services.items.cenografia.pageDescription')}
      features={[
        t('services.items.cenografia.feature1'),
        t('services.items.cenografia.feature2'),
        t('services.items.cenografia.feature3'),
        t('services.items.cenografia.feature4')
      ]}
      category="Cenografia"
      ctaText={t('services.items.cenografia.ctaText')}
    />
  );
};

export default CenografiaPage;
