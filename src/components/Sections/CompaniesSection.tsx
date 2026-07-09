import { useLanguage } from "../../contexts/LanguageContext";
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";

interface Company {
  name: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

export function CompaniesSection() {
  const { t, language } = useLanguage();

  const companies: Company[] = [
    {
      name: t.sections.companies.irko,
      role: language === "pt" ? "Desenvolvedor de Software" : "Software Developer",
      period: language === "pt" ? "2024 - Presente" : "2024 - Present",
      location: language === "pt" ? "Remoto" : "Remote",
      description:
        language === "pt"
          ? [
              "Desenvolvimento Front-end com React, Next.js e TypeScript",
              "Desenvolvimento Full Stack com Python e Django",
              "Automações corporativas e dashboards",
              "Integrações de APIs e Excel Automation",
              "Soluções com Inteligência Artificial",
              "Levantamento de requisitos e sustentação",
            ]
          : [
              "Front-end development with React, Next.js and TypeScript",
              "Full Stack development with Python and Django",
              "Corporate automations and dashboards",
              "API integrations and Excel Automation",
              "AI-powered solutions",
              "Requirements gathering and maintenance",
            ],
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Python",
        "Django",
        "Node.js",
      ],
    },
    {
      name: t.sections.companies.alpar,
      role: language === "pt" ? "Desenvolvedor em Formação" : "Developer in Training",
      period: language === "pt" ? "2024" : "2024",
      location: language === "pt" ? "São Paulo, Brasil" : "São Paulo, Brazil",
      description:
        language === "pt"
          ? [
              "Programa de capacitação em desenvolvimento web",
              "Construção da Sneaker Air Store (Full Stack)",
              "Front-end com AngularJS e Bootstrap",
              "Back-end com Node.js",
              "Automações com ServiceNow",
            ]
          : [
              "Web development training program",
              "Built Sneaker Air Store (Full Stack)",
              "Front-end with AngularJS and Bootstrap",
              "Back-end with Node.js",
              "Automations with ServiceNow",
            ],
      technologies: ["AngularJS", "Node.js", "JavaScript", "ServiceNow", "Bootstrap"],
    },
    {
      name: t.sections.companies.chat2desk,
      role:
        language === "pt"
          ? "Técnico de Automação"
          : "Automation Technician",
      period: language === "pt" ? "2023 - 2024" : "2023 - 2024",
      location: language === "pt" ? "Remoto" : "Remote",
      description:
        language === "pt"
          ? [
              "Desenvolvimento de automações empresariais",
              "Criação de fluxos inteligentes para WhatsApp e Instagram",
              "Implementação de chatbots corporativos",
              "Suporte técnico para soluções de atendimento digital",
            ]
          : [
              "Business automation development",
              "Smart flows for WhatsApp and Instagram",
              "Corporate chatbot implementation",
              "Technical support for digital service solutions",
            ],
      technologies: ["Automação", "IA", "Low-code", "Chatbots", "APIs"],
    },
  ];

  return (
    <section id="companies" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title animate-fade-in">{t.sections.companies.title}</h2>
        <p className="section-subtitle animate-fade-in">
          {t.sections.companies.subtitle}
        </p>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#38bdf8] via-[#0ea5e9] to-transparent" />

          <div className="space-y-12 md:space-y-24">
            {companies.map((company, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={company.name}
                  className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-12 animate-slide-up`}
                  style={{
                    animationDelay: `${index * 0.2}s`,
                    animationFillMode: "both",
                    flexDirection: isLeft ? "md:flex-row" : "md:flex-row-reverse",
                  }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full 
                                 bg-[#38bdf8] shadow-lg shadow-[#38bdf8]/30 z-10
                                 ring-4 ring-[#38bdf8]/20" />

                  {/* Card */}
                  <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-2rem)] ml-10 md:ml-0">
                    <div className="card card-hover group relative overflow-hidden">
                      {/* Glow effect on hover */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#38bdf8]/0 via-[#38bdf8]/5 to-[#38bdf8]/0 
                                      opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                      <div className="relative">
                        {/* Header */}
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                          <div>
                            <h3 className="text-xl font-bold gradient-text mb-1">
                              {company.name}
                            </h3>
                            <p className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
                              {company.role}
                            </p>
                          </div>
                        </div>

                        {/* Meta info */}
                        <div className="flex flex-wrap gap-3 mb-4 text-xs" style={{ color: "var(--text-secondary)" }}>
                          <span className="flex items-center gap-1">
                            <FiCalendar className="w-3.5 h-3.5 text-[#38bdf8]" />
                            {company.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <FiMapPin className="w-3.5 h-3.5 text-[#38bdf8]" />
                            {company.location}
                          </span>
                        </div>

                        {/* Description */}
                        <ul className="space-y-2 mb-4">
                          {company.description.map((desc, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm"
                              style={{ color: "var(--text-secondary)" }}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] mt-2 flex-shrink-0" />
                              {desc}
                            </li>
                          ))}
                        </ul>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {company.technologies.map((tech) => (
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
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
