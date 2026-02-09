"use client";

import { createContext, useContext, useMemo, useState } from "react";
import dictionary from "../data/i18n.json";

export type Language = "en" | "es";

type Dictionary = typeof dictionary.en;

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  strings: Dictionary;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const strings = useMemo(() => dictionary[language], [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, strings }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
