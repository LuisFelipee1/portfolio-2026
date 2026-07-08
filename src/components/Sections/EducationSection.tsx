import { useState, useCallback } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { FiBook, FiCalendar, FiAward, FiChevronDown, FiChevronUp } from "react-icons/fi";

interface Education {
  institution: string;
  course: string;
  period: string;
  type: "academic" | "certification";
  description?: string;
}

export function EducationSection() {
  const { t, language } = useLanguage();
  const [showAll, setShowAll] = useState(false);

  const educations: Education[] = [
    {
      institution: "Senac São Paulo",
      course: language === "pt" ? "Análise e Desenvolvimento de Sistemas" : "Systems Analysis and Development",
      period: "2024 - 2026",
      type: "academic",
    },
    {
      institution: "Trybe",
      course: language === "pt" ? "Desenvolvimento Web Completo" : "Full Web Development",
      period: language === "pt" ? "1500 horas" : "1500 hours",
      type: "academic",
      description:
        language === "pt"
          ? "Formação completa em Desenvolvimento Web com Fundamentos, Back-end e Ciência da Computação"
          : "Complete Web Development training covering Fundamentals, Back-end and Computer Science",
    },
    {
      institution: "Trybe",
      course: language === "pt" ? "Fundamentos do Desenvolvimento Web" : "Web Development Fundamentals",
      period: language === "pt" ? "Certificado" : "Certificate",
      type: "certification",
    },
    {
      institution: "Trybe",
      course: language === "pt" ? "Back-end Development" : "Back-end Development",
      period: language === "pt" ? "Certificado" : "Certificate",
      type: "certification",
    },
    {
      institution: "Trybe",
      course: language === "pt" ? "Ciência da Computação" : "Computer Science",
      period: language === "pt" ? "Certificado" : "Certificate",
      type: "certification",
    },
  ];

  const displayedEducations = showAll ? educations : educations.slice(0, 3);

  const toggleShowAll = useCallback(() => {
    setShowAll((prev) => !prev);
  }, []);

  return (
    <section id="education" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title animate-fade-in">{t.sections.education.title}</h2>
        <p className="section-subtitle animate-fade-in">
          {t.sections.education.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedEducations.map((edu, index) => (
            <div
              key={`${edu.institution}-${edu.course}`}
              className="card card-hover animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "both" }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#38bdf8]/10">
                  {edu.type === "academic" ? (
                    <FiBook className="w-6 h-6 text-[#38bdf8]" />
                  ) : (
                    <FiAward className="w-6 h-6 text-[#38bdf8]" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold mb-1 truncate" style={{ color: "var(--text-primary)" }}>
                    {edu.course}
                  </h3>
                  <p className="text-sm gradient-text font-medium mb-2">{edu.institution}</p>

                  <div className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text-secondary)" }}>
                    <FiCalendar className="w-3.5 h-3.5 text-[#38bdf8]" />
                    {edu.period}
                  </div>

                  {edu.description && (
                    <p className="text-sm mt-3" style={{ color: "var(--text-secondary)" }}>
                      {edu.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ver mais / Ver menos */}
        {educations.length > 3 && (
          <div className="text-center mt-8 animate-fade-in">
            <button
              onClick={toggleShowAll}
              className="btn-outline group"
            >
              {showAll
                ? language === "pt" ? "Ver menos" : "Show less"
                : language === "pt" ? "Ver mais" : "Show more"
              }
              {showAll ? (
                <FiChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
              ) : (
                <FiChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
              )}
            </button>
          </div>
        )}

        {/* Certificados Placeholder */}
        <div className="mt-16">
          <h3 className="text-xl md:text-2xl font-bold text-center mb-8 gradient-text">
            {language === "pt" ? "Certificados" : "Certificates"}
          </h3>
          <p className="text-center" style={{ color: "var(--text-secondary)" }}>
            {t.sections.education.placeholder}
          </p>
        </div>
      </div>
    </section>
  );
}
