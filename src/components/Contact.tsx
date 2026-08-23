import { FiMail, FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";
import { SiKaggle, SiLeetcode } from "react-icons/si";

const contactLinks = [
  {
    label: "Email",
    href: "mailto:xinyun.f@outlook.com",
    icon: FiMail,
  },
  {
    label: "GitHub",
    href: "https://github.com/xinyunfan2-dev",
    icon: FiGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/xinyun-fan-39a0033a8/",
    icon: FiLinkedin,
  },
  {
    label: "Kaggle",
    href: "https://www.kaggle.com/shuminghao",
    icon: SiKaggle,
  },
  {
    label: "LeetCode",
    href: "https://leetcode.cn/u/adoring-montalcinixex/",
    icon: SiLeetcode,
  },
];

function Contact() {
  return (
    <aside
      id="contact"
      aria-label="Contact links"
      className="border-t border-[var(--line)] pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8"
    >
      <p className="text-xs tracking-[0.08em] text-[var(--muted)]">Contact</p>

      <div className="mt-6 flex flex-col items-start gap-5">
        {contactLinks.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            className="group inline-flex items-center gap-3 py-0.5 text-sm text-[var(--muted)] transition hover:text-[var(--ink)]"
          >
            <Icon size={17} aria-hidden="true" />
            <span className="border-b border-transparent pb-0.5 transition group-hover:border-[var(--line)]">
              {label}
            </span>
          </a>
        ))}

        <a
          href="/resume.pdf"
          download
          className="mt-3 inline-flex items-center gap-3 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-xs tracking-[0.06em] transition hover:border-[#c8c9c3]"
        >
          <FiDownload size={15} aria-hidden="true" />
          Download Résumé
        </a>
      </div>
    </aside>
  );
}

export default Contact;
