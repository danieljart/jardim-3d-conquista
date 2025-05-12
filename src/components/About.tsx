
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Sobre o Estúdio</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-400 to-violet-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-white/80">
            O <span className="font-semibold text-white">Daniel Jardim – 3D</span> é um estúdio totalmente digital especializado em transformar ideias em experiências visuais de alto impacto para empresas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 reveal-on-scroll opacity-0 transition-all duration-700 delay-100">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-xl blur opacity-30"></div>
              <div className="relative bg-[#181818] p-8 rounded-xl border border-white/10">
                <h3 className="text-3xl font-bold mb-6 text-white">Nossa História e Expertise</h3>
                <p className="mb-6 text-lg text-white/70 leading-relaxed">
                  Com anos de experiência no mercado, nosso estúdio se consolidou como referência em modelagem 3D e design para ambientes comerciais.
                </p>
                <p className="mb-8 text-lg text-white/70 leading-relaxed">
                  Trabalhamos com as mais avançadas ferramentas digitais para entregar resultados que não apenas impressionam visualmente, mas também contribuem para o sucesso do seu negócio.
                </p>
                
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-gradient-to-br from-indigo-500 to-violet-500 p-1 rounded-full">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-white/70">Conhecimento técnico com sensibilidade estética</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-gradient-to-br from-indigo-500 to-violet-500 p-1 rounded-full">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-white/70">Soluções personalizadas para cada cliente</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-gradient-to-br from-indigo-500 to-violet-500 p-1 rounded-full">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-white/70">Foco em aumentar a visibilidade da sua marca</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 reveal-on-scroll opacity-0 transition-all duration-700 delay-300">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              <div className="col-span-2 glass-card p-8 rounded-xl hover-lift group">
                <div className="text-4xl md:text-5xl font-bold mb-2 gradient-text group-hover:scale-110 transition-transform duration-300">50+</div>
                <p className="text-lg text-white/70">Projetos entregues anualmente</p>
              </div>
              
              <div className="glass-card p-8 rounded-xl hover-lift group">
                <div className="text-4xl font-bold mb-2 gradient-text group-hover:scale-110 transition-transform duration-300">85%</div>
                <p className="text-white/70">Aumento de público</p>
              </div>
              
              <div className="glass-card p-8 rounded-xl hover-lift group">
                <div className="text-4xl font-bold mb-2 gradient-text group-hover:scale-110 transition-transform duration-300">100%</div>
                <p className="text-white/70">Digital</p>
              </div>
              
              <div className="col-span-2 glass-card p-8 rounded-xl hover-lift group">
                <div className="text-4xl md:text-5xl font-bold mb-2 gradient-text group-hover:scale-110 transition-transform duration-300">5+</div>
                <p className="text-lg text-white/70">Anos de experiência no mercado</p>
              </div>
              
              <div className="col-span-2 glass-card p-8 rounded-xl hover-lift">
                <div className="text-2xl font-bold mb-3 text-white">Nossos Diferenciais</div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-gradient-to-br from-indigo-500 to-violet-500 p-1 rounded-full">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-white/70">Pagamento flexível com garantias</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-gradient-to-br from-indigo-500 to-violet-500 p-1 rounded-full">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-white/70">Pós-produção avançada com acabamento profissional</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-gradient-to-br from-indigo-500 to-violet-500 p-1 rounded-full">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-white/70">Atendimento digital ágil e personalizado</p>
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
