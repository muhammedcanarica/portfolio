import { useEffect, useRef, useState } from "react";
import { assistantContent } from "../data/assistantContent.js";
import { contactLinks } from "../data/contactLinks.js";
import { content } from "../data/content.js";
import { projects } from "../data/projects.js";

const assistantAssetPath = `${import.meta.env.BASE_URL}assets/chatbot/`;

const characterImages = {
  idle: `${assistantAssetPath}idle.png`,
  greeting: `${assistantAssetPath}greeting.png`,
  thinking: `${assistantAssetPath}thinking.png`,
  talking: `${assistantAssetPath}talking.png`,
  happy: `${assistantAssetPath}happy.png`,
  bye: `${assistantAssetPath}bye.png`,
};

function PortfolioAssistant({ language }) {
  const copy = assistantContent[language];
  const siteContent = content[language];
  const timers = useRef([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [characterState, setCharacterState] = useState("idle");
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);

  const schedule = (callback, delay) => {
    const timer = window.setTimeout(() => {
      timers.current = timers.current.filter((currentTimer) => currentTimer !== timer);
      callback();
    }, delay);
    timers.current.push(timer);
  };

  const clearTimers = () => {
    timers.current.forEach((timer) => window.clearTimeout(timer));
    timers.current = [];
  };

  useEffect(() => clearTimers, []);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("portfolio-assistant-tooltip")) {
        return undefined;
      }

      const timer = window.setTimeout(() => {
        setShowTooltip(true);
        sessionStorage.setItem("portfolio-assistant-tooltip", "shown");
      }, 3200);
      const hideTimer = window.setTimeout(() => setShowTooltip(false), 6800);

      return () => {
        window.clearTimeout(timer);
        window.clearTimeout(hideTimer);
      };
    } catch {
      return undefined;
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isOpen) {
        closeAssistant();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const openAssistant = () => {
    clearTimers();
    setShowTooltip(false);
    setIsClosing(false);
    setIsOpen(true);
    setSelectedQuestion(null);
    setCharacterState("greeting");
  };

  const closeAssistant = () => {
    if (isClosing) {
      return;
    }

    clearTimers();
    setIsClosing(true);
    setCharacterState("bye");
    schedule(() => {
      setIsOpen(false);
      setIsClosing(false);
      setSelectedQuestion(null);
      setCharacterState("idle");
    }, 360);
  };

  const selectQuestion = (questionId) => {
    clearTimers();
    setSelectedQuestion(questionId);
    setCharacterState("thinking");
    schedule(() => setCharacterState("talking"), 650);
  };

  const returnToQuestions = () => {
    clearTimers();
    setSelectedQuestion(null);
    setCharacterState("greeting");
  };

  const handleSectionAction = (sectionId) => {
    setCharacterState("happy");
    document.querySelector(sectionId)?.scrollIntoView({ behavior: "smooth" });
    schedule(() => setCharacterState("talking"), 650);
  };

  const handleLinkAction = () => {
    setCharacterState("happy");
    schedule(() => setCharacterState("talking"), 650);
  };

  const isThinking = selectedQuestion && characterState === "thinking";
  const responseIsReady = selectedQuestion && !isThinking;
  const orderedProjects = [...projects[language]].sort(
    (firstProject, secondProject) =>
      (firstProject.priority ?? 99) - (secondProject.priority ?? 99),
  );

  const renderResponse = () => {
    if (!responseIsReady) {
      return null;
    }

    if (selectedQuestion === "about") {
      return (
        <>
          <p>{siteContent.about.paragraphs[0]}</p>
          <button className="assistant-action" type="button" onClick={() => handleSectionAction("#about")}>
            {copy.actions.about}
          </button>
        </>
      );
    }

    if (selectedQuestion === "projects") {
      return (
        <>
          <p>{copy.answers.projects}</p>
          <div className="assistant-project-list">
            {orderedProjects.slice(0, 3).map((project) => (
              <button key={project.title} type="button" onClick={() => handleSectionAction("#projects")}>
                {project.title}
              </button>
            ))}
          </div>
          <button className="assistant-action" type="button" onClick={() => handleSectionAction("#projects")}>
            {copy.actions.projects}
          </button>
        </>
      );
    }

    if (selectedQuestion === "technology") {
      return (
        <>
          <p>{copy.answers.technology}</p>
          <ul className="assistant-area-list">
            {siteContent.focus.areas.map((area) => (
              <li key={area.title}>{area.title}</li>
            ))}
          </ul>
          <button className="assistant-action" type="button" onClick={() => handleSectionAction("#skills")}>
            {copy.actions.skills}
          </button>
        </>
      );
    }

    if (selectedQuestion === "cv") {
      return (
        <>
          <p>{copy.answers.cv}</p>
          <a className="assistant-action" href="/assets/muhammed-can-arica-cv.pdf" target="_blank" rel="noreferrer" onClick={handleLinkAction}>
            {copy.actions.cv}
          </a>
        </>
      );
    }

    if (selectedQuestion === "contact") {
      return (
        <>
          <p>{copy.answers.contact}</p>
          <div className="assistant-contact-actions">
            {contactLinks.slice(0, 2).map((link) => (
              <a key={link.key} className="assistant-action" href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined} onClick={handleLinkAction}>
                {copy.actions[link.key]}
              </a>
            ))}
            <button className="assistant-action" type="button" onClick={() => handleSectionAction("#contact")}>
              {copy.actions.contact}
            </button>
          </div>
        </>
      );
    }

    return <p>{copy.answers.builds}</p>;
  };

  return (
    <aside className="portfolio-assistant" aria-label={copy.heading}>
      {showTooltip && !isOpen && <span className="assistant-tooltip">{copy.tooltip}</span>}
      {isOpen && (
        <section className={`assistant-panel${isClosing ? " assistant-panel-closing" : ""}`} aria-live="polite">
          <header className="assistant-header">
            <span>{copy.heading}</span>
            <button type="button" onClick={closeAssistant} aria-label={copy.closeLabel}>
              <span aria-hidden="true">×</span>
            </button>
          </header>
          <div className="assistant-message">
            {!selectedQuestion && <p>{copy.greeting}</p>}
            {isThinking && (
              <p className="assistant-thinking">
                <span>{copy.thinkingLabel}</span>
                <i aria-hidden="true" /><i aria-hidden="true" /><i aria-hidden="true" />
              </p>
            )}
            {renderResponse()}
          </div>
          {!selectedQuestion ? (
            <div className="assistant-options">
              {copy.questions.map((question) => (
                <button key={question.id} className="assistant-option" type="button" onClick={() => selectQuestion(question.id)}>
                  {question.label}
                </button>
              ))}
            </div>
          ) : responseIsReady ? (
            <div className="assistant-follow-up">
              <span>{copy.prompt}</span>
              <button type="button" onClick={returnToQuestions}>{copy.backToQuestions}</button>
            </div>
          ) : null}
        </section>
      )}
      <button className={`assistant-mascot assistant-mascot-${characterState}`} type="button" onClick={isOpen ? closeAssistant : openAssistant} aria-label={isOpen ? copy.closeLabel : copy.ariaLabel} aria-expanded={isOpen}>
        <img src={characterImages[characterState] ?? characterImages.idle} alt="" aria-hidden="true" />
      </button>
    </aside>
  );
}

export default PortfolioAssistant;
