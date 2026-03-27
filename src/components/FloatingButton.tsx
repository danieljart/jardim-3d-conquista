import React from 'react';
import { useTranslation } from 'react-i18next';
import { MessageSquare } from "lucide-react";

const FloatingButton = () => {
  const { t } = useTranslation();
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={() => window.open('https://wa.me/5511949723280', '_blank')}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && window.open('https://wa.me/5511949723280', '_blank')}
        aria-label={t('contact.whatsapp')}
        data-cursor="hover"
        className="w-14 h-14 bg-white text-black rounded-none flex items-center justify-center hover:scale-110 transition-transform duration-500 shadow-2xl border border-neutral-200"
      >
        <MessageSquare className="h-6 w-6" strokeWidth={2.5} />
      </button>
    </div>
  );
};

export default FloatingButton;
