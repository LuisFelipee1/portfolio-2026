import { useLanguage } from "../../contexts/LanguageContext";
import { FiHeart, FiCpu, FiTarget } from "react-icons/fi";
import fotoLuisFelipe from "../../assets/foto_luis_felipe.jpeg";

export function AboutSection() {
  const { t, language } = useLanguage();

  const highlights = [
    {
      icon: FiCpu,
      title: language === "pt" ? "Tecnologia" : "Technology",
      description:
        language === "pt"
          ? "Apaixonado por inovação e criação de produtos que geram impacto positivo."
          : "Passionate about innovation and creating products that make a positive impact.",
    },
    {
      icon: FiTarget,
      title: language === "pt" ? "Excelência" : "Excellence",
      description:
        language === "pt"
          ? "Busco constantemente evoluir e entregar soluções de alta qualidade."
          : "I constantly seek to evolve and deliver high-quality solutions.",
    },
    {
      icon: FiHeart,
      title: language === "pt" ? "Propósito" : "Purpose",
      description:
        language === "pt"
          ? "Cada linha de código é escrita com dedicação e propósito."
          : "Every line of code is written with dedication and purpose.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title animate-fade-in">{t.sections.about.title}</h2>
        <p className="section-subtitle animate-fade-in">
          {t.sections.about.subtitle}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="animate-slide-up flex justify-center lg:justify-start">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#38bdf8]/20 via-[#0ea5e9]/20 to-[#0284c7]/20 
                              rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden
                              border-2 border-[#38bdf8]/20 group-hover:border-[#38bdf8]/50 
                              transition-all duration-500">
                <img
                  src={fotoLuisFelipe}
                  alt="Luis Felipe Alves Fernandes"
                  className="w-full h-full object-cover transition-transform duration-700 
                             scale-105 group-hover:scale-115"
                />
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="animate-slide-up space-y-8">
            <div className="card">
              <p className="text-base md:text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {t.sections.about.bio}
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="card card-hover text-center animate-scale-in"
                >
                  <item.icon className="w-8 h-8 text-[#38bdf8] mx-auto mb-3" />
                  <h4 className="text-sm font-bold mb-1" style={{ color: "var(--text-primary)" }}>
                    {item.title}
                  </h4>
                  <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
