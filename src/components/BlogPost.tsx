import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const markdownFiles = import.meta.glob("../posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function BlogPost() {
  const { slug } = useParams();

  const path = `../posts/${slug}.md`;
  const rawContent = markdownFiles[path];

  if (!rawContent) {
    return (
      <main className="max-w-3xl mx-auto px-6 sm:px-8 py-24 md:py-32">
        <h1 className="section-heading text-4xl sm:text-5xl font-serif">
          Post not found.
        </h1>
      </main>
    );
  }

  // Remove front matter
  const content = rawContent.replace(/^---\n[\s\S]*?\n---\n?/, "");

  return (
    <main
      className="
        max-w-3xl
        mx-auto
        px-6
        sm:px-8
        py-20
        md:py-24
      "
    >
      {/* Back */}
      <Link
        to="/#blog"
        className="
    text-sm
    tracking-[0.14em]
    text-[var(--muted)]
    border-b
    border-[var(--line)]
    pb-1
    hover:text-black
    hover:border-black
    transition
  "
      >
        Back to Blog
      </Link>

      {/* Article */}
      <article className="mt-16">
        <ReactMarkdown
          components={{
            h1: ({ children }) => (
              <h1
                className="
                  section-heading
                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  font-serif
                  mb-12
                "
              >
                {children}
              </h1>
            ),

            h2: ({ children }) => (
              <h2
                className="
                  text-3xl
                  font-serif
                  section-heading
                  mt-16
                  mb-6
                "
              >
                {children}
              </h2>
            ),

            h3: ({ children }) => (
              <h3
                className="
                  text-2xl
                  font-serif
                  section-heading
                  mt-12
                  mb-4
                "
              >
                {children}
              </h3>
            ),

            p: ({ children }) => (
              <p
                className="
                  text-lg
                  text-[var(--ink)]
                  mb-6
                  editorial-copy
                "
              >
                {children}
              </p>
            ),

            ul: ({ children }) => (
              <ul
                className="
                  list-disc
                  pl-6
                  space-y-2
                  mb-8
                  text-[var(--ink)]
                "
              >
                {children}
              </ul>
            ),

            ol: ({ children }) => (
              <ol
                className="
                  list-decimal
                  pl-6
                  space-y-2
                  mb-8
                  text-[var(--ink)]
                "
              >
                {children}
              </ol>
            ),

            blockquote: ({ children }) => (
              <blockquote
                className="
                  border-l
                  border-black
                  pl-6
                  my-10
                  italic
                  text-[var(--muted)]
                "
              >
                {children}
              </blockquote>
            ),

            code: ({ children }) => (
              <code
                className="
                  font-mono
                  text-sm
                  bg-[#EAE5DD]
                  px-2
                  py-1
                "
              >
                {children}
              </code>
            ),

            a: ({ href, children }) => (
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="
                  border-b
                  border-black
                  hover:opacity-50
                  transition
                "
              >
                {children}
              </a>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </article>
    </main>
  );
}

export default BlogPost;
