type RoadmapStage = {
  index: string;
  title: string;
  focus: string;
  outcome: string;
};

type RoadmapColumnProps = {
  label: string;
  title: string;
  description: string;
  stages: RoadmapStage[];
};

const financialRoadmap: RoadmapStage[] = [
  {
    index: "01",
    title: "Research framing",
    focus:
      "Define financial distress, choose a prediction horizon and establish a chronological evaluation protocol before selecting models.",
    outcome:
      "A precise research question, distress label, prediction horizon and leakage-safe experiment plan.",
  },
  {
    index: "02",
    title: "Data and financial signals",
    focus:
      "Prepare company-level financial statements, ratios, trends, missing values and time-dependent signals in a reproducible pipeline.",
    outcome:
      "A documented modelling dataset with clear feature definitions and time-aware splits.",
  },
  {
    index: "03",
    title: "Baselines and class imbalance",
    focus:
      "Build interpretable logistic regression and tree-based baselines while testing class weighting, resampling and decision thresholds.",
    outcome:
      "A trustworthy baseline table that reflects the rarity and cost of missed distress cases.",
  },
  {
    index: "04",
    title: "Forecasting models",
    focus:
      "Compare XGBoost and temporal models under identical chronological splits, look-back windows and forecasting horizons.",
    outcome:
      "A fair comparison of statistical, machine-learning and time-aware forecasting approaches.",
  },
  {
    index: "05",
    title: "Evaluation and explainability",
    focus:
      "Evaluate recall, precision-recall AUC, calibration and early-warning lead time; examine important financial signals and model errors.",
    outcome:
      "An explainable evaluation showing when the model warns early, where it fails and why.",
  },
  {
    index: "06",
    title: "Research output",
    focus:
      "Run ablations and robustness checks, document limitations and package the work for clear academic communication.",
    outcome:
      "A reproducible repository, research report, presentation and concise visual summary.",
  },
];

const sayloRoadmap: RoadmapStage[] = [
  {
    index: "P0",
    title: "Product foundation",
    focus:
      "Establish a coherent iOS product foundation across the main app, keyboard extension, onboarding and visual identity.",
    outcome:
      "A coherent Saylo identity across the main app, keyboard, onboarding and product language.",
  },
  {
    index: "P1",
    title: "Voice-to-text foundation",
    focus:
      "Strengthen microphone capture in the host app, streaming speech recognition and the shared job flow between the app and keyboard extension.",
    outcome:
      "A dependable voice-to-text flow that starts from the keyboard and returns usable text to any input field.",
  },
  {
    index: "P2",
    title: "Style-aware rewriting",
    focus:
      "Turn raw speech into natural, work, email and social styles, with structure controls for paragraphs, points and focus-first writing.",
    outcome:
      "Multilingual speech becomes clean, context-appropriate writing without leaving the current app.",
  },
  {
    index: "P3",
    title: "Keyboard and app handoff",
    focus:
      "Improve app-to-keyboard transitions, shared state, failure recovery and background readiness across supported iOS versions.",
    outcome:
      "A resilient experience that recovers clearly from permissions, interruptions and incomplete voice jobs.",
  },
  {
    index: "P4",
    title: "Languages, presets and history",
    focus:
      "Connect language preferences, custom presets and real rewrite history to the same settings shared by the app and keyboard.",
    outcome:
      "Saylo adapts to how each person speaks and writes while keeping their workflow consistent.",
  },
  {
    index: "P5",
    title: "Product readiness",
    focus:
      "Finish device testing, privacy explanations, onboarding, icons, subscription boundaries and App Store preparation.",
    outcome:
      "A polished TestFlight beta ready for real users and structured feedback before launch.",
  },
];

const skillGroups = [
  {
    title: "Programming",
    skills: ["Python", "C++", "JavaScript", "TypeScript"],
  },
  {
    title: "Data & ML",
    skills: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "XGBoost",
      "EDA",
      "Feature Engineering",
      "Model Evaluation",
    ],
  },
  {
    title: "AI & Development",
    skills: [
      "LLM Applications",
      "AI Agents",
      "React",
      "Tailwind CSS",
      "Git",
      "GitHub",
      "Vercel",
    ],
  },
];

function RoadmapColumn({
  label,
  title,
  description,
  stages,
}: RoadmapColumnProps) {
  return (
    <article className="roadmap-column">
      <header className="border-b border-[var(--line)] pb-7 lg:min-h-[220px]">
        <p className="text-sm text-[var(--muted)]">{label}</p>
        <h3 className="section-heading mt-4 text-3xl font-serif text-[var(--ink)]">
          {title}
        </h3>
        <p className="editorial-copy mt-4 text-[var(--muted)]">
          {description}
        </p>
      </header>

      <ol className="roadmap-line mt-8">
        {stages.map((stage) => (
          <li
            key={stage.index}
            className="roadmap-line__item"
          >
            <span className="roadmap-line__dot" aria-hidden="true" />

            <p className="text-xs tracking-[0.04em] text-[var(--muted)]">
              {stage.index}
            </p>

            <h4 className="mt-2 text-xl font-serif leading-snug text-[var(--ink)] sm:text-2xl">
              {stage.title}
            </h4>

            <p className="editorial-copy mt-2 text-sm text-[var(--muted)]">
              {stage.outcome}
            </p>
          </li>
        ))}
      </ol>
    </article>
  );
}

function Skills() {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-6 sm:px-8 py-20 md:py-28 border-t border-[var(--line)]"
    >
      <p className="eyebrow text-xs sm:text-sm text-[var(--muted)]">
        05 / Skills
      </p>

      <h2 className="section-heading mt-4 text-4xl sm:text-5xl font-serif">
        What I Work With
      </h2>

      <div className="mt-12 md:mt-14 border-t border-[var(--line)]">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="grid grid-cols-1 md:grid-cols-[170px_1fr] gap-5 md:gap-8 py-7 md:py-8 border-b border-[var(--line)]"
          >
            <p className="text-xs tracking-[0.08em] text-[var(--muted)] pt-1">
              {group.title}
            </p>

            <div className="flex flex-wrap gap-x-7 md:gap-x-9 gap-y-3">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-lg sm:text-xl font-normal text-[var(--ink)] leading-snug"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 md:mt-24">
        <p className="text-sm text-[var(--muted)]">Currently building</p>

        <h3 className="section-heading mt-3 max-w-3xl text-3xl font-serif sm:text-4xl">
          Two Roadmaps
        </h3>

        <div className="mt-10 grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-start lg:gap-16">
          <RoadmapColumn
            label="Research roadmap"
            title="Financial Distress Forecasting"
            description="A research path from well-defined distress labels and financial signals to leakage-safe forecasting, explainable evaluation and a reproducible study."
            stages={financialRoadmap}
          />

          <RoadmapColumn
            label="Product roadmap"
            title="Saylo"
            description="Build Saylo as an iOS AI voice keyboard that turns speech into structured, style-aware text across apps."
            stages={sayloRoadmap}
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;
