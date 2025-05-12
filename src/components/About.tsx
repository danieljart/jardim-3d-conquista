
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre o Estúdio</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-text">
            O <span className="font-semibold">Daniel Jardim – 3D</span> é um estúdio totalmente digital especializado em transformar ideias em experiências visuais de alto impacto para empresas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Nossa História e Expertise</h3>
            <p className="mb-4 text-text">
              Com anos de experiência no mercado, nosso estúdio se consolidou como referência em modelagem 3D e design para ambientes comerciais.
              Trabalhamos com as mais avançadas ferramentas digitais para entregar resultados que não apenas impressionam visualmente, mas também contribuem para o sucesso do seu negócio.
            </p>
            <p className="text-text">
              Nossa equipe combina conhecimento técnico com sensibilidade estética para criar soluções personalizadas que atendem às necessidades específicas de cada cliente, sempre com foco em aumentar a visibilidade e atratividade de sua marca.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-white shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="text-primary font-bold text-4xl mb-2">50</div>
                <p className="text-text">Projetos entregues anualmente</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="text-primary font-bold text-4xl mb-2">85%</div>
                <p className="text-text">Clientes relatam aumento de público</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="text-primary font-bold text-4xl mb-2">100%</div>
                <p className="text-text">Atendimento digital personalizado</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="text-primary font-bold text-4xl mb-2">5</div>
                <p className="text-text">Anos de experiência no mercado</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 p-6 rounded-lg border border-gray-100">
          <h3 className="text-xl font-semibold mb-4 text-center">Nossos Diferenciais</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Entrega Rápida</h4>
              <p className="text-sm text-text">Pagamento flexível: 50% na aprovação e 50% na entrega ou 10% de desconto para pagamento antecipado</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Pós-produção Avançada</h4>
              <p className="text-sm text-text">Mockups realistas, telas interativas e acabamento profissional em todos os projetos</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Atendimento Digital Ágil</h4>
              <p className="text-sm text-text">Suporte constante por WhatsApp e e-mail com respostas rápidas às suas necessidades</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
