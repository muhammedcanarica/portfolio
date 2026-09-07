import { useEffect, useState } from "react";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import PortfolioAssistant from "./components/PortfolioAssistant.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import { content } from "./data/content.js";

function App() {
  const [language, setLanguage] = useState("tr");
  const pageContent = content[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = pageContent.meta.title;
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute("content", pageContent.meta.description);
  }, [language, pageContent.meta.description, pageContent.meta.title]);

  return (
    <div className="app">
      <a className="skip-link" href="#main-content">{pageContent.skipLink}</a>
      <Navbar
        language={language}
        navLinks={pageContent.nav}
        toggleLabels={pageContent.languageToggle}
        labels={pageContent.navigation}
        onLanguageChange={setLanguage}
      />
      <main id="main-content" tabIndex={-1}>
        <Hero content={pageContent.hero} />
        <Projects content={pageContent.projects} language={language} />
        <About content={pageContent.about} />
        <Skills content={pageContent.skills} />
      </main>
      <Contact content={pageContent.contact} />
      <PortfolioAssistant language={language} />
    </div>
  );
}

export default App;
