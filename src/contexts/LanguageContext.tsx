import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import { Language, Translation } from "../types";
import { translations } from "../constants/translations";

interface LanguageContextData {
  language: Language;
  toggleLanguage: () => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextData | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem("@portfolio:language");
    if (stored === "en" || stored === "pt") return stored;
    return "pt";
  });

  useEffect(() => {
    localStorage.setItem("@portfolio:language", language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
  }, []);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextData {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
