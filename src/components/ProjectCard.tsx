type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  number: string;
  types: string;
  link: string;
};

function ProjectCard(props: ProjectCardProps) {
  return (
    <div
      className="
        border
        border-[var(--line)]
        bg-[var(--surface)]
        rounded-xl
        p-7
        md:p-8
        min-h-[350px]
        flex
        flex-col
        justify-between
        hover:border-[#c8c9c3]
        transition
        duration-300
      "
    >
      <div>
        <p
          className="
            eyebrow
            text-xs
            sm:text-sm
            text-[var(--muted)]
          "
        >
          {props.number} / {props.types}
        </p>

        <h3
          className="
            section-heading
            mt-6
            text-3xl
            sm:text-4xl
            font-serif
          "
        >
          {props.title}
        </h3>

        <p
          className="
            editorial-copy
            mt-5
            text-[var(--muted)]
            text-lg
          "
        >
          {props.description}
        </p>

        <div
          className="
            flex
            flex-wrap
            gap-3
            mt-8
          "
        >
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
      </div>

      <a
        href={props.link}
        target="_blank"
        rel="noreferrer"
        className="
          mt-10
          text-sm
          tracking-[0.1em]
          border-b
          border-[var(--ink)]
          w-fit
          hover:opacity-50
          transition
        "
      >
        View Project
      </a>
    </div>
  );
}

export default ProjectCard;
