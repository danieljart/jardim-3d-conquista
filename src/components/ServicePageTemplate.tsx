import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingButton from './FloatingButton';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Check } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import ProjectCTA from './ProjectCTA';
import { projectsData } from '@/data/projectsData';

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
    const navigate = useNavigate();

    // Filter projects by category
    const categoryProjects = projectsData.filter(p => p.category === category);

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-violet-950 relative">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl"></div>
            </div>

            <Navbar />

            <main className="pt-24 pb-16 relative z-10">
                {/* Hero Section */}
                <section className="container mx-auto px-4 mb-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        {title}
                    </h1>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-400 to-violet-400 mx-auto mb-8 rounded-full"></div>
                    <p className="text-xl text-indigo-200 font-medium mb-4">{subtitle}</p>
                    <p className="text-lg text-white/80 max-w-3xl mx-auto mb-10">
                        {description}
                    </p>

                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-semibold text-lg border-none shadow-lg shadow-indigo-900/30"
                        onClick={() => navigate('/contato')}
                    >
                        {ctaText} <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </section>

                {/* Features Section */}
                <section className="container mx-auto px-4 mb-20">
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12">
                        <h2 className="text-2xl font-bold mb-8 text-white text-center">O que está incluído</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="mr-4 mt-1 bg-indigo-500/20 p-1 rounded-full">
                                        <Check className="h-5 w-5 text-indigo-400" />
                                    </div>
                                    <p className="text-white/90">{feature}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>



                {/* Gallery Section */}
                <section className="container mx-auto px-4 mb-20">
                    <h2 className="text-3xl font-bold mb-10 text-white text-center">Galeria de Projetos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categoryProjects.map((item) => (
                            <Card
                                key={item.id}
                                className="bg-white/5 border-white/10 overflow-hidden hover:shadow-xl hover:shadow-indigo-900/20 transition-all duration-300 group cursor-pointer"
                                onClick={() => navigate(`/projeto/${item.id}`)}
                            >
                                <div className="h-64 overflow-hidden relative">
                                    <img
                                        src={item.images[0]} // Use first image as thumbnail
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-6">
                                        <div>
                                            <span className="text-indigo-400 text-sm font-medium mb-1 block">{item.category}</span>
                                            <h3 className="text-white text-xl font-bold">{item.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                        {categoryProjects.length === 0 && (
                            <div className="col-span-full text-center text-white/50 py-12">
                                Nenhum projeto encontrado nesta categoria.
                            </div>
                        )}
                    </div>
                </section>

                {/* CTA Section */}
                <ProjectCTA />
            </main>

            <Footer />
            <FloatingButton />
        </div>
    );
};

export default ServicePageTemplate;
