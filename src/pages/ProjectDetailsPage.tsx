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
import ThumbnailCarousel from "@/components/ui/thumbnail-carousel";
import { MagicCard } from "@/components/ui/magic-card";

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
        <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-violet-950 relative">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl"></div>
            </div>

            <Navbar />

            <main className="pt-20 pb-8 md:pt-24 md:pb-16 relative z-10">
                <div className="container mx-auto px-4 max-w-[1600px]"> {/* Increased max-width for YouTube-like feel */}



                    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">

                        {/* LEFT COLUMN: Gallery */}
                        <div className="flex flex-col gap-4">
                            {/* Title specific for Mobile/Top if desired? No, usually in Desc. 
                                 YouTube puts Title BELOW video. 
                                 But we have description card. Let's keep title in description card.
                             */}
                            <ThumbnailCarousel images={project.images} />
                        </div>

                        {/* RIGHT COLUMN: Description & Related */}
                        <div className="flex flex-col gap-6">

                            {/* Project Description Card */}
                            <MagicCard
                                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1"
                                gradientColor="#6366f1"
                            >
                                <div className="mb-4">
                                    <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-medium mb-3 border border-indigo-500/30">
                                        {t(`services.items.${project.categorySlug}.title`)}
                                    </span>
                                    <h1 className="text-2xl font-bold text-white mb-2 leading-tight">
                                        {i18n.language === 'en' && project.title_en ? project.title_en : project.title}
                                    </h1>
                                    <div className="w-16 h-1 bg-gradient-to-r from-indigo-400 to-violet-400 rounded-full mb-4"></div>
                                </div>

                                <div>
                                    <h2 className="text-sm font-bold text-white mb-2 uppercase tracking-wider opacity-80">{t('project.about')}</h2>
                                    <p className="text-white/80 text-base leading-relaxed whitespace-pre-line">
                                        {i18n.language === 'en' && project.description_en ? project.description_en : project.description}
                                    </p>
                                </div>
                            </MagicCard>

                            {/* Recommended Projects */}
                            <div className="flex flex-col gap-4">
                                <h3 className="text-white text-lg font-bold pl-1">Outros Projetos</h3>
                                <div className="grid grid-cols-3 gap-2">
                                    {relatedProjects.slice(0, 3).map((p) => (
                                        <div
                                            key={p.id}
                                            className="group relative aspect-[9/14] rounded-xl overflow-hidden hover:shadow-xl hover:shadow-indigo-500/10 transition-all cursor-pointer border border-white/10 hover:scale-[1.02] duration-300"
                                            onClick={() => navigate(`/projeto/${p.id}`)}
                                        >
                                            <img
                                                src={p.images[0]}
                                                alt={p.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-2">
                                                <h4 className="text-white text-[10px] font-bold leading-tight group-hover:text-indigo-300 transition-colors line-clamp-2">
                                                    {i18n.language === 'en' && p.title_en ? p.title_en : p.title}
                                                </h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Category Navigation Section */}
                <section className="container mx-auto px-4 mt-16 md:mt-24 mb-8">
                    {(() => {
                        // Get representative image for each category from projectsData
                        const getCategoryImage = (slug: string) => {
                            const proj = projectsData.find(p => p.categorySlug === slug);
                            return proj?.images[0] || '';
                        };

                        const serviceCategories = [
                            { slug: 'fachadas', title: t('services.items.fachadas.title'), description: t('services.items.fachadas.overviewDesc'), path: '/servicos/fachadas', image: getCategoryImage('fachadas') },
                            { slug: 'cenografia', title: t('services.items.cenografia.overviewTitle'), description: t('services.items.cenografia.overviewDesc'), path: '/servicos/cenografia', image: getCategoryImage('cenografia') },
                            { slug: 'ambientes', title: t('services.items.ambientes.overviewTitle'), description: t('services.items.ambientes.overviewDesc'), path: '/servicos/ambientes', image: getCategoryImage('ambientes') },
                            { slug: 'personalizados', title: t('services.items.personalizados.title'), description: t('services.items.personalizados.overviewDesc'), path: '/servicos/personalizados', image: getCategoryImage('personalizados') }
                        ];
                        const currentCategory = serviceCategories.find(c => c.slug === project?.categorySlug);
                        const otherCategories = serviceCategories.filter(c => c.slug !== project?.categorySlug).slice(0, 3);

                        return (
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                {/* Current Category Card */}
                                {currentCategory && (
                                    <div className="flex flex-col">
                                        <p className="text-white/60 text-sm mb-2 font-medium">Você está aqui:</p>
                                        <MagicCard
                                            onClick={() => navigate(currentCategory.path)}
                                            className="cursor-pointer h-full group bg-white/5 backdrop-blur-md border-2 border-indigo-500/50 overflow-hidden hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1"
                                            gradientColor="#6366f1"
                                        >
                                            <div className="h-24 overflow-hidden relative">
                                                <img
                                                    src={currentCategory.image}
                                                    alt={currentCategory.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                            </div>
                                            <div className="p-3">
                                                <h3 className="text-white text-sm font-bold leading-tight mb-1">{currentCategory.title}</h3>
                                                <p className="text-white/60 text-xs line-clamp-2 mb-2">{currentCategory.description}</p>
                                                <div className="flex items-center text-indigo-400 text-xs font-medium">
                                                    {t('services.learnMore')} <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>
                                        </MagicCard>
                                    </div>
                                )}

                                {/* Other Categories */}
                                {otherCategories.map((cat, idx) => (
                                    <div key={cat.slug} className="flex flex-col">
                                        {idx === 0 && <p className="text-white/60 text-sm mb-2 font-medium">Conheça também:</p>}
                                        {idx !== 0 && <p className="text-white/60 text-sm mb-2 font-medium opacity-0">.</p>}
                                        <MagicCard
                                            onClick={() => navigate(cat.path)}
                                            className="cursor-pointer h-full group bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1"
                                            gradientColor="#6366f1"
                                        >
                                            <div className="h-24 overflow-hidden relative">
                                                <img
                                                    src={cat.image}
                                                    alt={cat.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                            </div>
                                            <div className="p-3">
                                                <h3 className="text-white text-sm font-bold leading-tight mb-1">{cat.title}</h3>
                                                <p className="text-white/60 text-xs line-clamp-2 mb-2">{cat.description}</p>
                                                <div className="flex items-center text-indigo-400 text-xs font-medium">
                                                    {t('services.learnMore')} <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>
                                        </MagicCard>
                                    </div>
                                ))}
                            </div>
                        );
                    })()}
                </section>

                <div className="mt-8 md:mt-16">
                    <ProjectCTA />
                </div>
            </main >

            <Footer />
            <FloatingButton />
        </div >
    );
};

export default ProjectDetailsPage;
