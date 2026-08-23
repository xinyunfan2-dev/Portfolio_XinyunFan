import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section
      id="projects"
      className="
      max-w-6xl
      mx-auto
      px-6
      sm:px-8
      py-20
      md:py-28
      border-t
      border-[var(--line)]
      "
    >
      <p className="eyebrow text-xs sm:text-sm text-[var(--muted)]">
        02 / Selected Projects
      </p>

      <h2 className="mt-4 text-4xl sm:text-5xl font-serif section-heading">
        Featured Work
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12 md:mt-14">
        <ProjectCard
          title="BridgeCare"
          description="AI Agent for Social Welfare Applications"
          tags={["AI Agent", "React", "TypeScript", "LLM"]}
          number="01"
          types="AI Project"
          link="https://github.com/xinyunfan2-dev/BridgeCare-Team18-Gr"
        />

        <ProjectCard
          title="VeriHK"
          description="AI-powered Hong Kong Data Verification Platform"
          tags={["AI", "Computer Vision", "TypeScript", "Web App"]}
          number="02"
          types="AI Project"
          link="https://github.com/xinyunfan2-dev/VeriHK-HKICT"
        />

        <ProjectCard
          title="Titanic Survival Prediction"
          description="
  Machine learning classification project
  exploring passenger survival prediction
  using Kaggle dataset.
  "
          tags={["Python", "Pandas", "Scikit-learn", "Machine Learning"]}
          number="03"
          types="Machine Learning"
          link="https://github.com/xinyunfan2-dev/Titanic-Survival-Prediction"
        />

        <ProjectCard
          title="House Prices Prediction"
          description="Machine learning regression project exploring house price prediction through data analysis, feature engineering, and model optimization."
          tags={["Python", "Pandas", "Scikit-learn", "XGBoost"]}
          number="04"
          types="Machine Learning"
          link="https://github.com/xinyunfan2-dev/house-price-prediction"
        />
      </div>
    </section>
  );
}

export default Projects;
