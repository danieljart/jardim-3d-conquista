import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButton from '@/components/FloatingButton';
import ProjectCTA from '@/components/ProjectCTA';
import { projectsData } from '@/data/projectsData';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Building2, Warehouse, Home, Trophy, ArrowRight } from 'lucide-react';
import thumbnailCarousel from "@/components/ui/thumbnail-carousel";
import ShimmerButton from '@/components/ui/shimmer-button';
import { MagicCard } from "@/components/ui/magic-card";
import { BeamsBackground } from '@/components/ui/beams-background';

const ProjectDetailsPage = () => {
    const { t, i18n } = useTranslation();
    const { id } = useParams();
    const navigate = useNavigate();

    const project = projectsData.find(p => p.id === Number(id));

    // Related projects logic: Get 4 projects excluding current, preferably same category?
    // For now simple exclusion and slice to keep it robust.
    const relatedProjects = projectsData
        .filter(p => p.id !== Number(id))
        .sort(() => 0.5 - Math.random()) // Shuffle
        .slice(0, 4);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold mb-4">{t('project.notFound')}</h1>
                <Button onClick={() => navigate('/servicos')} variant="outline">
                    {t('project.backToServices')}
                </Button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-transparent relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"></div>
            </div>

            <Navbar />

            <main className="pt-20 md:pt-24 pb-8 relative z-10">
                <div className="container mx-auto px-4 max-w-[1400px]">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-12">

                        {/* LEFT COLUMN: Gallery */}
                        <div className="flex flex-col gap-6">
                            {project.images.map((img, idx) => (
                                <div 
                                    key={idx} 
                                    className="rounded-[32px] overflow-hidden border border-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_24px_48px_rgba(158,62,213,0.1)] shadow-2xl w-fit mx-auto bg-white/3 relative group"
                                >
                                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <img 
                                        src={img} 
                                        alt={`${project.title} - ${idx + 1}`}
                                        className="max-w-full max-h-[85vh] h-auto block relative z-10 transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* RIGHT COLUMN: Description & Related */}
                        <div className="flex flex-col gap-6">

                            {/* Project Description Card */}
                            <div className="glass-card rounded-[32px] p-8 md:p-10 flex flex-col bg-white/3 backdrop-blur-[24px] border border-white/10 shadow-[0_32px_64px_rgba(0,0,0,0.4)] relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -mr-32 -mt-32"></div>
                                <div className="mb-10 text-left relative z-10">
                                    <span className="inline-block px-5 py-2 rounded-full bg-primary/10 text-primary text-[10px] font-black mb-6 border border-primary/20 uppercase tracking-[0.2em]">
                                        {t(`services.items.${project.categorySlug}.title`)}
                                    </span>
                                    <h1 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight tracking-tight">
                                        {i18n.language === 'en' && project.title_en ? project.title_en : project.title}
                                    </h1>
                                </div>

                                <div className="mb-12 text-left relative z-10">
                                    <h2 className="text-[11px] font-black text-white/30 mb-6 uppercase tracking-[0.3em]">{t('project.about') || 'SOBRE O PROJETO'}</h2>
                                    <p className="text-white/50 text-lg md:text-xl leading-[1.8] font-medium tracking-tight">
                                        {i18n.language === 'en' && project.description_en ? project.description_en : project.description}
                                    </p>
                                </div>

                                <ShimmerButton
                                    onClick={() => navigate('/contato')}
                                    background="linear-gradient(90deg, #563474 0%, #9E3ED5 100%)"
                                    shimmerColor="#FFFFFF"
                                    className="w-full py-3 text-sm md:text-base font-black uppercase tracking-[0.2em] shadow-[0_20px_40px_rgba(158,62,213,0.3)] rounded-[20px] relative z-10 transition-transform duration-300 hover:scale-[1.02]"
                                >
                                    {t('project.requestQuote') || 'Solicitar Orçamento'}
                                </ShimmerButton>
                            </div>

                            {/* Recommended Projects */}
                            <div className="flex flex-col gap-6">
                                <h3 className="text-white text-xl font-bold border-l-4 border-highlight pl-4">{t('project.relatedProjects')}</h3>
                                <div className="grid grid-cols-3 gap-4">
                                    {relatedProjects.slice(0, 3).map((p) => (
                                        <div
                                            key={p.id}
                                            className="group relative rounded-[20px] overflow-hidden hover:shadow-[0_20px_40px_rgba(158,62,213,0.2)] transition-all cursor-pointer border border-white/10 hover:scale-[1.05] duration-500 bg-white/5 aspect-[4/3]"
                                            onClick={() => navigate(`/projeto/${p.id}`)}
                                        >
                                            <img
                                                src={p.images[0]}
                                                alt={p.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0714] via-[#0B0714]/40 to-transparent flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <h4 className="text-white text-[10px] uppercase font-black tracking-widest leading-tight line-clamp-2">
                                                    {i18n.language === 'en' && p.title_en ? p.title_en : p.title}
                                                </h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Category Navigation Section (Vertical Sidebar) */}
                            <div className="flex flex-col gap-6">
                                {(() => {
                                    const getCategoryImage = (slug: string) => {
                                        const proj = projectsData.find(p => p.categorySlug === slug);
                                        return proj?.images[0] || '';
                                    };

                                    const serviceCategories = [
                                        { slug: 'fachadas', title: t('services.items.fachadas.title'), path: '/servicos/fachadas', image: getCategoryImage('fachadas') },
                                        { slug: 'cenografia', title: t('services.items.cenografia.overviewTitle'), path: '/servicos/cenografia', image: getCategoryImage('cenografia') },
                                        { slug: 'ambientes', title: t('services.items.ambientes.overviewTitle'), path: '/servicos/ambientes', image: getCategoryImage('ambientes') },
                                        { slug: 'personalizados', title: t('services.items.personalizados.title'), path: '/servicos/personalizados', image: getCategoryImage('personalizados') }
                                    ];
                                    const currentCategory = serviceCategories.find(c => c.slug === project?.categorySlug);
                                    const otherCategories = serviceCategories.filter(c => c.slug !== project?.categorySlug);

                                    return (
                                        <div className="flex flex-col gap-6">
                                            {/* Current Category */}
                                            {currentCategory && (
                                                <div className="flex flex-col">
                                                    <div
                                                        onClick={() => navigate(currentCategory.path)}
                                                        className="cursor-pointer group glass-card rounded-[24px] border-2 border-primary/30 overflow-hidden hover:shadow-[0_20px_40px_rgba(158,62,213,0.15)] transition-all duration-500 hover:scale-[1.02] bg-white/5 flex flex-row items-center p-4 relative"
                                                    >
                                                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-primary/20 transition-colors"></div>
                                                        <div className="w-16 h-16 rounded-[14px] overflow-hidden shrink-0 border border-white/10 relative z-10">
                                                            <img
                                                                src={currentCategory.image}
                                                                alt={currentCategory.title}
                                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                            />
                                                        </div>
                                                        <div className="ml-5 flex-1 relative z-10">
                                                            <h3 className="text-white text-[10px] font-black uppercase tracking-[0.2em] mb-1 opacity-40">{t('category.youAreHere') || 'VOCÊ ESTÁ AQUI:'}</h3>
                                                            <h3 className="text-white text-base font-black uppercase tracking-tight mb-2 group-hover:text-highlight transition-colors">{currentCategory.title}</h3>
                                                            <div className="flex items-center text-primary text-[10px] font-black uppercase tracking-[0.2em]">
                                                                {t('services.learnMore')} <ArrowRight className="ml-3 h-3 w-3 group-hover:translate-x-2 transition-transform" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Other Categories */}
                                            <div className="flex flex-col gap-4">
                                                <p className="text-white/40 text-[10px] mb-2 font-black uppercase tracking-[0.2em] pl-2">{t('category.knowMore') || 'CONHEÇA TAMBÉM:'}</p>
                                                {otherCategories.map((cat) => (
                                                    <div
                                                        key={cat.slug}
                                                        onClick={() => navigate(cat.path)}
                                                        className="cursor-pointer group glass-card rounded-[20px] border border-white/10 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-white/5 flex flex-row items-center p-3"
                                                    >
                                                        <div className="w-12 h-12 rounded-[10px] overflow-hidden shrink-0 border border-white/5 transition-all group-hover:border-primary/30">
                                                            <img
                                                                src={cat.image}
                                                                alt={cat.title}
                                                                className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all group-hover:scale-110"
                                                              />
                                                        </div>
                                                        <div className="ml-4">
                                                            <h3 className="text-white/40 group-hover:text-white text-sm font-black uppercase tracking-tight transition-colors">{cat.title}</h3>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })()}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 md:mt-16 mb-4">
                    <ProjectCTA />
                </div>
            </main>

            <Footer />
            <FloatingButton />
        </div>
    );
};

export default ProjectDetailsPage;
