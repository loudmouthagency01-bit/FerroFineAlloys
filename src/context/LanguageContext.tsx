"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import en from "@/i18n/en.json";
import hi from "@/i18n/hi.json";
import ar from "@/i18n/ar.json";
import es from "@/i18n/es.json";
import de from "@/i18n/de.json";
import fr from "@/i18n/fr.json";

type Language = "en" | "hi" | "ar" | "es" | "de" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const dictionaries: Record<Language, any> = {
  en,
  hi,
  ar,
  es,
  de,
  fr
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  // Simple key resolver e.g. "home.explore_catalog" -> dictionaries[lang]["home"]["explore_catalog"]
  const t = (keyString: string) => {
    const keys = keyString.split(".");
    let value = dictionaries[language];
    for (const key of keys) {
      if (value[key] === undefined) {
        // fallback to english if missing
        let enValue = dictionaries["en"];
        for (const enKey of keys) {
           if (!enValue) return keyString;
           enValue = enValue[enKey];
        }
        return enValue || keyString;
      }
      value = value[key];
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
