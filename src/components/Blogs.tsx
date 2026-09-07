import { Link } from "react-router-dom";

type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  description: string;
};

function Blog() {
  // Automatically find all Markdown files in src/posts
  const markdownFiles = import.meta.glob("../posts/*.md", {
    query: "?raw",
    import: "default",
    eager: true,
  }) as Record<string, string>;

  // Convert Markdown files into post information
  const posts: Post[] = Object.entries(markdownFiles).map(([path, content]) => {
    // Get filename as slug
    // ../posts/hello.md -> hello
    const slug = path.split("/").pop()?.replace(".md", "") ?? "";

    // Simple front matter parser
    const frontMatter = content.match(/^---\n([\s\S]*?)\n---/);

    const metadata: Record<string, string> = {};

    if (frontMatter) {
      frontMatter[1].split("\n").forEach((line) => {
        const [key, ...valueParts] = line.split(":");

        if (key && valueParts.length > 0) {
          metadata[key.trim()] = valueParts
            .join(":")
            .trim()
            .replace(/^["']|["']$/g, "");
        }
      });
    }

    return {
      slug,
      title: metadata.title || slug,
      date: metadata.date || "",
      category: metadata.category || "Notes",
      description: metadata.description || "",
    };
  });

  // Newest posts first
  posts.sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section
      id="blog"
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
        03 / Blog
      </p>

      <h2 className="section-heading mt-4 text-4xl sm:text-5xl font-serif">
        Learning Notes
      </h2>

      <div className="mt-8 md:mt-10 rounded-xl border border-[var(--line)] overflow-hidden">
        {posts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="blog-card-motion block px-5 sm:px-6 py-6 md:py-7 border-b border-[var(--line)] last:border-b-0 hover:bg-[var(--surface)]"
          >
            <article>
              <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_auto] gap-4 sm:gap-10">
                <div>
                  <p className="text-xs tracking-[0.08em] text-[var(--muted)]">
                    {post.category}
                  </p>

                  <h3 className="mt-2 text-2xl md:text-3xl font-serif section-heading">
                    {post.title}
                  </h3>

                  <p className="mt-2 text-[var(--muted)] max-w-2xl editorial-copy">
                    {post.description}
                  </p>
                </div>

                <p className="text-sm text-[var(--muted)] whitespace-nowrap">
                  {post.date}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Blog;
