function Experience() {
  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto px-6 sm:px-8 py-20 md:py-28 border-t border-[var(--line)]"
    >
      <p className="eyebrow text-xs sm:text-sm text-[var(--muted)]">
        02 / Experience
      </p>

      <h2 className="section-heading mt-4 text-4xl font-serif sm:text-5xl">
        Professional Experience
      </h2>

      <article className="mt-12 grid grid-cols-1 gap-6 border-y border-[var(--line)] py-8 md:mt-14 md:grid-cols-[170px_minmax(0,1fr)] md:gap-8 md:py-10">
        <div>
          <p className="text-sm text-[var(--muted)]">Internship</p>
          <p className="mt-2 font-serif text-xl text-[var(--ink)]">
            Writetalent
          </p>
        </div>

        <div>
          <h3 className="section-heading text-2xl font-serif text-[var(--ink)] sm:text-3xl">
            Website Full-Stack Developer Intern
          </h3>
          <p className="editorial-copy mt-4 max-w-2xl text-[var(--muted)]">
            Responsible for full-stack website development across the frontend
            and backend.
          </p>
        </div>
      </article>
    </section>
  );
}

export default Experience;
