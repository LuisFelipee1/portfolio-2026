import { useLanguage } from "../../contexts/LanguageContext";
import { FiGithub, FiExternalLink, FiLinkedin } from "react-icons/fi";

interface Project {
  title: string;
  description: { pt: string; en: string };
  repoUrl: string;
  deployUrl?: string;
  linkedinUrl?: string;
  technologies: string[];
}

export function ProjectsSection() {
  const { t, language } = useLanguage();

  const projects: Project[] = [
    {
      title: "Recipes App",
      description: {
        pt: "Aplicativo de receitas completo com busca, categorias, favoritos e passo a passo. Desenvolvido em equipe utilizando metodologias ágeis.",
        en: "Complete recipe app with search, categories, favorites, and step-by-step instructions. Team-developed using agile methodologies.",
      },
      repoUrl: "https://github.com/LuisFelipee1/Recipes-App",
      deployUrl: "https://recipes-app-luis.surge.sh",
      technologies: ["React", "TypeScript", "Bootstrap", "Styled Components", "HTML", "CSS"],
    },
    {
      title: "Sneaker Air Store",
      description: {
        pt: "Loja virtual de tênis Full Stack com Angular no front-end e Node.js no back-end. Publicação com apresentação completa no LinkedIn.",
        en: "Full Stack sneaker store with Angular on the front-end and Node.js on the back-end. Full presentation published on LinkedIn.",
      },
      repoUrl: "https://github.com/LuisFelipee1/sneaker-air-store",
      linkedinUrl:
        "https://www.linkedin.com/in/luis-felipe-alves-fernandes-190198201/",
      technologies: ["JavaScript", "Angular", "Bootstrap", "Node.js", "Express.js", "Prisma"],
    },
    {
      title: "Portfólio Elaine",
      description: {
        pt: "Portfólio profissional desenvolvido para minha mãe, com design moderno, responsivo e otimizado para performance.",
        en: "Professional portfolio developed for my mother, with modern design, responsive layout, and performance optimization.",
      },
      repoUrl: "https://github.com/LuisFelipee1/portfolio-mae",
      deployUrl: "https://portfolio-elaine-xi.vercel.app",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title animate-fade-in">{t.sections.projects.title}</h2>
        <p className="section-subtitle animate-fade-in">
          {t.sections.projects.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="card card-hover animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "both" }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                {/* Index number */}
                <span className="text-3xl md:text-4xl font-black text-[#38bdf8]/20 select-none">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Action icons */}
                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg transition-all duration-300 hover:bg-[#38bdf8]/10 hover:text-[#38bdf8]"
                    style={{ color: "var(--text-secondary)" }}
                    aria-label="GitHub"
                  >
                    <FiGithub className="w-5 h-5" />
                  </a>

                  {project.deployUrl && (
                    <a
                      href={project.deployUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg transition-all duration-300 hover:bg-[#38bdf8]/10 hover:text-[#38bdf8]"
                      style={{ color: "var(--text-secondary)" }}
                      aria-label="Deploy"
                    >
                      <FiExternalLink className="w-5 h-5" />
                    </a>
                  )}

                  {project.linkedinUrl && (
                    <a
                      href={project.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg transition-all duration-300 hover:bg-[#38bdf8]/10 hover:text-[#38bdf8]"
                      style={{ color: "var(--text-secondary)" }}
                      aria-label="LinkedIn"
                    >
                      <FiLinkedin className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm mb-5 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {project.description[language]}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-full
                               bg-[#38bdf8]/10 text-[#38bdf8] transition-all duration-300
                               hover:bg-[#38bdf8]/20 hover:scale-105"
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
