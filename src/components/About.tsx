
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Por que optar pelos meus serviços?</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-400 to-violet-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-white/80">
            Sou mais que um designer; sou seu parceiro estratégico na busca por resultados superiores. Com dedicação, expertise técnica e paixão pela inovação, transformo suas ideias em valor tangível para seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 reveal-on-scroll opacity-0 transition-all duration-700 delay-100">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-xl blur opacity-30"></div>
              <div className="relative bg-[#181818] p-8 rounded-xl border border-white/10">
                <h3 className="text-3xl font-bold mb-6 text-white">Especialistas em dar vida às suas ideias com design 3D</h3>
                <p className="mb-6 text-lg text-white/70 leading-relaxed">
                  Com sólida experiência no mercado, o estúdio Daniel Jardim - 3D é sua referência em modelagem e design tridimensional para ambientes comerciais. Utilizamos as mais avançadas ferramentas digitais para criar soluções que não apenas encantam pelo visual, mas que, fundamentalmente, geram resultados e impulsionam o sucesso do seu negócio.
                </p>
                
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-gradient-to-br from-indigo-500 to-violet-500 p-1 rounded-full">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-white/70"><strong>Expertise técnica e sensibilidade estética:</strong> Unimos profundo conhecimento técnico em modelagem 3D com uma apurada visão artística para desenvolver projetos que são ao mesmo tempo precisos e visualmente impactantes.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-gradient-to-br from-indigo-500 to-violet-500 p-1 rounded-full">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-white/70"><strong>Soluções sob medida para seu negócio:</strong> Compreendemos que cada empresa é única. Por isso, criamos projetos 100% personalizados, alinhados com seus objetivos, sua marca e as particularidades do seu público.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-gradient-to-br from-indigo-500 to-violet-500 p-1 rounded-full">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-white/70"><strong>Foco em resultados e visibilidade:</strong> Mais do que design, entregamos estratégia. Nossas soluções 3D são pensadas para aumentar a visibilidade da sua marca, atrair novos clientes e fortalecer sua presença no mercado.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 reveal-on-scroll opacity-0 transition-all duration-700 delay-300">
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-8 glass-card p-6 rounded-xl hover-lift group">
                <div className="text-4xl md:text-5xl font-bold mb-2 gradient-text group-hover:scale-110 transition-transform duration-300">50+</div>
                <p className="text-white/70"><strong>Projetos concluídos anualmente:</strong> Contribuindo para a transformação de negócios e a satisfação de clientes.</p>
              </div>
              
              <div className="col-span-4 glass-card p-6 rounded-xl hover-lift group">
                <div className="text-4xl font-bold mb-2 gradient-text group-hover:scale-110 transition-transform duration-300">85%</div>
                <p className="text-white/70"><strong>Resultados mensuráveis:</strong> Meus clientes constatam o impacto real do design na visibilidade e performance de seus negócios.</p>
              </div>
              
              <div className="col-span-4 glass-card p-6 rounded-xl hover-lift group">
                <div className="text-4xl font-bold mb-2 gradient-text group-hover:scale-110 transition-transform duration-300">100%</div>
                <p className="text-white/70"><strong>Digital:</strong> Atendimento completamente digital e eficiente para sua comodidade.</p>
              </div>
              
              <div className="col-span-8 glass-card p-6 rounded-xl hover-lift group">
                <div className="text-4xl md:text-5xl font-bold mb-2 gradient-text group-hover:scale-110 transition-transform duration-300">5+</div>
                <p className="text-white/70"><strong>Anos de experiência profissional:</strong> Dedicação contínua ao aprimoramento e à aplicação das melhores práticas de design.</p>
              </div>
            </div>
            
            <div className="mt-5 glass-card p-8 rounded-xl hover-lift col-span-12">
              <div className="text-2xl font-bold mb-3 text-white">Ao optar pelos meus serviços, seu sucesso é o foco:</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                <div className="flex flex-col items-start">
                  <div className="mb-2 bg-gradient-to-br from-indigo-500 to-violet-500 p-1 rounded-full">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-white/70"><strong>Compromisso e parceria:</strong> Flexibilidade e dedicação para superar suas expectativas. Sua tranquilidade é minha prioridade.</p>
                </div>
                
                <div className="flex flex-col items-start">
                  <div className="mb-2 bg-gradient-to-br from-indigo-500 to-violet-500 p-1 rounded-full">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-white/70"><strong>Excelência e qualidade superior:</strong> Atenção meticulosa aos detalhes e acabamento de alto padrão. Seu projeto com a excelência que ele merece.</p>
                </div>
                
                <div className="flex flex-col items-start">
                  <div className="mb-2 bg-gradient-to-br from-indigo-500 to-violet-500 p-1 rounded-full">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-white/70"><strong>Atendimento dedicado e personalizado:</strong> Agilidade, proximidade e foco total em suas necessidades. Estou aqui para compreender e executar.</p>
                </div>
                
                <div className="flex flex-col items-start">
                  <div className="mb-2 bg-gradient-to-br from-indigo-500 to-violet-500 p-1 rounded-full">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-white/70"><strong>Visão estratégica de negócios:</strong> Minha abordagem integra o design aos seus objetivos comerciais, visando impulsionar vendas e fortalecer sua marca.</p>
                </div>
                
                <div className="flex flex-col items-start">
                  <div className="mb-2 bg-gradient-to-br from-indigo-500 to-violet-500 p-1 rounded-full">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-white/70"><strong>Cumprimento de prazos e transparência:</strong> Compromisso com o cronograma estabelecido e comunicação clara em todas as etapas do projeto.</p>
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
