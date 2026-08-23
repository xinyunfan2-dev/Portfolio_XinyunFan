function Skills() {
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

  const roadmap = [
    ["10-301", "Machine Learning"],
    ["11-485", "Introduction to Deep Learning"],
    ["10-417", "Intermediate Deep Learning"],
    ["10-414", "Deep Learning Systems"],
    ["10-405", "Machine Learning with Large Datasets"],
    ["10-423", "Generative AI"],
    ["10-418", "Machine Learning for Structured Data"],
    ["11-441", "Text & Graph-based Mining"],
    ["10-424", "Bayesian Methods in Machine Learning"],
    ["10-425", "Convex Optimization"],
    ["10-422", "Foundations of Learning"],
  ];

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
        <p className="text-xs tracking-[0.08em] text-[var(--muted)]">
          Currently Exploring
        </p>

        <h3 className="section-heading mt-3 text-3xl font-serif">
          Machine Learning Roadmap
        </h3>

        <div className="relative mt-8 ml-1">
          <div className="absolute left-[5px] top-4 bottom-4 w-px bg-[var(--line)]" />

          {roadmap.map(([code, title]) => (
            <div
              key={code}
              className="relative flex items-center gap-5 sm:gap-7 py-3.5 group"
            >
              <div className="relative z-10 w-[11px] h-[11px] shrink-0 rounded-full border border-[#a9aaa4] bg-[var(--page)] transition duration-300 group-hover:bg-[#a9aaa4]" />

              <span className="w-[72px] sm:w-[100px] shrink-0 text-xs tracking-[0.08em] text-[var(--muted)]">
                {code}
              </span>

              <span className="text-base md:text-lg text-[var(--ink)] transition duration-300 group-hover:translate-x-1">
                {title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
