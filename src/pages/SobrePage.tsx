import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButton from '@/components/FloatingButton';
import { Award, Users, Clock, Target } from 'lucide-react';

const stats = [
  { icon: Award, value: '100+', label: 'Projetos Entregues' },
  { icon: Users, value: '80+', label: 'Clientes Satisfeitos' },
  { icon: Clock, value: '5+', label: 'Anos de Experiência' },
  { icon: Target, value: '100%', label: 'Foco em Resultados' },
];

const SobrePage = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/');
    setTimeout(() => {
      const contactSection = document.getElementById('contato');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-violet-950 relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl"></div>
      </div>

      <Navbar />

      <main className="pt-24 pb-16 relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Olá, eu sou o<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                  Daniel Jardim
                </span>
              </h1>
              <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-400 to-violet-400 mb-8 rounded-full"></div>
              <p className="text-xl text-white/80 mb-6">
                Sou designer 3D especializado em transformar visões em realidade visual.
                Meu trabalho vai além de criar imagens bonitas — eu desenvolvo soluções que
                geram resultados reais para negócios.
              </p>
              <p className="text-white/70 mb-8">
                Com anos de experiência em fachadas comerciais, cenografia, ambientes internos
                e peças personalizadas, ajudo empresas e empreendedores a se destacarem
                no mercado através de projetos visuais impactantes.
              </p>
              <button
                onClick={handleContactClick}
                className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-8 py-3 rounded-lg transition-all duration-300 font-medium shadow-lg"
              >
                Vamos Conversar
              </button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden p-2">
                <img
                  src="/placeholder.svg"
                  alt="Daniel Jardim"
                  className="w-full h-full object-cover rounded-xl opacity-90"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-full blur-3xl opacity-50"></div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-4 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"
                >
                  <div className="bg-gradient-to-br from-indigo-600 to-violet-600 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-indigo-900/30">
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </section>

        {/* My Story Section */}
        <section className="container mx-auto px-4 mb-16">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-white text-center">Minha Trajetória</h2>
            <div className="max-w-3xl mx-auto space-y-6 text-white/80">
              <p>
                Comecei minha jornada no design 3D há mais de 5 anos, movido pela paixão
                de transformar ideias em visualizações impactantes. Desde o início, percebi
                que meu trabalho poderia ir além da estética — poderia gerar resultados
                concretos para negócios.
              </p>
              <p>
                Ao longo dos anos, especializei-me em diferentes áreas: fachadas comerciais
                que atraem clientes, estandes e cenografias que capturam atenção em eventos,
                ambientes internos que otimizam a experiência do cliente, e peças personalizadas
                que marcam momentos especiais.
              </p>
              <p>
                Hoje, trabalho com clientes de diversos segmentos, sempre com o mesmo
                compromisso: entregar projetos que não apenas impressionam visualmente,
                mas que geram retorno real para quem investe.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Me Section */}
        <section className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-white text-center">
            Por que trabalhar comigo?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-white">Foco em Resultados</h3>
              <p className="text-white/70">
                Não crio apenas imagens bonitas. Desenvolvo projetos pensando no retorno
                que você terá: mais clientes, mais vendas, mais reconhecimento.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-white">Comunicação Clara</h3>
              <p className="text-white/70">
                Você acompanha cada etapa do projeto. Feedbacks são bem-vindos e
                ajustes são feitos até que o resultado esteja perfeito.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-white">Experiência Comprovada</h3>
              <p className="text-white/70">
                Mais de 100 projetos entregues e clientes satisfeitos. Meu portfólio
                fala por si — resultados reais para negócios reais.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingButton />
    </div>
  );
};

export default SobrePage;
