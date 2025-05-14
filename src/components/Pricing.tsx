
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const processSteps = [
    {
      title: "1. Sua visão, nosso ponto de partida",
      description: "Entendemos seus sonhos e metas a fundo.",
      icon: <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-center text-white font-bold">1</div>,
    },
    {
      title: "2. Estratégia 3D vencedora",
      description: "Criamos a solução perfeita para seu sucesso, com orçamento justo.",
      icon: <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-center text-white font-bold">2</div>,
    },
    {
      title: "3. Magia em ação",
      description: "Nosso time de craques transforma sua ideia em 3D espetacular.",
      icon: <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-center text-white font-bold">3</div>,
    },
    {
      title: "4. Você no comando",
      description: "Acompanhe tudo e aprove cada detalhe. Sua satisfação é lei.",
      icon: <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-center text-white font-bold">4</div>,
    },
  ];

  return (
    <section id="processo" className="py-24 bg-[#111111] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Seu projeto 3D exclusivo começa agora!</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-400 to-violet-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-white/80">
            Chega de soluções genéricas. Seu negócio merece um projeto 3D único, pensado para seus desafios e ambições. Nosso processo é 100% focado em você, do primeiro bate-papo à entrega de um resultado que vai te surpreender. Vamos criar juntos?
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden bg-[#151515] border-[#252525] hover:border-indigo-500/30 transition-all hover:translate-y-[-5px] hover:shadow-lg hover:shadow-indigo-900/20 text-white"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-violet-500"></div>
              <CardHeader className="pb-6 flex flex-col items-center">
                {step.icon}
                <CardTitle className="mt-4 text-center">
                  <p className="text-xl font-bold text-white">{step.title}</p>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-white/70">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card className="mt-12 bg-[#151515] border-[#252525] overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-violet-500"></div>
          <CardContent className="p-8 pt-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-center text-white font-bold text-2xl">5</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">5. Resultado entregue, parceria que fica</h3>
                <p className="text-white/70">Seu projeto impecável e nosso suporte total para o que vier. Nossa parceria não termina na entrega: estamos sempre prontos para ajustes futuros ou até mesmo novas ideias que possam surgir para o seu negócio.</p>
              </div>
              <div>
                <Button 
                  onClick={() => window.open('https://wa.me/5591982591612', '_blank')}
                  className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-8 py-6 rounded-lg transition-all duration-300 font-medium flex items-center gap-2 whitespace-nowrap"
                >
                  <Sparkles className="h-5 w-5" />
                  Quero meu projeto 3D vencedor!
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Pricing;
