const steps = [
  {
    title: "Start small",
    text: "I reduce the idea into one clear mechanic, screen, or problem.",
  },
  {
    title: "Make it work",
    text: "I build the smallest version that can be played, clicked, tested, or shown.",
  },
  {
    title: "Separate the systems",
    text: "I keep input, state, UI, data, and feedback logic separated so the project can grow without collapsing.",
  },
  {
    title: "Polish and publish",
    text: "I clean the rough edges, write the README, and make the project shareable.",
  },
];

function Process() {
  return (
    <section className="section" id="process">
      <div className="section-heading">
        <p className="eyebrow">Process</p>
        <h2>How I Build</h2>
      </div>
      <div className="process-list">
        {steps.map((step, index) => (
          <article className="glass-card process-step" key={step.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Process;
