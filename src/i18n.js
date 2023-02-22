import i18next from 'i18next';

import { initReactI18next } from 'react-i18next';
import HttpApi from "i18next-http-backend";
// "Inline" English and Arabic translations.

// We can localize to any language and any number of languages.


i18next
  .use(initReactI18next)
  .use(HttpApi) 
  .init({
    lng: 'ar',
    debug: true,
    defaultNS: "translation",
    ns: 'translation',
    interpolation: {
      escapeValue: false,
    },
    fallbackLng: 'en',
    supportedLngs: ["en", "ar"],
    backend: {
      //loadPath: 'locales/{{ns}}/{{lng}}.json',
      loadPath: 'http://localhost:8080/api/locales/{{lng}}',
      parse: (data) => { 
        console.log(JSON.parse(data)); 
        return JSON.parse(data); 
      },
      // customHeaders: {
      //   "Access-Control-Allow-Origin": "*"
      // },
      requestOptions: { 
        mode: 'cors',
        credentials: 'same-origin',
        cache: 'default'
      }
    },
  });

export default i18next;
