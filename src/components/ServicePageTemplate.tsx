import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingButton from './FloatingButton';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ShimmerButton from "@/components/ui/shimmer-button";
import { MagicCard } from "@/components/ui/magic-card";
import { ArrowRight, Check } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import ProjectCTA from './ProjectCTA';
import { projectsData } from '@/data/projectsData';

import { BeamsBackground } from './ui/beams-background';

interface ServicePageProps {
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    category: string; // Added category prop
    ctaText?: string;
}

const ServicePageTemplate: React.FC<ServicePageProps> = ({
    title,
    subtitle,
    description,
    features,
    category,
    ctaText = "Solicitar Orçamento"
}) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    // Filter projects by category
    const categoryProjects = projectsData.filter(p => p.category === category);

    return (
        <div className="min-h-screen bg-transparent relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"></div>
            </div>

            <Navbar />

            <main className="pt-20 md:pt-24 pb-8 relative z-10">
                {/* Content Section - Details & Features */}
                <section className="container mx-auto px-4 mb-14 md:mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="flex flex-col justify-center text-left">
                            <h2 className="text-3xl md:text-5xl font-black mb-8 text-white leading-tight tracking-tight">
                                {title}
                            </h2>
                            <p className="text-lg md:text-xl text-white/50 mb-10 leading-relaxed font-medium">
                                {description}
                            </p>

                            <div className="flex">
                                <ShimmerButton
                                    className="shadow-[0_20px_40px_rgba(158,62,213,0.3)] py-3 px-8 rounded-full transition-all duration-300 hover:scale-[1.05]"
                                    background="linear-gradient(90deg, #563474 0%, #9E3ED5 100%)"
                                    shimmerColor="#FFFFFF"
                                    onClick={() => navigate('/contato')}
                                >
                                    <span className="flex items-center gap-3 text-sm font-black text-white uppercase tracking-[0.2em]">
                                        {ctaText} <ArrowRight className="h-5 w-5" />
                                    </span>
                                </ShimmerButton>
                            </div>
                        </div>

                        {/* Right Column: Features Card */}
                        <div className="glass-card rounded-[32px] p-8 md:p-12 bg-white/3 backdrop-blur-2xl border border-white/10 shadow-[0_32px_64px_rgba(0,0,0,0.4)] relative overflow-hidden group transition-all duration-500 hover:shadow-[0_20px_50px_rgba(158,62,213,0.1)]">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -mr-32 -mt-32"></div>
                            <h3 className="text-xl md:text-2xl font-black mb-10 text-white flex items-center gap-4">
                                <div className="p-1 rounded-lg">
                                    <Check className="h-6 w-6 text-primary" strokeWidth={3} />
                                </div>
                                {t('services.included')}
                            </h3>
                            <div className="space-y-6">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-5 group/item">
                                        <div className="shrink-0 transition-transform duration-300 group-hover/item:scale-110">
                                            <Check className="h-4 w-4 text-primary/60" strokeWidth={3} />
                                        </div>
                                        <p className="text-white/60 text-base md:text-lg font-medium tracking-tight group-hover/item:text-white transition-colors">{feature}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects Gallery Section */}
                <section className="container mx-auto px-4 mb-14 md:mb-16">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
                        <div className="text-left">
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
                                {t('services.gallery')}
                            </h2>
                            <p className="text-white/40 text-lg font-medium tracking-tight">
                                Explorando soluções visuais em {category}
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {categoryProjects.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => navigate(`/projeto/${item.id}`)}
                                className="group relative h-[550px] rounded-[32px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md cursor-pointer transition-all duration-700 hover:border-primary/50 shadow-[0_32px_64px_rgba(0,0,0,0.5)] hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(158,62,213,0.15)]"
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -mr-32 -mt-32"></div>
                                {/* Background Image */}
                                <div className="absolute inset-0 overflow-hidden">
                                    <img
                                        src={item.images[0]}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                </div>

                                {/* Netflix-style Gradient Overlay */}
                                <div 
                                    className="absolute inset-0 transition-opacity duration-700"
                                    style={{
                                        background: 'linear-gradient(to top, rgba(11,7,20, 0.98) 0%, rgba(11,7,20, 0.4) 50%, transparent 100%)'
                                    }}
                                />

                                {/* Content positioned at the bottom left */}
                                <div className="absolute inset-0 flex flex-col justify-end p-12 text-left">
                                    <div className="transform transition-all duration-700 group-hover:-translate-y-4">
                                        <span className="text-primary text-[11px] font-black tracking-[0.2em] uppercase mb-4 block">
                                            {t(`services.items.${item.categorySlug}.title`)}
                                        </span>
                                        <h3 className="text-white text-4xl font-black mb-8 leading-tight tracking-tight group-hover:text-highlight transition-colors">
                                            {item.title}
                                        </h3>
                                        <div className="flex items-center text-primary font-black text-[11px] tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 group-hover:translate-y-0 translate-y-6">
                                            VER PROJETO <ArrowRight className="ml-4 h-5 w-5 transform group-hover:translate-x-3 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {categoryProjects.length === 0 && (
                            <div className="col-span-full text-center py-32 bg-white/5 rounded-[32px] border border-dashed border-white/10">
                                <p className="text-white/40 text-xl font-medium">{t('project.notFound')}</p>
                            </div>
                        )}
                    </div>
                </section>

                {/* CTA Section */}
                <div className="mb-4">
                    <ProjectCTA />
                </div>
            </main>

            <Footer />
            <FloatingButton />
        </div>
    );
};

export default ServicePageTemplate;
