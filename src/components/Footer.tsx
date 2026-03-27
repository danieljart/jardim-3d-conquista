import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-background border-t border-neutral-900 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20">
          
          {/* Brand & Socials */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-black tracking-tighter uppercase text-white mb-6">
              DANIEL JARDIM <span className="text-neutral-600">3D</span>
            </h3>
            <p className="text-neutral-500 font-sans max-w-md leading-relaxed mb-8">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/danieljardim.3d" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-none border border-neutral-800 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
                  <rect x="2" y="2" width="20" height="20" rx="0" ry="0"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://wa.me/5511949723280" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-none border border-neutral-800 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </a>
              <a href="mailto:ddedesign1809@gmail.com" className="w-12 h-12 rounded-none border border-neutral-800 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-black text-white mb-8 border-b border-neutral-900 pb-4">
              {t('footer.contact')}
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:ddedesign1809@gmail.com" className="text-neutral-400 font-sans hover:text-white transition-colors flex items-center gap-2 group">
                  Email <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </a>
              </li>
              <li>
                <a href="https://wa.me/5511949723280" className="text-neutral-400 font-sans hover:text-white transition-colors flex items-center gap-2 group">
                  WhatsApp <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </a>
              </li>
              <li>
                <a href="https://instagram.com/danieljardim.3d" className="text-neutral-400 font-sans hover:text-white transition-colors flex items-center gap-2 group">
                  Instagram <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-black text-white mb-8 border-b border-neutral-900 pb-4">
              {t('footer.explore')}
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="/" className="text-neutral-400 font-sans hover:text-white transition-colors">{t('nav.home')}</a>
              </li>
              <li>
                <a href="/servicos/fachadas" className="text-neutral-400 font-sans hover:text-white transition-colors">{t('services.items.fachadas.title')}</a>
              </li>
              <li>
                <a href="/servicos/cenografia" className="text-neutral-400 font-sans hover:text-white transition-colors">{t('services.items.cenografia.title')}</a>
              </li>
              <li>
                <a href="/sobre" className="text-neutral-400 font-sans hover:text-white transition-colors">{t('nav.about')}</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-neutral-900 pt-8 mt-12 text-xs uppercase tracking-widest font-black text-neutral-600 gap-4">
          <p>&copy; {new Date().getFullYear()} DANIEL JARDIM 3D. {t('footer.rights').toUpperCase()}</p>
          <div className="flex gap-4">
            <span className="hover:text-white transition-colors cursor-pointer">{t('footer.terms').toUpperCase()}</span>
            <span className="hover:text-white transition-colors cursor-pointer">{t('footer.privacy').toUpperCase()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
