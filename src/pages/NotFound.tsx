import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-white">404</h1>
        <p className="text-xl text-white/60 mb-8">{t('notFound.message') || 'Página não encontrada'}</p>
        <a href="/" className="px-6 py-3 bg-primary text-white rounded-full font-bold hover:opacity-90 transition-all">
          {t('notFound.return') || 'Voltar ao Início'}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
