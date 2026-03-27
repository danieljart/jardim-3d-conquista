import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProjectCTA = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <section className="container mx-auto px-6 md:px-12 py-32 relative">
            <div className="border border-neutral-900 bg-neutral-950 p-12 md:p-24 flex flex-col items-center text-center relative overflow-hidden group">
                
                {/* Minimal Background Interaction */}
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
                
                <div className="relative z-10 flex flex-col items-center gap-12 max-w-4xl">
                    <div>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 text-white leading-[0.9] tracking-tighter uppercase">
                            {t('project.cta.title')}
                        </h2>
                        <p className="text-neutral-500 text-lg md:text-xl leading-relaxed font-sans max-w-2xl mx-auto">
                            {t('project.cta.desc')}
                        </p>
                    </div>
                    
                    <button
                        onClick={() => navigate('/contato')}
                        onKeyDown={(e) => e.key === 'Enter' && navigate('/contato')}
                        data-cursor="hover"
                        aria-label={t('project.cta.button')}
                        className="group/btn flex items-center gap-4 bg-white text-black px-10 py-5 rounded-none text-xs md:text-sm font-black tracking-widest uppercase hover:scale-105 transition-all duration-500 shadow-2xl focus:ring-2 focus:ring-white focus:ring-offset-4 focus:ring-offset-neutral-950 focus:outline-none"
                    >
                        <span>{t('project.cta.button')}</span>
                        <ArrowRight size={18} strokeWidth={3} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProjectCTA;
