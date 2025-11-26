import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const ProjectCTA = () => {
    const navigate = useNavigate();

    return (
        <section className="container mx-auto px-4 text-center py-20">
            <div className="bg-gradient-to-r from-indigo-900/50 to-violet-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-12 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-white">Pronto para transformar seu projeto?</h2>
                <p className="text-white/80 mb-8 text-lg">
                    Entre em contato agora e vamos discutir como posso ajudar a elevar o nível visual do seu negócio.
                </p>
                <Button
                    size="lg"
                    className="bg-white text-indigo-900 hover:bg-indigo-50 font-bold text-lg"
                    onClick={() => navigate('/contato')}
                >
                    Falar no WhatsApp
                </Button>
            </div>
        </section>
    );
};

export default ProjectCTA;
