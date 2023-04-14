import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './vi/translation.json';
import translationVI from './en/translation.json';

export const defaultNS = 'ns1';
export const resources = {
    en: {
        translation: translationEN
    },
    vi: {
        translation: translationVI
    }
} as const;

i18next.use(initReactI18next).init({
    fallbackLng: ['en', 'vi'],
    lng: 'en',
    debug: false,
    resources: resources,
    interpolation: {
        escapeValue: false // not needed for react as it escapes by default
    }
});
