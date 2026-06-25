import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProjectCTA = ({ 
    titleKey = 'project.cta.title', 
    descKey = 'project.cta.desc', 
    btnKey = 'project.cta.button' 
}: { 
    titleKey?: string, 
    descKey?: string, 
    btnKey?: string 
}) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <section className="container mx-auto px-6 md:px-12 py-32 relative">
            <div className="border border-neutral-900 bg-neutral-950 p-12 md:p-24 flex flex-col items-center text-center relative overflow-hidden group hover:border-primary/50 transition-colors duration-1000">
                
                {/* Animated Background Gradients */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
                
                <div className="relative z-10 flex flex-col items-center gap-12 max-w-4xl">
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-[2px] bg-primary mb-8 scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-center"></div>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 text-white leading-[0.9] tracking-tighter uppercase group-hover:scale-105 transition-transform duration-700">
                            {t(titleKey)}
                        </h2>
                        <p className="text-neutral-500 text-lg md:text-xl leading-relaxed font-sans max-w-2xl mx-auto group-hover:text-white transition-colors duration-700">
                            {t(descKey)}
                        </p>
                    </div>
                    
                    <button
                        onClick={() => navigate('/contato')}
                        onKeyDown={(e) => e.key === 'Enter' && navigate('/contato')}
                        data-cursor="hover"
                        aria-label={t(btnKey)}
                        className="relative overflow-hidden group/btn flex items-center gap-6 bg-white text-black px-12 py-6 rounded-none text-xs md:text-sm font-black tracking-widest uppercase transition-all duration-500 shadow-2xl focus:ring-2 focus:ring-primary focus:outline-none hover:bg-primary hover:text-white"
                    >
                        <span className="relative z-10">{t(btnKey)}</span>
                        <ArrowRight size={20} strokeWidth={3} className="relative z-10 group-hover/btn:translate-x-2 transition-transform duration-500" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProjectCTA;
