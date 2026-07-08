import { useLanguage } from "../../contexts/LanguageContext";
import { FiGlobe } from "react-icons/fi";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      aria-label={language === "pt" ? "Mudar para Inglês" : "Switch to Portuguese"}
      title={language === "pt" ? "Mudar para Inglês" : "Switch to Portuguese"}
      className="relative p-2.5 rounded-xl border transition-all duration-300 
                 hover:scale-110 active:scale-95 group overflow-hidden
                 border-[#38bdf8]/20 hover:border-[#38bdf8]/60
                 bg-white/5 dark:bg-white/5"
    >
      <span className="flex items-center gap-1.5">
        <FiGlobe className="w-4 h-4 text-[#38bdf8] group-hover:animate-spin-slow" />
        <span className="text-xs font-bold text-[#38bdf8] uppercase tracking-wider">
          {language}
        </span>
      </span>

      {/* Efeito glow no hover */}
      <span className="absolute inset-0 rounded-xl bg-[#38bdf8]/0 
                       group-hover:bg-[#38bdf8]/5 transition-all duration-300" />
    </button>
  );
}
