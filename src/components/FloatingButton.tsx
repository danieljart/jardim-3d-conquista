
import React from 'react';
import { useTranslation } from 'react-i18next';
import { MessageSquare } from "lucide-react";

import ShimmerButton from "@/components/ui/shimmer-button";

const FloatingButton = () => {
  const { t } = useTranslation();
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <ShimmerButton
        className="shadow-xl"
        background="white"
        shimmerColor="#7c3aed"
        shimmerSize="0.1em"
        borderRadius="100px"
        onClick={() => window.open('https://wa.me/5511949723280', '_blank')}
        aria-label={t('contact.whatsapp')}
      >
        <MessageSquare className="h-7 w-7 text-indigo-600" />
      </ShimmerButton>
    </div>
  );
};

export default FloatingButton;
