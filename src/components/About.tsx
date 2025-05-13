
import React, { useEffect, useRef } from 'react';
import { Check } from "lucide-react";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll');
      
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight * 0.8);
        
        if (isVisible) {
          el.classList.add('animate-fade-in');
          el.classList.add('opacity-100');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="sobre" 
      className="py-24 bg-[#111111] relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-800/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-violet-800/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Conheça o Daniel Jardim 3D: Paixão por Transformar Ideias em Realidade Visual</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-400 to-violet-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-white/80">
            O <span className="font-semibold text-white">Daniel Jardim 3D</span> é um estúdio 100% digital, apaixonado por transformar ideias inovadoras em experiências visuais de alto impacto para empresas como a sua. Nossa especialidade é dar vida a projetos que não apenas impressionam, mas que também geram valor e resultados concretos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 reveal-on-scroll opacity-0 transition-all duration-700 delay-100">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-xl blur opacity-30"></div>
              <div className="relative bg-[#181818] p-8 rounded-xl border border-white/10">
                <h3 className="text-3xl font-bold mb-6 text-white">Especialistas em Dar Vida às Suas Ideias com Design 3D</h3>
                <p className="mb-6 text-lg text-white/70 leading-relaxed">
                  Com sólida experiência no mercado, o estúdio Daniel Jardim 3D é sua referência em modelagem e design tridimensional para ambientes comerciais. Utilizamos as mais avançadas ferramentas digitais para criar soluções que não apenas encantam pelo visual, mas que, fundamentalmente, geram resultados e impulsionam o sucesso do seu negócio.
                </p>
                
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-gradient-to-br from-indigo-500 to-violet-500 p-1 rounded-full">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-white/70"><strong>Expertise Técnica e Sensibilidade Estética:</strong> Unimos profundo conhecimento técnico em modelagem 3D com uma apurada visão artística para desenvolver projetos que são ao mesmo tempo precisos e visualmente impactantes.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-gradient-to-br from-indigo-500 to-violet-500 p-1 rounded-full">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-white/70"><strong>Soluções Sob Medida para Seu Negócio:</strong> Compreendemos que cada empresa é única. Por isso, criamos projetos 100% personalizados, alinhados com seus objetivos, sua marca e as particularidades do seu público.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-gradient-to-br from-indigo-500 to-violet-500 p-1 rounded-full">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-white/70"><strong>Foco em Resultados e Visibilidade:</strong> Mais do que design, entregamos estratégia. Nossas soluções 3D são pensadas para aumentar a visibilidade da sua marca, atrair novos clientes e fortalecer sua presença no mercado.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 reveal-on-scroll opacity-0 transition-all duration-700 delay-300">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              <div className="col-span-2 glass-card p-8 rounded-xl hover-lift group">
                <div className="text-4xl md:text-5xl font-bold mb-2 gradient-text group-hover:scale-110 transition-transform duration-300">50+</div>
                <p className="text-lg text-white/70">+50 Projetos Entregues Anualmente: Experiência comprovada em transformar desafios em soluções visuais de sucesso para dezenas de empresas a cada ano.</p>
              </div>
              
              <div className="glass-card p-8 rounded-xl hover-lift group">
                <div className="text-4xl font-bold mb-2 gradient-text group-hover:scale-110 transition-transform duration-300">85%</div>
                <p className="text-white/70">Resultados Comprovados: Clientes relatam até 85% de aumento no engajamento e fluxo de público após a implementação de nossos projetos 3D.</p>
              </div>
              
              <div className="glass-card p-8 rounded-xl hover-lift group">
                <div className="text-4xl font-bold mb-2 gradient-text group-hover:scale-110 transition-transform duration-300">100%</div>
                <p className="text-white/70">Digital</p>
              </div>
              
              <div className="col-span-2 glass-card p-8 rounded-xl hover-lift group">
                <div className="text-4xl md:text-5xl font-bold mb-2 gradient-text group-hover:scale-110 transition-transform duration-300">5+</div>
                <p className="text-lg text-white/70">+5 Anos de Experiência: Uma trajetória de mais de cinco anos dedicada à excelência em design 3D, sempre atualizados com as últimas tecnologias e tendências do mercado.</p>
              </div>
              
              <div className="col-span-2 glass-card p-8 rounded-xl hover-lift">
                <div className="text-2xl font-bold mb-3 text-white">Por Que Escolher o Daniel Jardim 3D? Nossos Compromissos com Você:</div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-gradient-to-br from-indigo-500 to-violet-500 p-1 rounded-full">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-white/70"><strong>Flexibilidade e Confiança:</strong> Oferecemos condições de pagamento flexíveis e a garantia de um trabalho que atenda às suas expectativas, construindo uma parceria de confiança mútua.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-gradient-to-br from-indigo-500 to-violet-500 p-1 rounded-full">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-white/70"><strong>Acabamento Impecável:</strong> Cada detalhe conta. Nossa pós-produção avançada garante um acabamento profissional de altíssima qualidade, elevando o impacto visual do seu projeto.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-gradient-to-br from-indigo-500 to-violet-500 p-1 rounded-full">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-white/70"><strong>Atendimento Ágil e Personalizado:</strong> Conte com um atendimento digital eficiente, próximo e totalmente personalizado, focado em entender suas necessidades e superar suas expectativas em cada etapa.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
