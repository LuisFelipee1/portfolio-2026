import { useLanguage } from "../../contexts/LanguageContext";
import { FiArrowDown, FiGithub, FiLinkedin } from "react-icons/fi";

export function HeroSection() {
  const { t } = useLanguage();

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
    >
      {/* Background subtle gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#38bdf8]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#0ea5e9]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Greeting */}
        <p
          className="text-[#38bdf8] font-medium text-lg mb-4 animate-fade-in"
          style={{ animationDelay: "0.1s", animationFillMode: "both" }}
        >
          {t.hero.greeting}
        </p>

        {/* Name */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up"
          style={{ animationDelay: "0.2s", animationFillMode: "both" }}
        >
          <span className="gradient-text">Luis Felipe</span>
          <br />
          <span style={{ color: "var(--text-primary)" }}>Alves Fernandes</span>
        </h1>

        {/* Role */}
        <p
          className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 animate-slide-up"
          style={{ color: "var(--text-secondary)", animationDelay: "0.3s", animationFillMode: "both" }}
        >
          {t.hero.role}
        </p>

        {/* Description */}
        <p
          className="text-base sm:text-lg max-w-2xl mx-auto mb-10 animate-slide-up"
          style={{ color: "var(--text-secondary)", animationDelay: "0.4s", animationFillMode: "both" }}
        >
          {t.hero.description}
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up"
          style={{ animationDelay: "0.5s", animationFillMode: "both" }}>
          <button onClick={scrollToProjects} className="btn-primary group">
            {t.hero.cta}
            <FiArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
          </button>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/LuisFelipee1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline p-3"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/luis-felipe-alves-fernandes-190198201/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline p-3"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-[#38bdf8]/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 rounded-full bg-[#38bdf8] animate-bounce" />
        </div>
      </div>
    </section>
  );
}
