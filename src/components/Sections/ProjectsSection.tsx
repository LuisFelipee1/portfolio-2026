import { useLanguage } from "../../contexts/LanguageContext";
import { FiFolder, FiGithub, FiExternalLink } from "react-icons/fi";

export function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title animate-fade-in">{t.sections.projects.title}</h2>
        <p className="section-subtitle animate-fade-in">
          {t.sections.projects.subtitle}
        </p>

        {/* Placeholder - Projetos em breve */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="card card-hover animate-scale-in group cursor-default"
              style={{ animationDelay: `${item * 0.1}s`, animationFillMode: "both" }}
            >
              <div className="flex items-center justify-between mb-4">
                <FiFolder className="w-10 h-10 text-[#38bdf8]" />
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FiGithub className="w-5 h-5" style={{ color: "var(--text-secondary)" }} />
                  <FiExternalLink className="w-5 h-5" style={{ color: "var(--text-secondary)" }} />
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                Projeto {item}
              </h3>

              <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
                {t.sections.projects.placeholder}
              </p>

              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Tailwind"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-full
                               bg-[#38bdf8]/10 text-[#38bdf8]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
