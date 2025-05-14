
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

        {/* First card - full width */}
        <div className="mb-8 reveal-on-scroll opacity-0 transition-all duration-700 delay-100">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-xl blur opacity-30"></div>
            <div className="relative bg-[#181818] p-8 rounded-xl border border-white/10">
              <h3 className="text-3xl font-bold mb-6 text-white">A essência do design que entrega valor real</h3>
              <p className="mb-6 text-lg text-white/70 leading-relaxed">
                Com experiência no mercado, sou referência em modelagem e design tridimensional para ambientes comerciais. Utilizo ferramentas digitais avançadas para criar soluções que não apenas encantam visualmente, mas que geram resultados concretos e impulsionam o sucesso do seu negócio.
              </p>
              
              <div className="flex flex-wrap gap-6">
                <div className="flex items-start gap-3 flex-1 min-w-[280px]">
                  <div className="mt-1 bg-gradient-to-br from-indigo-500 to-violet-500 p-1 rounded-full flex-shrink-0">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-white/70"><strong>Expertise técnica e sensibilidade estética:</strong> Uno profundo conhecimento técnico em modelagem 3D com uma apurada visão artística para desenvolver projetos que são ao mesmo tempo precisos e visualmente impactantes.</p>
                </div>
                <div className="flex items-start gap-3 flex-1 min-w-[280px]">
                  <div className="mt-1 bg-gradient-to-br from-indigo-500 to-violet-500 p-1 rounded-full flex-shrink-0">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-white/70"><strong>Soluções sob medida para seu negócio:</strong> Compreendo que cada empresa é única. Por isso, crio projetos 100% personalizados, alinhados com seus objetivos, sua marca e as particularidades do seu público.</p>
                </div>
                <div className="flex items-start gap-3 flex-1 min-w-[280px]">
                  <div className="mt-1 bg-gradient-to-br from-indigo-500 to-violet-500 p-1 rounded-full flex-shrink-0">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-white/70"><strong>Foco em resultados e visibilidade:</strong> Mais do que design, entrego estratégia. Minhas soluções 3D são pensadas para aumentar a visibilidade da sua marca, atrair novos clientes e fortalecer sua presença no mercado.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle cards - symmetrical layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 reveal-on-scroll opacity-0 transition-all duration-700 delay-200">
          <div className="glass-card p-6 rounded-xl hover-lift group h-full flex flex-col justify-between">
            <div className="text-4xl md:text-5xl font-bold mb-4 gradient-text group-hover:scale-110 transition-transform duration-300">50+</div>
            <p className="text-white/70"><strong>Projetos concluídos anualmente:</strong> Contribuindo para a transformação de negócios e a satisfação de clientes.</p>
          </div>
          
          <div className="glass-card p-6 rounded-xl hover-lift group h-full flex flex-col justify-between">
            <div className="text-4xl md:text-5xl font-bold mb-4 gradient-text group-hover:scale-110 transition-transform duration-300">85%</div>
            <p className="text-white/70"><strong>Resultados mensuráveis:</strong> Meus clientes constatam o impacto real do design na visibilidade e performance de seus negócios.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 reveal-on-scroll opacity-0 transition-all duration-700 delay-300">
          <div className="glass-card p-6 rounded-xl hover-lift group h-full flex flex-col justify-between">
            <div className="text-4xl md:text-5xl font-bold mb-4 gradient-text group-hover:scale-110 transition-transform duration-300">100%</div>
            <p className="text-white/70"><strong>Digital:</strong> Atendimento completamente digital e eficiente para sua comodidade.</p>
          </div>
          
          <div className="glass-card p-6 rounded-xl hover-lift group h-full flex flex-col justify-between">
            <div className="text-4xl md:text-5xl font-bold mb-4 gradient-text group-hover:scale-110 transition-transform duration-300">5+</div>
            <p className="text-white/70"><strong>Anos de experiência profissional:</strong> Dedicação contínua ao aprimoramento e à aplicação das melhores práticas de design.</p>
          </div>
        </div>
            
        {/* Last card - full width with horizontal items */}
        <div className="reveal-on-scroll opacity-0 transition-all duration-700 delay-400">
          <div className="glass-card p-8 rounded-xl hover-lift">
            <div className="text-2xl font-bold mb-6 text-white text-center">Ao optar pelos meus serviços, seu sucesso é o foco:</div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 bg-gradient-to-br from-indigo-500 to-violet-500 p-1.5 rounded-full">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <p className="text-white/70"><strong>Compromisso e parceria</strong></p>
                <p className="text-white/60 text-sm mt-1">Dedicação total ao seu projeto</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 bg-gradient-to-br from-indigo-500 to-violet-500 p-1.5 rounded-full">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <p className="text-white/70"><strong>Excelência e qualidade</strong></p>
                <p className="text-white/60 text-sm mt-1">Padrão superior em cada detalhe</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 bg-gradient-to-br from-indigo-500 to-violet-500 p-1.5 rounded-full">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <p className="text-white/70"><strong>Atendimento personalizado</strong></p>
                <p className="text-white/60 text-sm mt-1">Foco nas suas necessidades</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 bg-gradient-to-br from-indigo-500 to-violet-500 p-1.5 rounded-full">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <p className="text-white/70"><strong>Visão estratégica</strong></p>
                <p className="text-white/60 text-sm mt-1">Soluções que geram resultados</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 bg-gradient-to-br from-indigo-500 to-violet-500 p-1.5 rounded-full">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <p className="text-white/70"><strong>Compromisso com prazos</strong></p>
                <p className="text-white/60 text-sm mt-1">Entrega sempre pontual</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
