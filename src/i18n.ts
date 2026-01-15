import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import pt from './locales/pt.json';
import en from './locales/en.json';

const BRAZIL_TIMEZONES = new Set<string>([
    'America/Sao_Paulo',
    'America/Fortaleza',
    'America/Recife',
    'America/Maceio',
    'America/Araguaina',
    'America/Bahia',
    'America/Belem',
    'America/Boa_Vista',
    'America/Campo_Grande',
    'America/Cuiaba',
    'America/Manaus',
    'America/Porto_Velho',
    'America/Rio_Branco',
    'America/Noronha',
]);

const isBrazilTimezone = () => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return typeof tz === 'string' && BRAZIL_TIMEZONES.has(tz);
};

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
            order: ['navigator'],
            caches: [],
            convertDetectedLanguage: (_lng: string) => {
                // Regra do site:
                // - Usuários no Brasil: sempre PT
                // - Fora do Brasil: sempre EN
                return isBrazilTimezone() ? 'pt' : 'en';
            },
        },
    });

export default i18n;
