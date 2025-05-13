
import React, { useState } from 'react';
import { Phone, MessageSquare, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  const services = [
    "Fachadas 3D Impactantes",
    "Interiores 3D Funcionais",
    "Comunicação Visual 3D",
    "Identidade Visual 3D",
    "Vídeos e Tours Virtuais 3D",
    "Estandes para Feiras e Eventos",
  ];
  
  const handleServiceToggle = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = () => {
    const message = `Olá! Meu nome é ${name || 'Cliente'}${email ? ` (${email})` : ''}. Tenho interesse nos seguintes serviços: ${selectedServices.length > 0 ? selectedServices.join(', ') : 'Gostaria de mais informações sobre os serviços disponíveis.'}`;
    window.open(`https://wa.me/5591982591612?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contato" className="py-24 bg-[#080808] relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Vamos conversar sobre o seu projeto?</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-400 to-violet-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-white/80">
            Pronto para dar o próximo passo e transformar a imagem do seu negócio? Selecione os serviços de seu interesse e envie uma mensagem direta. Estamos ansiosos para entender suas ideias e propor a melhor solução 3D para você!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow bg-[#151515] border-[#252525] text-white hover:border-white/20">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-white">WhatsApp</h3>
              <p className="text-white/80 mb-4">(91) 98259-1612</p>
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-auto border-white/20 text-white hover:bg-white/10"
                onClick={() => window.open('https://wa.me/5591982591612', '_blank')}
              >
                Conversar
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow bg-[#151515] border-[#252525] text-white hover:border-white/20">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-white">Instagram</h3>
              <p className="text-white/80 mb-4">@danieljardim.3d</p>
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-auto border-white/20 text-white hover:bg-white/10"
                onClick={() => window.open('https://instagram.com/danieljardim.3d', '_blank')}
              >
                Seguir
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow bg-[#151515] border-[#252525] text-white hover:border-white/20">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-white">E-mail</h3>
              <p className="text-white/80 mb-4">ddedesign1809@gmail.com</p>
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-auto border-white/20 text-white hover:bg-white/10"
                onClick={() => window.location.href = 'mailto:ddedesign1809@gmail.com'}
              >
                Enviar e-mail
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-[#151515] rounded-lg shadow-xl overflow-hidden border border-[#252525]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-white">Envie sua mensagem</h3>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-white">
                    Nome
                  </Label>
                  <input 
                    id="name" 
                    className="mt-1 w-full p-2 rounded-md bg-[#252525] text-white border border-[#353535] focus:border-indigo-500 focus:outline-none"
                    placeholder="Seu nome" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-white">
                    E-mail
                  </Label>
                  <input 
                    id="email" 
                    className="mt-1 w-full p-2 rounded-md bg-[#252525] text-white border border-[#353535] focus:border-indigo-500 focus:outline-none"
                    placeholder="seu@email.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                
                <div>
                  <Label className="text-white block mb-2">
                    Serviços de interesse
                  </Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <div key={service} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`service-${service}`} 
                          checked={selectedServices.includes(service)}
                          onCheckedChange={() => handleServiceToggle(service)}
                          className="data-[state=checked]:bg-indigo-600 data-[state=checked]:border-indigo-600"
                        />
                        <Label 
                          htmlFor={`service-${service}`}
                          className="text-white/80 text-sm cursor-pointer"
                        >
                          {service}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button 
                  onClick={handleSubmit}
                  className="w-full mt-4 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Enviar e Iniciar Conversa
                </Button>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-800 to-violet-900 p-8 flex items-center text-white">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Por que trabalhar conosco?</h3>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-white/20 p-1 rounded-full">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Atendimento personalizado e flexível</h4>
                      <p className="text-white/80 text-sm">100% digital, com comunicação ágil e eficiente para sua conveniência.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-white/20 p-1 rounded-full">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Processo transparente</h4>
                      <p className="text-white/80 text-sm">Acompanhamento em cada etapa do projeto, com abertura para ajustes e revisões quando necessário.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-white/20 p-1 rounded-full">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Entrega rápida e eficiente</h4>
                      <p className="text-white/80 text-sm">Compromisso com prazos claramente definidos para melhor planejamento do seu projeto.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-white/20 p-1 rounded-full">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Resultados mensuráveis</h4>
                      <p className="text-white/80 text-sm">Mais de 50 projetos entregues com comprovado aumento de engajamento e conversão.</p>
                    </div>
                  </li>
                </ul>
                
                <Button 
                  variant="outline" 
                  className="mt-8 border-white/20 text-white hover:bg-white/10"
                  onClick={() => window.open('https://wa.me/5591982591612', '_blank')}
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Conversar no WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
