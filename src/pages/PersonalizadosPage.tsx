import React from 'react';
import { useTranslation } from 'react-i18next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const PersonalizadosPage = () => {
  const { t } = useTranslation();
  return (
    <ServicePageTemplate
      title={t('services.items.personalizados.pageTitle')}
      subtitle={t('services.items.personalizados.pageSubtitle')}
      description={t('services.items.personalizados.pageDescription')}
      features={[
        t('services.items.personalizados.feature1'),
        t('services.items.personalizados.feature2'),
        t('services.items.personalizados.feature3'),
        t('services.items.personalizados.feature4')
      ]}
      category="Personalizados"
      ctaText={t('services.items.personalizados.ctaText')}
    />
  );
};

export default PersonalizadosPage;
