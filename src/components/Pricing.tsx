
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const plans = [
    {
      title: "Modelagem Básica",
      price: "R$200",
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
      price: "R$300",
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
      price: "R$100",
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
      price: "R$300-500",
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
    <section id="planos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Nossos Planos</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-text">
            Investimentos acessíveis para transformar seu negócio com design 3D de alto impacto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${
                plan.popular 
                  ? 'shadow-xl border-secondary' 
                  : 'shadow-md hover:shadow-lg border-gray-200'
              } transition-shadow`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-secondary text-white text-xs font-semibold py-1 px-3 rounded-bl">
                  Mais popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-center">
                  <h3 className="text-xl font-bold text-primary">{plan.title}</h3>
                </CardTitle>
                <div className="text-center mt-4">
                  <span className="text-3xl font-bold text-secondary">{plan.price}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-center text-text mb-6">{plan.description}</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 mt-1 text-secondary">
                        <Check className="h-4 w-4" />
                      </span>
                      <span className="text-sm text-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={() => window.open('https://wa.me/5591982591612?text=Olá! Tenho interesse no plano ' + plan.title, '_blank')}
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-secondary hover:bg-secondary/90' 
                      : 'bg-primary hover:bg-primary/90'
                  }`}
                >
                  Solicitar Orçamento
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-xl font-semibold mb-4 text-center">Condições Especiais de Pagamento</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">Pagamento 50/50</h4>
              <p className="text-text text-sm">
                Pague 50% na aprovação do projeto e os outros 50% somente na entrega final, sem surpresas.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">Desconto de 10%</h4>
              <p className="text-text text-sm">
                Ganhe 10% de desconto ao realizar o pagamento integral antecipado em qualquer um dos nossos planos.
              </p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              * Os preços podem variar de acordo com a complexidade do projeto. Entre em contato para um orçamento personalizado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
