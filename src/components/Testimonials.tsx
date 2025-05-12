
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sara Silva",
      company: "Coonline Contabilidade",
      quote: "O projeto 3D da nossa fachada superou todas as expectativas. A implementação aumentou em 35% o número de novos clientes no primeiro trimestre após a renovação.",
      avatar: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Raul Costa",
      company: "Tudo Conveniência",
      quote: "Trabalhar com o Daniel foi uma experiência incrível. Ele entendeu exatamente o que queríamos para nossa nova identidade visual e traduziu isso perfeitamente para o 3D.",
      avatar: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Ricardo Mendes",
      company: "Docile Confeitaria",
      quote: "A modelagem 3D do nosso estande para a feira foi fundamental para nos destacarmos dos concorrentes. O resultado atraiu muito mais visitantes e gerou excelentes contatos comerciais.",
      avatar: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-violet-800 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">O Que Nossos Clientes Dizem</h2>
          <div className="w-20 h-1 bg-indigo-300 mx-auto mb-6"></div>
          <p className="text-lg text-white/90">
            Confira os depoimentos de quem já transformou seu negócio com nossas soluções em design 3D.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all hover:translate-y-[-5px]">
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-indigo-300">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="text-5xl text-indigo-300 mb-4">"</div>
                  <p className="text-white/90 text-center mb-4">
                    {testimonial.quote}
                  </p>
                  <div className="mt-auto">
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-white/80 text-sm flex items-center justify-center">
                      <Sparkles className="h-3 w-3 mr-1 text-indigo-300" /> {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <blockquote className="text-xl italic max-w-2xl mx-auto">
            "Nosso compromisso é transformar sua visão em realidade, criando ambientes digitais que se traduzem em resultados reais para o seu negócio."
          </blockquote>
          <p className="mt-4 font-semibold flex items-center justify-center">
            <span className="bg-indigo-600 w-8 h-8 rounded-full flex items-center justify-center mr-2">
              <Sparkles className="h-4 w-4 text-white" />
            </span>
            Daniel Jardim, Fundador
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
