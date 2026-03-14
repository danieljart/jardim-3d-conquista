import React from 'react';
import { useTranslation } from 'react-i18next';
import ShimmerButton from "@/components/ui/shimmer-button";
import { MagicCard } from "@/components/ui/magic-card";
import { useNavigate } from 'react-router-dom';

const ProjectCTA = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <section className="container mx-auto px-4 py-12 md:py-20 relative">
            <div className="glass-card rounded-[32px] p-10 md:p-16 max-w-5xl mx-auto bg-white/3 backdrop-blur-[32px] border border-white/10 shadow-[0_32px_64px_rgba(0,0,0,0.4)] transition-all duration-500 hover:shadow-[0_48px_96px_rgba(158,62,213,0.3)] relative group w-full">
                {/* Background glow */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -mr-48 -mt-48 transition-all duration-700 group-hover:bg-primary/30"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/20 rounded-full blur-[120px] -ml-40 -mb-40 transition-all duration-700 group-hover:bg-primary/30"></div>
                
                <div className="relative z-10 flex flex-col items-center text-center gap-10">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl md:text-5xl font-black mb-8 text-white leading-tight tracking-tight">
                            {t('project.cta.title')}
                        </h2>
                        <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-0 font-medium max-w-2xl mx-auto">
                            {t('project.cta.desc')}
                        </p>
                    </div>
                    
                    <div className="shrink-0">
                        <ShimmerButton
                            background="linear-gradient(90deg, #563474 0%, #9E3ED5 100%)"
                            shimmerColor="#FFFFFF"
                            className="shadow-[0_20px_40px_rgba(158,62,213,0.3)] hover:scale-105 transition-transform duration-300 py-4 px-12 rounded-full"
                            onClick={() => navigate('/contato')}
                        >
                            <span className="text-white font-black text-sm md:text-base tracking-wide flex items-center gap-3">
                                {t('project.cta.button')}
                            </span>
                        </ShimmerButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectCTA;
