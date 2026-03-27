import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButton from '@/components/FloatingButton';
import ProjectCTA from '@/components/ProjectCTA';
import { projectsData } from '@/data/projectsData';
import { ArrowRight, ArrowLeft, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectDetailsPage = () => {
    const { t, i18n } = useTranslation();
    const { id } = useParams();
    const navigate = useNavigate();

    const project = projectsData.find(p => p.id === Number(id));

    const relatedProjects = projectsData
        .filter(p => {
            if (p.id === Number(id)) return false;
            if (!project) return false;
            return p.categorySlug === project.categorySlug;
        })
        .slice(0, 3);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
                <h1 className="text-3xl font-black mb-8 uppercase tracking-tighter">{t('project.notFound')}</h1>
                <button onClick={() => navigate('/servicos')} className="bg-white text-black px-8 py-4 rounded-none text-sm font-black tracking-widest uppercase hover:scale-105 transition-transform">
                    {t('project.backToServices')}
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black relative overflow-hidden selection:bg-white/20">
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-white/5 rounded-none blur-[180px] opacity-40"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-neutral-900/10 rounded-none blur-[180px] opacity-40"></div>
            </div>

            <Navbar />

            <main className="pt-32 md:pt-48 pb-24 relative z-10">
                <div className="container mx-auto px-6 md:px-12">
                    
                    {/* Project Header */}
                    <div className="flex flex-col mb-16 md:mb-32">
                        <motion.button 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            onClick={() => navigate(-1)}
                            className="flex items-center gap-3 text-neutral-500 hover:text-white transition-colors mb-16 text-[10px] uppercase font-black tracking-[0.4em] group w-fit"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            {t('project.back')}
                        </motion.button>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                            <div className="lg:col-span-8">
                                <motion.span 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="inline-block px-5 py-2 border border-white/10 bg-white/5 text-neutral-400 text-[10px] font-black mb-10 uppercase tracking-[0.4em] rounded-none"
                                >
                                    {t(`services.items.${project.categorySlug}.title`)}
                                </motion.span>
                                <motion.h1 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-5xl md:text-[9vw] lg:text-[7vw] font-black text-white leading-[0.8] tracking-tighter uppercase"
                                >
                                    {i18n.language === 'en' && project.title_en ? project.title_en : project.title}
                                </motion.h1>
                            </div>
                            <div className="lg:col-span-4 flex justify-start lg:justify-end gap-6 h-fit">
                                <button className="w-14 h-14 rounded-none border border-neutral-800 bg-black/40 text-neutral-500 hover:bg-white hover:text-black hover:border-white transition-all flex items-center justify-center group">
                                    <Share2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                </button>
                                <button 
                                    onClick={() => navigate('/contato')}
                                    onKeyDown={(e) => e.key === 'Enter' && navigate('/contato')}
                                    aria-label={t('project.requestQuote')}
                                    className="px-10 py-5 bg-white text-black text-[10px] font-black uppercase tracking-[0.3em] rounded-none hover:bg-neutral-200 transition-all duration-700 shadow-2xl focus:ring-2 focus:ring-white focus:outline-none"
                                >
                                    {t('project.requestQuote')}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Premium Asymmetrical Gallery */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 mb-32">
                        {project.images.map((img, idx) => {
                            // Enhanced 21st.dev style grid
                            let gridClass = "md:col-span-12 aspect-[21/9] md:h-auto"; 
                            if (idx % 3 === 0) gridClass = "md:col-span-12 aspect-[21/9]";
                            if (idx % 3 === 1) gridClass = "md:col-span-7 aspect-[16/10]";
                            if (idx % 3 === 2) gridClass = "md:col-span-5 aspect-[16/10]";

                            return (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: "-10%" }}
                                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                    className={`${gridClass} overflow-hidden bg-neutral-900/50 border border-neutral-800/50 relative group cursor-pointer rounded-none`}
                                >
                                    <img 
                                        src={img} 
                                        alt={`${project.title} - ${idx + 1}`}
                                        className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] scale-110 group-hover:scale-100"
                                    />
                                    
                                    {/* Neutral Overlay on Hover */}
                                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
                                    
                                    {/* Minimalist Counter */}
                                    <div className="absolute bottom-8 right-8 px-4 py-2 bg-black/40 backdrop-blur-xl border border-white/5 rounded-none opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700">
                                        <span className="text-[8px] font-black text-white uppercase tracking-[0.4em]">
                                            PX_VIEW // 0{idx + 1}
                                        </span>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>

                    {/* Project Info Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 py-32 border-t border-neutral-900/50">
                        <div className="lg:col-span-8 flex flex-col gap-16">
                            <div>
                                <h2 className="text-[10px] font-black text-neutral-400 mb-10 uppercase tracking-[0.5em] flex items-center gap-4">
                                    <div className="h-[2px] w-8 bg-neutral-800"></div>
                                    {t('project.about')}
                                </h2>
                                <p className="text-neutral-400 text-xl md:text-3xl leading-[1.3] font-black tracking-tight uppercase max-w-5xl">
                                    {i18n.language === 'en' && project.description_en ? project.description_en : project.description}
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-4 flex flex-col gap-12 bg-neutral-900/10 border border-neutral-800/30 p-10 md:p-12 rounded-none backdrop-blur-sm self-start group">
                            <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-4 flex justify-between items-center">
                                {t('project.relatedProjects')}
                                <ArrowRight className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 -rotate-45 group-hover:rotate-0 transition-all" />
                            </h3>
                            <div className="flex flex-col gap-8">
                                {relatedProjects.map((p) => (
                                    <div 
                                        key={p.id} 
                                        onClick={() => navigate(`/projeto/${p.id}`)}
                                        onKeyDown={(e) => e.key === 'Enter' && navigate(`/projeto/${p.id}`)}
                                        tabIndex={0}
                                        role="button"
                                        aria-label={`${t('project.relatedProjects')}: ${p.title}`}
                                        className="group/item cursor-pointer flex gap-6 items-center focus:outline-none focus:ring-1 focus:ring-white/50 p-2 rounded-none"
                                    >
                                        <div className="w-24 h-24 overflow-hidden border border-neutral-800 shrink-0 rounded-none bg-neutral-900">
                                            <img src={p.images[0]} alt={p.title} className="w-full h-full object-cover grayscale group-hover/item:grayscale-0 group-hover/item:scale-110 transition-all duration-1000" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[8px] uppercase tracking-[0.3em] text-neutral-600 mb-2 group-hover/item:text-neutral-400 transition-colors">PROJ_0{p.id}</span>
                                            <h4 className="text-sm font-black text-white uppercase group-hover/item:text-neutral-200 transition-colors leading-tight">{p.title}</h4>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-32">
                    <ProjectCTA />
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ProjectDetailsPage;
