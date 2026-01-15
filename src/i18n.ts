import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import pt from './locales/pt.json';
import en from './locales/en.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            pt: {
                translation: pt,
            },
            en: {
                translation: en,
            },
        },
        fallbackLng: 'en',
        supportedLngs: ['pt', 'en', 'pt-BR'],
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
        detection: {
            order: ['navigator', 'htmlTag', 'path', 'subdomain'],
            caches: ['localStorage'],
            convertDetectedLanguage: (lng: string) => {
                // Força português para qualquer variante pt (pt-BR, pt-PT, etc)
                if (lng.startsWith('pt')) {
                    return 'pt';
                }
                return lng;
            },
        },
    });

export default i18n;
