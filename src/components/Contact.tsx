import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Instagram, Linkedin, Phone, ArrowDownRight } from 'lucide-react';
import Footer from './Footer';

interface ContactProps {
  minimal?: boolean;
}

const Contact: React.FC<ContactProps> = ({ minimal = false }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
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

  if (minimal) {
    return (
      <section id="contato" className="py-16 flex flex-col bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-6xl mb-8">
            <h2 className="text-6xl md:text-[9vw] font-black mb-6 text-white leading-[0.75] tracking-tighter uppercase">
              {t('contact.title')}
            </h2>
            <div className="flex items-center gap-6">
              <div className="w-16 h-[2px] bg-primary" />
              <p className="text-xs md:text-sm tracking-[0.6em] uppercase text-neutral-400 font-extrabold">
                {t('contact.subtitle')}
              </p>
            </div>
          </div>
          <div className="max-w-xl">
             <button
              onClick={() => navigate('/contato')}
              className="group flex items-center gap-8 bg-white text-black px-10 py-6 rounded-none font-black text-xs md:text-sm tracking-[0.4em] uppercase hover:bg-neutral-200 transition-all duration-500"
            >
              {t('contact.form.submit')} 
              <ArrowRight size={20} strokeWidth={3} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* SECTION 1: HERO */}
      <section className="h-screen flex flex-col justify-center bg-[#07020d] relative overflow-hidden snap-start shrink-0">
        <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
          <div className="absolute top-[10%] right-[-10%] w-[1000px] h-[1000px] bg-white/5 rounded-none blur-[200px]"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-7xl">
            <h2 className="text-5xl md:text-[9vw] font-black mb-10 text-white leading-[0.75] tracking-tighter uppercase transition-all duration-700">
              {t('contact.title')}
            </h2>
            <div className="flex items-center gap-8">
              <div className="w-20 h-[2px] bg-primary" />
              <p className="text-xs md:text-sm tracking-[0.7em] uppercase text-neutral-400 font-black">
                {t('contact.subtitle')}
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-neutral-600 flex flex-col items-center gap-4">
          <span className="text-[10px] uppercase tracking-[0.4em] font-black">{t('common.scroll')}</span>
          <div className="w-[1px] h-12 bg-neutral-800 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-primary origin-top animate-scroll-line" />
          </div>
        </div>
      </section>

      {/* SECTION 2: FORM, BENEFITS & SOCIAL */}
      <section className="h-screen flex flex-col justify-center bg-[#07020d] snap-start shrink-0 overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          {/* Main Grid: Benefits & Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 border border-white/10 bg-black/20 backdrop-blur-sm mb-8">
          
            {/* Left Column - Benefits */}
            <div className="lg:col-span-5 flex flex-col p-6 md:p-10 border-b lg:border-b-0 lg:border-r border-white/10">
              <h3 className="text-[9px] tracking-[0.5em] uppercase text-neutral-500 mb-8 font-black flex items-center gap-4">
                <span className="w-2 h-2 bg-white" />
                {t('contact.whyWork')}
              </h3>
              
              <ul className="space-y-6 md:space-y-8">
                {[
                  { id: 'personalized', title: t('contact.reasons.personalized.title'), desc: t('contact.reasons.personalized.desc') },
                  { id: 'transparent', title: t('contact.reasons.transparent.title'), desc: t('contact.reasons.transparent.desc') },
                  { id: 'efficient', title: t('contact.reasons.efficient.title'), desc: t('contact.reasons.efficient.desc') },
                  { id: 'measurable', title: t('contact.reasons.measurable.title'), desc: t('contact.reasons.measurable.desc') }
                ].map((reason) => (
                  <li key={reason.id} className="group">
                    <div className="flex items-start gap-4">
                      <span className="text-white font-black text-lg pt-1">/</span>
                      <div>
                        <h4 className="font-black text-white text-xl md:text-2xl mb-2 uppercase tracking-tighter group-hover:text-primary transition-colors leading-[0.9]">
                          {reason.title}
                        </h4>
                        <p className="text-neutral-500 font-medium leading-relaxed text-xs md:text-sm max-w-sm group-hover:text-white group-hover:scale-[1.05] transform origin-left transition-all duration-500">
                          {reason.desc}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-7 flex flex-col h-full bg-white/[0.01]">
              <div className="grid grid-cols-1 md:grid-cols-2 border-b border-white/10">
                <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/10 focus-within:bg-white/5 transition-colors">
                  <label className="text-[10px] tracking-[0.5em] font-black text-white uppercase block mb-3">
                    {t('contact.form.name')}
                  </label>
                  <input
                    className="w-full bg-transparent text-white focus:outline-none font-bold text-lg md:text-xl placeholder:text-neutral-900"
                    placeholder={t('contact.form.namePlaceholder')}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="p-6 md:p-8 focus-within:bg-white/5 transition-colors">
                  <label className="text-[10px] tracking-[0.5em] font-black text-white uppercase block mb-3">
                    {t('contact.form.company')}
                  </label>
                  <input
                    className="w-full bg-transparent text-white focus:outline-none font-bold text-lg md:text-xl placeholder:text-neutral-900"
                    placeholder={t('contact.form.companyPlaceholder')}
                    value={empresa}
                    onChange={(e) => setEmpresa(e.target.value)}
                  />
                </div>
              </div>

              {/* Services Selection */}
              <div className="p-6 md:p-8 flex-grow bg-white/[0.02]">
                <label className="text-[10px] tracking-[0.5em] font-black text-white uppercase block mb-4">
                  {t('contact.form.services')}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {services.map((service) => {
                    const isChecked = selectedServices.includes(service.label);
                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => handleServiceToggle(service.label)}
                        className={`text-left p-4 border transition-all duration-500 rounded-none h-full flex items-center justify-between ${
                          isChecked 
                            ? "border-primary bg-primary text-white" 
                            : "border-white/5 bg-transparent text-neutral-500 hover:border-white/20 hover:text-white"
                        }`}
                      >
                        <span className="text-[11px] md:text-xs font-black uppercase tracking-widest leading-tight">{service.label}</span>
                        <div className={`w-3 h-3 border ${isChecked ? 'border-white bg-white' : 'border-neutral-800'} shrink-0`} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-white text-black group flex items-center justify-between p-8 md:p-10 hover:bg-primary hover:text-white transition-all duration-700"
              >
                <span className="font-black text-xl md:text-3xl uppercase tracking-tighter group-hover:translate-x-4 transition-transform text-left">
                  {t('contact.form.submit')}
                </span>
                <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" strokeWidth={3} />
              </button>
            </div>
          </div>

          {/* Social Cards Integrated below */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5">
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
                className="flex items-center gap-6 p-6 bg-[#07020d] hover:bg-neutral-900 transition-all duration-700 group relative overflow-hidden h-full"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-white/5 group-hover:bg-primary transition-all duration-500 relative z-10 shrink-0">
                  <social.icon className="h-5 w-5 text-neutral-500 group-hover:text-white" strokeWidth={2.5} />
                </div>
                <div className="relative z-10">
                  <p className="text-[8px] uppercase tracking-[0.4em] text-neutral-600 font-extrabold mb-1 group-hover:text-primary transition-colors">{social.label}</p>
                  <p className="text-sm md:text-base font-black text-white tracking-widest group-hover:text-neutral-400 transition-colors whitespace-nowrap">{social.value}</p>
                </div>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-700" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: FOOTER */}
      <section className="snap-start shrink-0">
        <Footer />
      </section>
    </>
  );
};

export default Contact;
