import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, MessageSquare, Check, Instagram, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import ShimmerButton from "@/components/ui/shimmer-button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Meteors } from "@/components/ui/meteors";

const Contact = () => {
  const { t } = useTranslation();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [name, setName] = useState('');
  const [empresa, setEmpresa] = useState('');

  const services = [
    { id: "fachadas", label: t('contact.services.fachadas') },
    { id: "interiores", label: t('contact.services.interiores') },
    { id: "comunicacao", label: t('contact.services.comunicacao') },
    { id: "identidade", label: t('contact.services.identidade') },
    { id: "videos", label: t('contact.services.videos') },
    { id: "estandes", label: t('contact.services.estandes') },
  ];

  const handleServiceToggle = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = () => {
    const message = `${t('contact.messageTemplate.greeting')} ${name || t('contact.messageTemplate.client')}${empresa ? `, ${t('contact.messageTemplate.company')} ${empresa}` : ''}. ${selectedServices.length > 0 ? `${t('contact.messageTemplate.interest')} ${selectedServices.join(', ')}` : t('contact.messageTemplate.info')}`;
    window.open(`https://wa.me/5511949723280?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contato" className="min-h-[calc(100vh-80px)] flex flex-col py-6 md:py-8 bg-transparent relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex-grow flex flex-col justify-between">
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white leading-tight tracking-tight">
            {t('contact.title')}
          </h2>
          <p className="text-white/80 text-lg md:text-xl max-w-4xl mx-auto font-medium leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="glass-card rounded-[32px] overflow-hidden border border-white/10 max-w-7xl mx-auto shadow-[0_32px_64px_rgba(0,0,0,0.5)] bg-white/3 backdrop-blur-[24px]">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] items-stretch min-h-[480px]">
             {/* Left Column */}
            <div className="relative p-7 md:p-10 flex flex-col overflow-hidden bg-white/3 border-r border-white/5">
              <Meteors number={15} />
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex-grow">
                  <h3 className="text-xl md:text-2xl font-black mb-5 text-white leading-tight tracking-tight">{t('contact.whyWork')}</h3>
                  <ul className="space-y-3 mb-6">
                    {[
                      { id: 'personalized', title: t('contact.reasons.personalized.title'), desc: t('contact.reasons.personalized.desc') },
                      { id: 'transparent', title: t('contact.reasons.transparent.title'), desc: t('contact.reasons.transparent.desc') },
                      { id: 'efficient', title: 'Eficiência e Agilidade', desc: t('contact.reasons.efficient.desc') },
                      { id: 'measurable', title: t('contact.reasons.measurable.title'), desc: t('contact.reasons.measurable.desc') }
                    ].map((reason) => (
                      <li key={reason.id} className="flex items-start group">
                        <div className="mr-4 mt-1 bg-white p-1 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.4)]">
                          <Check className="h-3 w-3 text-black font-black" />
                        </div>
                        <div>
                          <h4 className="font-black text-white text-lg md:text-xl mb-0.5 group-hover:text-highlight transition-all tracking-wide">{reason.title}</h4>
                          <p className="text-white/40 text-xs md:text-sm leading-tight group-hover:text-white/80 transition-colors tracking-tight">{reason.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-white/10 bg-white/5 text-white hover:bg-white/10 px-6 py-4 rounded-full font-black transition-all hover:border-primary/50 tracking-wide text-[11px] md:text-sm shadow-xl"
                  onClick={() => window.open('https://wa.me/5511949723280', '_blank')}
                >
                  <MessageSquare className="h-4 w-4 text-primary mr-3" />
                  {t('contact.chatWhatsapp')}
                </Button>
              </div>
            </div>

            {/* Right Column */}
            <div className="p-7 md:p-10 bg-white/5 flex flex-col">
              <h3 className="text-lg md:text-xl font-black mb-6 text-white tracking-tight">{t('contact.sendMessage')}</h3>

              <div className="flex flex-col h-full">
                <div className="flex-grow space-y-6 mb-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white/40 text-[10px] md:text-xs font-black tracking-wide pl-1 block">
                        {t('contact.form.name')}
                      </Label>
                      <input
                        id="name"
                        className="w-full px-6 py-4 rounded-xl bg-white/5 text-white border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all placeholder:text-white/20 font-medium text-lg md:text-xl"
                        placeholder={t('contact.form.namePlaceholder')}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="empresa" className="text-white/40 text-[10px] md:text-xs font-black tracking-wide pl-1 block">
                        {t('contact.form.company')}
                      </Label>
                      <input
                        id="empresa"
                        className="w-full px-6 py-4 rounded-xl bg-white/5 text-white border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all placeholder:text-white/20 font-medium text-lg md:text-xl"
                        placeholder={t('contact.form.companyPlaceholder')}
                        value={empresa}
                        onChange={(e) => setEmpresa(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label className="text-white/40 text-[10px] md:text-xs font-black tracking-wide pl-1 block">
                      {t('contact.form.services')}
                    </Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white/3 p-6 rounded-xl border border-white/5">
                      {services.map((service) => (
                        <div key={service.id} className="flex items-center space-x-4 group/check">
                          <Checkbox
                            id={`service-${service.id}`}
                            checked={selectedServices.includes(service.label)}
                            onCheckedChange={() => handleServiceToggle(service.label)}
                            className="w-5 h-5 border-white/20 data-[state=checked]:bg-primary data-[state=checked]:border-primary transition-all rounded"
                          />
                          <Label
                            htmlFor={`service-${service.id}`}
                            className="text-white/70 text-base md:text-lg font-bold cursor-pointer group-hover/check:text-white transition-colors tracking-tight line-clamp-1"
                          >
                            {service.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <ShimmerButton
                  shimmerColor="#FFFFFF"
                  onClick={handleSubmit}
                  className="w-full py-4 rounded-full shadow-[0_20px_40px_rgba(158,62,213,0.3)] transition-all duration-300 hover:scale-[1.02]"
                  background="linear-gradient(90deg, #563474 0%, #9E3ED5 100%)"
                >
                  <span className="flex items-center justify-center gap-3 font-black text-white tracking-wide text-sm md:text-base">
                    <MessageSquare className="h-5 w-5" />
                    {t('contact.form.submit')}
                  </span>
                </ShimmerButton>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Cards positioned below, in a compact grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {[
            { 
              icon: Instagram, 
              label: 'Instagram', 
              value: '@danieljardim.3d', 
              url: 'https://instagram.com/danieljardim.3d' 
            },
            { 
              icon: Linkedin, 
              label: 'LinkedIn', 
              value: 'Daniel Jardim', 
              url: 'https://linkedin.com/in/danieljardim3d' 
            },
            { 
              icon: Phone, 
              label: 'WhatsApp', 
              value: '+55 11 94972-3280', 
              url: 'https://wa.me/5511949723280' 
            }
          ].map((social, idx) => (
            <a 
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-[24px] p-4 flex items-center gap-4 group hover:scale-[1.05] transition-all duration-300 hover:shadow-[0_15px_30px_rgba(158,62,213,0.15)] bg-white/3 backdrop-blur-xl border border-white/10"
            >
              <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary transition-all duration-300 shrink-0">
                <social.icon className="h-4 w-4 text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-white/40 text-[9px] font-black tracking-wide mb-0.5">{social.label}</p>
                <p className="text-[10px] md:text-[11px] font-black text-white group-hover:text-highlight transition-all tracking-tight truncate">{social.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
