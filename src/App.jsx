import { useEffect, useState } from "react";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import FocusAreas from "./components/FocusAreas.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
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
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grid-pattern" />
      <Navbar
        language={language}
        navLinks={pageContent.nav}
        toggleLabels={pageContent.languageToggle}
        onLanguageChange={setLanguage}
      />
      <main>
        <Hero content={pageContent.hero} />
        <FocusAreas content={pageContent.focus} />
        <Projects content={pageContent.projects} language={language} />
        <Skills content={pageContent.skills} />
        <About content={pageContent.about} />
        <Contact content={pageContent.contact} />
      </main>
    </div>
  );
}

export default App;
