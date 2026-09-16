import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import id from './locales/id.json';
import en from './locales/en.json';
import ja from './locales/ja.json';

i18n
  .use(LanguageDetector) // deteksi bahasa browser / localStorage otomatis
  .use(initReactI18next)
  .init({
    resources: {
      id: { translation: id },
      en: { translation: en },
      ja: { translation: ja }
    },
    fallbackLng: 'id',
    supportedLngs: ['id', 'en', 'ja'],
    interpolation: {
      escapeValue: false // React sudah aman dari XSS secara default
    },
    detection: {
      // urutan deteksi: cek localStorage dulu, baru bahasa browser
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;
