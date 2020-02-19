import i18n from 'i18next'
import Backend from 'i18next-xhr-backend'
import {initReactI18next} from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import {DEFAULT_LANGUAGE} from "./constants/i18n";

const language = localStorage.getItem('i18nextLng') || DEFAULT_LANGUAGE;
i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        whitelist: ["ru", "en"],
        fallbackLng: language,
        ns: "translation",
        defaultNS: "translation",
        debug: true,
        backend: {
            loadPath: "/locales/{{lng}}/{{ns}}.json"
        },
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ["localStorage", "navigator"],
            caches: ["localStorage"]
        },
        react: {
            wait: false,
            useSuspense: true
        }
        });