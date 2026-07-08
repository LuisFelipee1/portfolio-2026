import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Header } from "./components/Header/Header";
import { HeroSection } from "./components/Sections/HeroSection";
import { ProjectsSection } from "./components/Sections/ProjectsSection";
import { CompaniesSection } from "./components/Sections/CompaniesSection";
import { EducationSection } from "./components/Sections/EducationSection";
import { AboutSection } from "./components/Sections/AboutSection";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen flex flex-col">
          <Header />

          <main className="flex-1">
            <HeroSection />
            <ProjectsSection />
            <CompaniesSection />
            <EducationSection />
            <AboutSection />
          </main>

          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
