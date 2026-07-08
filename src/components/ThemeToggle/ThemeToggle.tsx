import { useTheme } from "../../contexts/ThemeContext";
import { useLanguage } from "../../contexts/LanguageContext";
import { FiSun, FiMoon } from "react-icons/fi";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === "dark" ? t.theme.light : t.theme.dark}
      title={theme === "dark" ? t.theme.light : t.theme.dark}
      className="relative p-2.5 rounded-xl border transition-all duration-300 
                 hover:scale-110 active:scale-95 group
                 border-[#38bdf8]/20 hover:border-[#38bdf8]/60
                 bg-white/5 dark:bg-white/5"
    >
      <span className="sr-only">
        {theme === "dark" ? t.theme.light : t.theme.dark}
      </span>

      {/* Icone do Sol - visível no dark mode, girando ao entrar */}
      <FiSun
        className={`w-5 h-5 transition-all duration-500 
          ${theme === "dark"
            ? "text-[#38bdf8] rotate-0 opacity-100 scale-100"
            : "rotate-90 opacity-0 scale-75 absolute"
          }`}
      />

      {/* Icone da Lua - visível no light mode */}
      <FiMoon
        className={`w-5 h-5 transition-all duration-500 
          ${theme === "light"
            ? "text-[#38bdf8] rotate-0 opacity-100 scale-100"
            : "rotate-90 opacity-0 scale-75 absolute"
          }`}
      />

      {/* Efeito glow no hover */}
      <span className="absolute inset-0 rounded-xl bg-[#38bdf8]/0 
                       group-hover:bg-[#38bdf8]/5 transition-all duration-300" />
    </button>
  );
}
