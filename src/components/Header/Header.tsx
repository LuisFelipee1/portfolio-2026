import { useState, useEffect, useCallback } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { LanguageToggle } from "../LanguageToggle/LanguageToggle";
import { FiMenu, FiX } from "react-icons/fi";

interface NavItem {
  id: string;
  label: string;
}

export function Header() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { id: "projects", label: t.nav.projects },
    { id: "companies", label: t.nav.companies },
    { id: "education", label: t.nav.education },
    { id: "about", label: t.nav.about },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fecha o menu mobile ao redimensionar para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 
        ${isScrolled
          ? "py-3 glass shadow-lg shadow-[#38bdf8]/5"
          : "py-5 bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Nome */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xl md:text-2xl font-bold gradient-text hover:scale-105 
                       transition-transform duration-300"
          >
            LF
          </button>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-4 py-2 text-sm font-medium rounded-lg
                           transition-all duration-300 hover:text-[#38bdf8] group"
                style={{ color: "var(--text-secondary)" }}
              >
                {item.label}
                <span className="absolute inset-x-4 bottom-0 h-0.5 bg-[#38bdf8] 
                                 scale-x-0 group-hover:scale-x-100 transition-transform 
                                 duration-300 rounded-full" />
              </button>
            ))}
          </nav>

          {/* Ações - Theme + Language Toggle */}
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-2">
              <ThemeToggle />
              <LanguageToggle />
            </div>

            {/* Botão Menu Mobile */}
            <button
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              className="md:hidden p-2.5 rounded-xl border transition-all duration-300
                         hover:scale-110 active:scale-95
                         border-[#38bdf8]/20 hover:border-[#38bdf8]/60
                         bg-white/5 dark:bg-white/5"
            >
              {isMobileMenuOpen ? (
                <FiX className="w-5 h-5 text-[#38bdf8]" />
              ) : (
                <FiMenu className="w-5 h-5 text-[#38bdf8]" />
              )}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden
            ${isMobileMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}
          `}
        >
          <nav className="glass rounded-2xl p-4 flex flex-col gap-2">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium
                           transition-all duration-300 hover:text-[#38bdf8] hover:bg-[#38bdf8]/5"
                style={{
                  color: "var(--text-secondary)",
                  animation: isMobileMenuOpen
                    ? `slide-up 0.3s ease-out ${index * 0.05}s forwards`
                    : "none",
                  opacity: 0,
                }}
              >
                {item.label}
              </button>
            ))}

            {/* Toggles no mobile */}
            <div className="flex items-center gap-2 pt-3 border-t border-[#38bdf8]/10 mt-2">
              <ThemeToggle />
              <LanguageToggle />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
