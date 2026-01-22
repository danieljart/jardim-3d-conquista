import React from 'react';
import { useTranslation } from 'react-i18next';
import ShimmerButton from "@/components/ui/shimmer-button";
import { MagicCard } from "@/components/ui/magic-card";
import { useNavigate } from 'react-router-dom';

const ProjectCTA = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <section className="container mx-auto px-4 text-center py-4 md:py-20">
            <MagicCard className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-12 max-w-4xl mx-auto" gradientColor="#6366f1">
                <h2 className="text-3xl font-bold mb-6 text-white">{t('project.cta.title')}</h2>
                <p className="text-white/80 mb-6 md:mb-8 text-lg">
                    {t('project.cta.desc')}
                </p>
                <ShimmerButton
                    background="white"
                    shimmerColor="#4f46e5"
                    className="shadow-xl mx-auto"
                    onClick={() => navigate('/contato')}
                >
                    <span className="text-indigo-900 font-bold text-lg">
                        {t('project.cta.button')}
                    </span>
                </ShimmerButton>
            </MagicCard>
        </section>
    );
};

export default ProjectCTA;
