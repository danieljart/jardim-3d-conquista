import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const ProjectCTA = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <section className="container mx-auto px-4 text-center py-4 md:py-20">
            <div className="bg-gradient-to-r from-indigo-900/50 to-violet-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-12 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-white">{t('project.cta.title')}</h2>
                <p className="text-white/80 mb-6 md:mb-8 text-lg">
                    {t('project.cta.desc')}
                </p>
                <Button
                    size="lg"
                    className="bg-white text-indigo-900 hover:bg-indigo-50 font-bold text-lg"
                    onClick={() => navigate('/contato')}
                >
                    {t('project.cta.button')}
                </Button>
            </div>
        </section>
    );
};

export default ProjectCTA;
