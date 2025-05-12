
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const plans = [
    {
      title: "Modelagem Básica",
      description: "Modelagem 3D do espaço existente",
      features: [
        "Modelagem detalhada do espaço atual",
        "1 revisão incluída",
        "Entrega em 5 dias úteis",
        "Arquivos em formato padrão",
      ],
      popular: false,
    },
    {
      title: "Design Completo",
      description: "Design de fachada ou layout interno",
      features: [
        "Modelagem do espaço existente",
        "Proposta de nova fachada/layout",
        "2 revisões incluídas",
        "Entrega em 7 dias úteis",
        "Arquivos em múltiplos formatos",
      ],
      popular: true,
    },
    {
      title: "Renderização",
      description: "Renderização e pós-produção",
      features: [
        "Alta qualidade de renderização",
        "Pós-produção profissional",
        "1 revisão incluída",
        "Entrega em 3 dias úteis",
        "Arquivos em alta resolução",
      ],
      popular: false,
    },
    {
      title: "Tour Virtual",
      description: "Vídeos e tours virtuais 3D",
      features: [
        "Tour interativo do ambiente",
        "Vídeo de apresentação",
        "2 revisões incluídas",
        "Entrega em 10 dias úteis",
        "Hospedagem por 1 ano incluída",
      ],
      popular: false,
    },
  ];

  return (
    <section id="planos" className="py-24 bg-[#111111] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Nossos Planos</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-400 to-violet-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-white/80">
            Soluções personalizadas para transformar seu negócio com design 3D de alto impacto.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden bg-[#151515] border-[#252525] ${
                plan.popular 
                  ? 'shadow-xl border-indigo-500/30' 
                  : 'shadow-md hover:shadow-lg'
              } transition-all hover:translate-y-[-5px] hover:bg-[#161616] text-white`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-semibold py-1 px-3 rounded-bl">
                  Mais popular
                </div>
              )}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-violet-500"></div>
              <CardHeader className="border-b border-white/5 pb-6">
                <CardTitle className="text-center">
                  <h3 className="text-xl font-bold text-white">{plan.title}</h3>
                </CardTitle>
                <div className="text-center mt-4">
                  <span className="text-sm font-medium px-3 py-1 bg-white/10 rounded-full text-white/80">Consulte valores</span>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-center text-white/70 mb-6">{plan.description}</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 mt-1 text-indigo-400">
                        <Check className="h-4 w-4" />
                      </span>
                      <span className="text-sm text-white/70">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={() => window.open('https://wa.me/5591982591612?text=Olá! Tenho interesse no plano ' + plan.title, '_blank')}
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700' 
                      : 'bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700'
                  } flex items-center justify-center gap-2 text-white border-none`}
                >
                  <Sparkles className="h-4 w-4" />
                  Solicitar Orçamento
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
