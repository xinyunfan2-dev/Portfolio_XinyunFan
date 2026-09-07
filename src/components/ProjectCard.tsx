type ProjectCardProps = {
  title: string;
  description: string;
  details: string;
  tags: string[];
  number: string;
  types: string;
  link: string;
};

function ProjectCard(props: ProjectCardProps) {
  return (
    <article
      tabIndex={0}
      className="
        project-card
        relative
        overflow-hidden
        border
        border-[var(--line)]
        bg-[var(--surface)]
        rounded-xl
        p-6
        md:p-7
        flex
        flex-col
        justify-between
      "
    >
      <div>
        <p className="eyebrow text-xs sm:text-sm text-[var(--muted)]">
          {props.number} / {props.types}
        </p>

        <h3 className="section-heading mt-5 text-3xl sm:text-4xl font-serif">
          {props.title}
        </h3>

        <p className="editorial-copy mt-4 text-[var(--muted)] text-lg">
          {props.description}
        </p>

        <div className="flex flex-wrap gap-2.5 mt-6">
          {props.tags.map((tag) => (
            <span
              key={tag}
              className="
                rounded-full
                bg-[var(--soft)]
                px-3
                py-1.5
                text-xs
                text-[var(--muted)]
                tracking-[0.01em]
              "
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="project-card__details">
          <p className="editorial-copy text-[var(--muted)]">{props.details}</p>
        </div>
      </div>

      <div className="mt-7 flex items-center justify-end gap-5">
        <a
          href={props.link}
          target="_blank"
          rel="noreferrer"
          className="
            interactive-button
            inline-flex
            text-sm
            tracking-[0.1em]
            border-b
            border-[var(--ink)]
            w-fit
          "
        >
          View Project
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
