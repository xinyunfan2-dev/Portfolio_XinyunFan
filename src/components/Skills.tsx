type RoadmapStage = {
  index: string;
  period: string;
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

const researchRoadmap: RoadmapStage[] = [
  {
    index: "01",
    period: "7–13 Sep 2026",
    title: "Data foundations",
    focus:
      "Python, NumPy, Pandas, timestamps, resampling, rolling windows, missing data, visualisation, Git and Shell.",
    outcome: "WiFi EDA notebook, cleaned RSSI data and an initial set of plots.",
  },
  {
    index: "02",
    period: "14–20 Sep 2026",
    title: "Time-series baselines",
    focus:
      "Chronological splits, leakage, look-back windows, forecast horizons, seasonality, MAE and RMSE; then persistence, moving average and seasonal-naive models.",
    outcome: "A leakage-safe baseline pipeline and the first model comparison table.",
  },
  {
    index: "03",
    period: "21 Sep–4 Oct 2026",
    title: "Deep forecasting and proposal",
    focus:
      "PyTorch training workflows, sliding windows, DLinear, TimesNet and iTransformer, alongside research questions, related work and experimental design.",
    outcome: "Preliminary results, a complete proposal, README and short demo.",
  },
  {
    index: "04",
    period: "Oct 2026–Jan 2027",
    title: "Wireless measurement system",
    focus:
      "RSSI and dBm, latency, jitter, packet loss and throughput; Raspberry Pi, Linux, SSH, NTP, systemd, logging and offline caching.",
    outcome: "A reliable multi-probe collection system with monitoring and recovery.",
  },
  {
    index: "05",
    period: "Jan–Apr 2027",
    title: "Multivariate model experiments",
    focus:
      "Linear models, Random Forest, XGBoost and deep forecasters with shared data splits, external covariates, multi-site signals, ablations and optional spatial modelling.",
    outcome: "A fair multi-site study of accuracy, stability and computational cost.",
  },
  {
    index: "06",
    period: "Apr–Jun 2027",
    title: "Evaluation and communication",
    focus:
      "Rolling-origin evaluation, multiple seeds, failure analysis and peak-time performance, followed by dashboard design and academic writing.",
    outcome: "A reproducible repository, live dashboard, poster and final report.",
  },
];

const productRoadmap: RoadmapStage[] = [
  {
    index: "P0",
    period: "1–2 weeks",
    title: "Hackathon loop",
    focus:
      "Build one complete Hong Kong restaurant and café flow: join a Room, find shared time, suggest an activity, complete it and generate a Moment.",
    outcome: "A focused demo that reuses each shared experience as context for the next plan.",
  },
  {
    index: "P1",
    period: "6–8 weeks",
    title: "Private multi-room MVP",
    focus:
      "Recoverable accounts, invitations, multiple Rooms, editable availability, plan states, saved places and Room-only Moments with photos and feedback.",
    outcome: "A private product that a small group can use repeatedly in real life.",
  },
  {
    index: "P2",
    period: "4–6 weeks",
    title: "Trustworthy agent",
    focus:
      "Structure every source with its URL, extraction time, validity and confidence; combine retrieval, preference ranking and explainable recommendations.",
    outcome: "Recommendations that distinguish verified facts, recent experiences and items to confirm.",
  },
  {
    index: "P3",
    period: "6–8 weeks",
    title: "Apps and Mini Program",
    focus:
      "React Native with Expo for iOS and Android, Taro for WeChat, plus notifications, deep links, maps, calendars, offline caching and privacy controls.",
    outcome: "TestFlight, Google Play testing and a WeChat Mini Program preview.",
  },
  {
    index: "P4",
    period: "After retention",
    title: "Faceless community beta",
    focus:
      "Let people deliberately publish privacy-safe copies of Moments with discovery, saving, reporting, blocking and moderation—but no private messages or open comments yet.",
    outcome: "A useful public discovery layer without exposing private Rooms or schedules.",
  },
  {
    index: "P5",
    period: "Long-term",
    title: "Annual memories",
    focus:
      "Turn accumulated Plans, Moments and feedback into maps, statistics, favourite places, best-value experiences and memories still waiting to happen.",
    outcome: "An emotional recap created naturally from real shared-life history.",
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
    <article className="roadmap-column flex flex-col">
      <header className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-7 lg:min-h-[300px]">
        <p className="text-sm text-[var(--muted)]">{label}</p>
        <h3 className="section-heading mt-4 text-3xl font-serif text-[var(--ink)]">
          {title}
        </h3>
        <p className="editorial-copy mt-4 text-[var(--muted)]">
          {description}
        </p>
      </header>

      <div className="mt-4 grid flex-1 gap-4">
        {stages.map((stage) => (
          <section
            key={stage.index}
            tabIndex={0}
            className="roadmap-card relative overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--surface)] p-5 sm:p-6"
          >
            <div className="flex items-start justify-between gap-5">
              <span className="font-serif text-xl text-[var(--ink)]">
                {stage.index}
              </span>
              <span className="text-right text-xs tracking-[0.04em] text-[var(--muted)]">
                {stage.period}
              </span>
            </div>

            <h4 className="mt-4 text-xl font-serif leading-snug text-[var(--ink)] sm:text-2xl">
              {stage.title}
            </h4>

            <div className="roadmap-card__details">
              <p className="editorial-copy text-sm text-[var(--muted)]">
                {stage.focus}
              </p>

              <p className="mt-4 border-t border-[var(--line)] pt-3 text-sm leading-relaxed text-[var(--ink)]">
                <span className="mr-2 text-[var(--muted)]">Outcome:</span>
                {stage.outcome}
              </p>
            </div>
          </section>
        ))}
      </div>
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
        04 / Skills
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
          Two Roadmaps for 2026/27
        </h3>

        <div className="mt-9 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-6">
          <RoadmapColumn
            label="Research · 2026/27"
            title="Wireless Time-Series Forecasting"
            description="A project-led path from public WiFi data to reliable wireless measurements, multivariate forecasting and a reproducible research study."
            stages={researchRoadmap}
          />

          <RoadmapColumn
            label="Software product"
            title="AI Shared-Life Planner"
            description="Build the private shared-life space first. Add a public, faceless experience community only after the private planning loop shows real retention."
            stages={productRoadmap}
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;
