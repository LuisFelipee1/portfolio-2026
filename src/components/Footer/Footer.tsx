import { useLanguage } from "../../contexts/LanguageContext";
import { FiPhone, FiMail, FiLinkedin, FiGithub, FiHeart } from "react-icons/fi";

export function Footer() {
  const { t } = useLanguage();

  const contactLinks = [
    {
      icon: FiPhone,
      label: "Telefone",
      href: "tel:+5511966325626",
      value: "+55 11 96632-5626",
    },
    {
      icon: FiMail,
      label: "Email",
      href: "mailto:luisfelipealves128@gmail.com",
      value: "luisfelipealves128@gmail.com",
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/luis-felipe-alves-fernandes-190198201/",
      value: "Luis Felipe Alves Fernandes",
    },
    {
      icon: FiGithub,
      label: "GitHub",
      href: "https://www.github.com/LuisFelipee1",
      value: "LuisFelipee1",
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-[#38bdf8]/10">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-[#38bdf8]/40 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="card card-hover flex items-center gap-4 group animate-fade-in"
            >
              <div className="p-2.5 rounded-xl bg-[#38bdf8]/10 group-hover:bg-[#38bdf8]/20 transition-colors duration-300">
                <link.icon className="w-5 h-5 text-[#38bdf8]" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium mb-0.5" style={{ color: "var(--text-secondary)" }}>
                  {link.label}
                </p>
                <p className="text-sm font-medium truncate" style={{ color: "var(--text-primary)" }}>
                  {link.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#38bdf8]/20 to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            {t.footer.copyright}
          </p>

          <p className="text-sm flex items-center gap-1" style={{ color: "var(--text-secondary)" }}>
            {t.footer.madeWith}
            <FiHeart className="w-4 h-4 text-[#38bdf8] animate-pulse" />
            <span className="gradient-text font-medium">Luis Felipe</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
