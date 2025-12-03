
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, MessageSquare, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

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
    <section id="contato" className="py-12 bg-[#080808] relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t('contact.title')}</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-400 to-violet-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-white/80">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow bg-[#151515] border-[#252525] text-white hover:border-white/20">
            <CardContent className="p-3 md:p-6 flex flex-row md:flex-col items-center md:justify-center text-left md:text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-center shrink-0 mr-3 md:mr-0 md:mb-4">
                <MessageSquare className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <div className="flex flex-col md:items-center mr-auto md:mr-0 min-w-0">
                <h3 className="font-semibold text-white text-sm md:text-base md:mb-2">{t('contact.whatsapp')}</h3>
                <p className="text-white/80 text-xs md:text-base md:mb-4">(11) 94972-3280</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="ml-3 md:ml-0 md:mt-auto border-white/20 text-white hover:bg-white/10 text-xs md:text-sm h-8 md:h-9 shrink-0"
                onClick={() => window.open('https://wa.me/5511949723280', '_blank')}
              >
                {t('contact.chat')}
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow bg-[#151515] border-[#252525] text-white hover:border-white/20">
            <CardContent className="p-3 md:p-6 flex flex-row md:flex-col items-center md:justify-center text-left md:text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-center shrink-0 mr-3 md:mr-0 md:mb-4">
                <Phone className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <div className="flex flex-col md:items-center mr-auto md:mr-0 min-w-0">
                <h3 className="font-semibold text-white text-sm md:text-base md:mb-2">{t('contact.instagram')}</h3>
                <p className="text-white/80 text-xs md:text-base md:mb-4">@danieljardim.3d</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="ml-3 md:ml-0 md:mt-auto border-white/20 text-white hover:bg-white/10 text-xs md:text-sm h-8 md:h-9 shrink-0"
                onClick={() => window.open('https://instagram.com/danieljardim.3d', '_blank')}
              >
                {t('contact.follow')}
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow bg-[#151515] border-[#252525] text-white hover:border-white/20 col-span-2 md:col-span-1">
            <CardContent className="p-3 md:p-6 flex flex-row md:flex-col items-center md:justify-center text-left md:text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-center shrink-0 mr-3 md:mr-0 md:mb-4">
                <MessageSquare className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <div className="flex flex-col md:items-center mr-auto md:mr-0 min-w-0">
                <h3 className="font-semibold text-white text-sm md:text-base md:mb-2">{t('contact.email')}</h3>
                <p className="text-white/80 text-xs md:text-base md:mb-4 break-all">ddedesign1809@gmail.com</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="ml-3 md:ml-0 md:mt-auto border-white/20 text-white hover:bg-white/10 text-xs md:text-sm h-8 md:h-9 shrink-0"
                onClick={() => window.location.href = 'mailto:ddedesign1809@gmail.com'}
              >
                {t('contact.sendEmail')}
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-[#151515] rounded-lg shadow-xl overflow-hidden border border-[#252525]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-gradient-to-br from-indigo-800 to-violet-900 p-8 flex items-center text-white">
              <div>
                <h3 className="text-2xl font-semibold mb-6">{t('contact.whyWork')}</h3>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-white/20 p-1 rounded-full">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{t('contact.reasons.personalized.title')}</h4>
                      <p className="text-white/80 text-sm">{t('contact.reasons.personalized.desc')}</p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-white/20 p-1 rounded-full">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{t('contact.reasons.transparent.title')}</h4>
                      <p className="text-white/80 text-sm">{t('contact.reasons.transparent.desc')}</p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-white/20 p-1 rounded-full">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{t('contact.reasons.efficient.title')}</h4>
                      <p className="text-white/80 text-sm">{t('contact.reasons.efficient.desc')}</p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-white/20 p-1 rounded-full">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{t('contact.reasons.measurable.title')}</h4>
                      <p className="text-white/80 text-sm">{t('contact.reasons.measurable.desc')}</p>
                    </div>
                  </li>
                </ul>

                <Button
                  variant="outline"
                  className="mt-8 border-white/20 text-white hover:bg-white/10"
                  onClick={() => window.open('https://wa.me/5511949723280', '_blank')}
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  {t('contact.chatWhatsapp')}
                </Button>
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-white">{t('contact.sendMessage')}</h3>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-white">
                    {t('contact.form.name')}
                  </Label>
                  <input
                    id="name"
                    className="mt-1 w-full p-2 rounded-md bg-[#252525] text-white border border-[#353535] focus:border-indigo-500 focus:outline-none"
                    placeholder={t('contact.form.namePlaceholder')}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="empresa" className="text-white">
                    {t('contact.form.company')}
                  </Label>
                  <input
                    id="empresa"
                    className="mt-1 w-full p-2 rounded-md bg-[#252525] text-white border border-[#353535] focus:border-indigo-500 focus:outline-none"
                    placeholder={t('contact.form.companyPlaceholder')}
                    value={empresa}
                    onChange={(e) => setEmpresa(e.target.value)}
                  />
                </div>

                <div>
                  <Label className="text-white block mb-2">
                    {t('contact.form.services')}
                  </Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <div key={service.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={`service-${service.id}`}
                          checked={selectedServices.includes(service.label)}
                          onCheckedChange={() => handleServiceToggle(service.label)}
                          className="data-[state=checked]:bg-indigo-600 data-[state=checked]:border-indigo-600"
                        />
                        <Label
                          htmlFor={`service-${service.id}`}
                          className="text-white/80 text-sm cursor-pointer"
                        >
                          {service.label}
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
                  {t('contact.form.submit')}
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
