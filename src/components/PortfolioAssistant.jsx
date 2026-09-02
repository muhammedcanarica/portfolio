import { useEffect, useLayoutEffect, useRef, useState } from "react";
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
  dragging: `${assistantAssetPath}dragging.png`,
};

const DRAG_THRESHOLD = 0;
const SAFE_MARGIN = 12;

const clamp = (value, minimum, maximum) =>
  Math.max(minimum, Math.min(value, maximum));

function PortfolioAssistant({ language }) {
  const copy = assistantContent[language];
  const siteContent = content[language];
  const timers = useRef([]);
  const assistantRef = useRef(null);
  const mascotRef = useRef(null);
  const panelRef = useRef(null);
  const suppressClick = useRef(false);
  const drag = useRef({
    activePointerId: null,
    x: 0,
    y: 0,
    hasMoved: false,
    lastPointerX: 0,
    startPointerX: 0,
    startPointerY: 0,
    startX: 0,
    startY: 0,
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [characterState, setCharacterState] = useState("idle");
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const getMascotSize = () =>
    mascotRef.current?.getBoundingClientRect().width ??
    (window.innerWidth <= 720 ? 82 : 108);

  const clampPosition = (x, y) => {
    const mascotSize = getMascotSize();
    return {
      x: clamp(x, SAFE_MARGIN, Math.max(SAFE_MARGIN, window.innerWidth - mascotSize - SAFE_MARGIN)),
      y: clamp(y, SAFE_MARGIN, Math.max(SAFE_MARGIN, window.innerHeight - mascotSize - SAFE_MARGIN)),
    };
  };

  const updatePanelPosition = (x, y) => {
    const assistant = assistantRef.current;
    const panel = panelRef.current;
    if (!assistant || !panel) {
      return;
    }

    const mascotSize = getMascotSize();
    const panelWidth = panel.offsetWidth;
    const panelHeight = panel.offsetHeight;
    const preferredPanelX = x + mascotSize / 2 > window.innerWidth / 2
      ? x + mascotSize - panelWidth
      : x;
    const panelX = clamp(
      preferredPanelX,
      SAFE_MARGIN,
      Math.max(SAFE_MARGIN, window.innerWidth - panelWidth - SAFE_MARGIN),
    );
    const preferredPanelY = y - panelHeight - 10;
    const panelY = clamp(
      preferredPanelY,
      SAFE_MARGIN,
      Math.max(SAFE_MARGIN, window.innerHeight - panelHeight - SAFE_MARGIN),
    );

    assistant.style.setProperty("--assistant-panel-offset-x", `${panelX - x}px`);
    assistant.style.setProperty("--assistant-panel-offset-y", `${panelY - y}px`);
  };

  const applyVisualState = ({ x, y, rotation = 0, scale = 1 }) => {
    const assistant = assistantRef.current;
    if (!assistant) {
      return;
    }

    assistant.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)`;
    assistant.style.setProperty("--assistant-drag-rotation", `${rotation.toFixed(2)}deg`);
    assistant.style.setProperty("--assistant-drag-scale", scale.toFixed(3));
    updatePanelPosition(x, y);
  };

  const savePosition = () => {
    try {
      const { x, y } = drag.current;
      sessionStorage.setItem("portfolio-assistant-position", JSON.stringify({ x, y }));
    } catch {
      // Position persistence is optional when browser storage is unavailable.
    }
  };

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

  useEffect(() => {
    let savedPosition;
    try {
      savedPosition = JSON.parse(sessionStorage.getItem("portfolio-assistant-position"));
    } catch {
      savedPosition = null;
    }

    const mascotSize = getMascotSize();
    const initialPosition = clampPosition(
      Number.isFinite(savedPosition?.x)
        ? savedPosition.x
        : window.innerWidth - mascotSize - 24,
      Number.isFinite(savedPosition?.y)
        ? savedPosition.y
        : window.innerHeight - mascotSize - 20,
    );
    drag.current.x = initialPosition.x;
    drag.current.y = initialPosition.y;
    applyVisualState(drag.current);

    const handleViewportChange = () => {
      const position = clampPosition(drag.current.x, drag.current.y);
      drag.current.x = position.x;
      drag.current.y = position.y;
      applyVisualState(drag.current);
    };

    window.addEventListener("resize", handleViewportChange);
    window.addEventListener("orientationchange", handleViewportChange);

    return () => {
      clearTimers();
      window.removeEventListener("resize", handleViewportChange);
      window.removeEventListener("orientationchange", handleViewportChange);
    };
  }, []);

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

  useLayoutEffect(() => {
    applyVisualState(drag.current);
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

  const handlePointerDown = (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    const state = drag.current;
    state.activePointerId = event.pointerId;
    state.hasMoved = false;
    state.startPointerX = event.clientX;
    state.startPointerY = event.clientY;
    state.lastPointerX = event.clientX;
    state.startX = state.x;
    state.startY = state.y;
    setIsDragging(true);
  };

  useEffect(() => {
    const handlePointerMove = (event) => {
      const state = drag.current;
      if (state.activePointerId !== event.pointerId) {
        return;
      }

      const offsetX = event.clientX - state.startPointerX;
      const offsetY = event.clientY - state.startPointerY;
      if (!state.hasMoved && Math.hypot(offsetX, offsetY) <= DRAG_THRESHOLD) {
        return;
      }

      if (!state.hasMoved) {
        state.hasMoved = true;
        setIsDragging(true);
      }

      event.preventDefault();
      const position = clampPosition(state.startX + offsetX, state.startY + offsetY);
      const horizontalVelocity = event.clientX - state.lastPointerX;
      state.x = position.x;
      state.y = position.y;
      state.lastPointerX = event.clientX;
      applyVisualState({
        ...state,
        rotation: clamp(horizontalVelocity * 0.45, -5, 5),
        scale: 0.97,
      });
    };

    const finishPointerInteraction = (event) => {
      const state = drag.current;
      if (state.activePointerId !== event.pointerId) {
        return;
      }

      state.activePointerId = null;
      setIsDragging(false);
      if (state.hasMoved) {
        suppressClick.current = true;
        savePosition();
        window.requestAnimationFrame(() => applyVisualState(drag.current));
        window.setTimeout(() => {
          suppressClick.current = false;
        }, 0);
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: false });
    window.addEventListener("pointerup", finishPointerInteraction);
    window.addEventListener("pointercancel", finishPointerInteraction);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", finishPointerInteraction);
      window.removeEventListener("pointercancel", finishPointerInteraction);
    };
  }, []);

  const handleMascotClick = () => {
    if (suppressClick.current) {
      suppressClick.current = false;
      return;
    }

    if (isOpen) {
      closeAssistant();
    } else {
      openAssistant();
    }
  };

  const isThinking = selectedQuestion && characterState === "thinking";
  const responseIsReady = selectedQuestion && !isThinking;
  const displayedCharacterState = isDragging ? "dragging" : characterState;
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
    <aside
      ref={assistantRef}
      className={`portfolio-assistant${isDragging ? " assistant-dragging" : ""}`}
      aria-label={copy.heading}
    >
      {showTooltip && !isOpen && <span className="assistant-tooltip">{copy.tooltip}</span>}
      {isOpen && (
        <section
          ref={panelRef}
          className={`assistant-panel${isClosing ? " assistant-panel-closing" : ""}`}
          aria-live="polite"
        >
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
      <button
        ref={mascotRef}
        className={`assistant-mascot assistant-mascot-${displayedCharacterState}`}
        type="button"
        onClick={handleMascotClick}
        onPointerDown={handlePointerDown}
        aria-label={isOpen ? copy.closeLabel : copy.ariaLabel}
        aria-expanded={isOpen}
      >
        <span className="assistant-mascot-body">
          <img src={characterImages[displayedCharacterState] ?? characterImages.idle} alt="" aria-hidden="true" />
        </span>
      </button>
    </aside>
  );
}

export default PortfolioAssistant;
