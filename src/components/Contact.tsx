import React from 'react';
import { Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real scenario, this would send the form data to a server
    window.open('https://wa.me/5591982591612', '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Entre em Contato</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-text">
            Estamos prontos para transformar suas ideias em experiências visuais impactantes. Fale conosco!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">WhatsApp</h3>
              <p className="text-text mb-4">(91) 98259-1612</p>
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-auto"
                onClick={() => window.open('https://wa.me/5591982591612', '_blank')}
              >
                Conversar
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">E-mail</h3>
              <p className="text-text mb-4">ddedesign1809@gmail.com</p>
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-auto"
                onClick={() => window.location.href = 'mailto:ddedesign1809@gmail.com'}
              >
                Enviar e-mail
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Instagram</h3>
              <p className="text-text mb-4">@danieljardim.3d</p>
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-auto"
                onClick={() => window.open('https://instagram.com/danieljardim.3d', '_blank')}
              >
                Seguir
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Envie sua mensagem</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text mb-1">
                    Nome
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Seu nome" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text mb-1">
                    E-mail
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="seu@email.com" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text mb-1">
                    Mensagem
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Como podemos ajudar?" 
                    rows={4} 
                    required 
                  />
                </div>
                <Button type="submit" className="w-full">
                  Enviar Mensagem
                </Button>
              </form>
            </div>
            <div className="gradient-bg p-8 flex items-center">
              <div className="text-white">
                <h3 className="text-2xl font-semibold mb-6">Por que trabalhar conosco?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Entrega rápida com prazos claramente definidos</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Atendimento personalizado e flexível, 100% digital</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Mais de 50 projetos entregues com resultados mensuráveis</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Condições especiais de pagamento (50/50 ou desconto de 10%)</span>
                  </li>
                </ul>
                <Button 
                  variant="outline" 
                  className="mt-8 border-white text-white hover:bg-white hover:text-primary"
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
