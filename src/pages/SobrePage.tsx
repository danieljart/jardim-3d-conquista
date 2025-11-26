import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButton from '@/components/FloatingButton';
import { Award, Users, Clock, Target } from 'lucide-react';
import profileImage from '@/assets/daniel-profile.jpg';

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
                Sou designer 3D especializado em transformar ideias em visualizações profissionais.
                Desde 2018 atuo no design e, a partir de 2022, me aprofundei totalmente no 3D
                para criar projetos que elevam marcas, ambientes e produtos.
              </p>
              <p className="text-white/70 mb-8">
                Trabalho com fachadas comerciais, cenografia, interiores e peças personalizadas,
                criando soluções que unem estética, estratégia e resultado real para negócios.
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
                  src={profileImage}
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
            <div className="max-w-3xl mx-auto space-y-6 text-white/80 text-center">
              <p>
                Iniciei no design em 2018 e segui evoluindo até encontrar no 3D minha principal área de domínio.
                Desde 2022, dedico meu trabalho à criação de ambientes, fachadas, cenografias e produtos em 3D
                que tornam projetos mais claros, profissionais e impactantes.
              </p>
              <p>
                Domino ferramentas como Blender, D5 Render, SketchUp, CorelDRAW e outras soluções voltadas
                para visualização, prototipagem e comunicação visual. Essa combinação de design e 3D me permite
                entregar projetos completos, com estética refinada e foco no que realmente importa: resultado para o cliente.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="container mx-auto px-4 mb-16">
          <h2 className="text-3xl font-bold mb-12 text-white text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Design & 3D */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white border-b border-white/10 pb-2">Design & 3D</h3>
              <div className="space-y-4">
                {[
                  { name: 'Blender 3D', level: 5 },
                  { name: 'CorelDRAW', level: 5 },
                  { name: 'Photoshop', level: 4 },
                  { name: 'D5 Render', level: 4 },
                  { name: 'Illustrator', level: 3 },
                ].map((skill, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-white/90 font-medium">{skill.name}</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-3 w-6 rounded-sm ${i < skill.level ? 'bg-gradient-to-r from-indigo-500 to-violet-500' : 'bg-white/10'}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Audiovisual */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white border-b border-white/10 pb-2">Audiovisual</h3>
              <div className="space-y-4">
                {[
                  { name: 'Premiere', level: 5 },
                  { name: 'Filmmaking', level: 5 },
                  { name: 'After Effects', level: 3 },
                ].map((skill, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-white/90 font-medium">{skill.name}</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-3 w-6 rounded-sm ${i < skill.level ? 'bg-gradient-to-r from-indigo-500 to-violet-500' : 'bg-white/10'}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
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
                Cada projeto é pensado para destacar sua marca e gerar retorno real,
                seja atraindo clientes, fortalecendo identidade visual ou facilitando a comunicação do seu negócio.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-white">Comunicação Clara</h3>
              <p className="text-white/70">
                Você acompanha todas as etapas do processo. Ajustes, feedbacks e melhorias
                são feitos com transparência para garantir que tudo saia como você imaginou.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-white">Experiência Comprovada</h3>
              <p className="text-white/70">
                Mais de 100 projetos entregues entre fachadas, ambientes internos, cenografia e peças personalizadas.
                Meu portfólio mostra na prática como o 3D transforma ideias em soluções visuais eficientes.
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
