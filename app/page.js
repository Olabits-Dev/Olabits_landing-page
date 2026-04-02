import Link from "next/link";
import { blogPosts, profile, projectShowcase, skills } from "../lib/site-data";
import styles from "./page.module.css";

const featuredProjects = Object.entries(projectShowcase)
  .filter(([, project]) => project.featured)
  .slice(0, 3)
  .map(([slug, project]) => ({
    slug,
    ...project,
  }));

const latestPosts = [...blogPosts]
  .sort((first, second) => new Date(second.date) - new Date(first.date))
  .slice(0, 3);

const spotlightSkills = skills.filter((skill) =>
  [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "REST APIs",
    "Git & GitHub",
  ].includes(skill.name)
);

const toolStack = Array.from(
  new Set([
    ...skills.map((skill) => skill.name),
    ...featuredProjects.flatMap((project) => project.stack),
  ])
).slice(0, 14);

const capabilityHighlights = [
  {
    title: "Frontend Engineering",
    summary:
      "Building responsive interfaces with strong visual hierarchy, clean structure, and maintainable component logic.",
    tools: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
  },
  {
    title: "Backend Foundations",
    summary:
      "Adding server-side features, API integration, and product logic that make applications more useful and complete.",
    tools: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Shipping Workflow",
    summary:
      "Turning ideas into portfolio-ready builds through Git-based iteration, reusable UI, and clear technical communication.",
    tools: ["Git & GitHub", "Responsive Design", "Technical Writing"],
  },
];

const developerSnapshot = [
  "Responsive interfaces built to stay clean across mobile and desktop.",
  "API-backed features that add useful product logic and real functionality.",
  "Projects and technical writing that make engineering growth visible.",
];

function formatCount(count) {
  return count.toString().padStart(2, "0");
}

export default function HomePage() {
  const stats = [
    { value: formatCount(skills.length), label: "Core skills" },
    { value: formatCount(featuredProjects.length), label: "Featured projects" },
    { value: formatCount(blogPosts.length), label: "Published posts" },
  ];

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Software Developer Portfolio and Blog</p>
          <p className={styles.identity}>{profile.name}</p>
          <h1>
            Building polished web products, practical developer tools, and a stronger engineering
            portfolio.
          </h1>
          <p className={styles.intro}>{profile.intro}</p>

          <div className={styles.ctaRow}>
            <Link href="/portfolio" className={styles.button}>
              View Portfolio
            </Link>
            <Link href="/blog" className={styles.ghostButton}>
              Read Blog
            </Link>
            <Link href="/contact" className={styles.ghostButton}>
              Contact Me
            </Link>
          </div>

          <div className={styles.linkRow}>
            <Link href={profile.githubUrl} target="_blank" rel="noreferrer" className={styles.inlineLink}>
              GitHub
            </Link>
            <Link
              href={profile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className={styles.inlineLink}
            >
              LinkedIn
            </Link>
            <Link href="/skills" className={styles.inlineLink}>
              Skills
            </Link>
          </div>
        </div>

        <aside className={styles.heroPanel}>
          <div className={styles.panelTop}>
            <p className={styles.panelLabel}>Developer Snapshot</p>
            <h2>{profile.role} focused on frontend quality, backend growth, and shipping useful digital products.</h2>
          </div>

          <div className={styles.metrics}>
            {stats.map((stat) => (
              <article key={stat.label} className={styles.metricCard}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>

          <ul className={styles.focusList}>
            {developerSnapshot.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </section>

      <section className={styles.overviewSection}>
        <article className={styles.summaryCard}>
          <p className={styles.sectionEyebrow}>Professional Direction</p>
          <h2>Practical software development with a strong frontend base and growing full-stack depth.</h2>
          <p className={styles.sectionText}>{profile.background}</p>
          <p className={styles.sectionText}>{profile.goals}</p>

          <div className={styles.interestList}>
            {profile.interests.map((interest) => (
              <span key={interest} className={styles.interest}>
                {interest}
              </span>
            ))}
          </div>
        </article>

        <article className={styles.toolCard}>
          <p className={styles.sectionEyebrow}>Tool Stack</p>
          <h2>Technologies and workflows I rely on while building modern software products.</h2>

          <div className={styles.toolGrid}>
            {toolStack.map((tool) => (
              <span key={tool} className={styles.toolTag}>
                {tool}
              </span>
            ))}
          </div>
        </article>
      </section>

      <section className={styles.capabilitySection}>
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.sectionEyebrow}>What I Do</p>
            <h2>Necessary software development strengths, presented with more focus and clarity.</h2>
            <p className={styles.sectionText}>
              From interface quality to backend features and workflow discipline, these are the
              capabilities I keep sharpening through projects and writing.
            </p>
          </div>

          <Link href="/about" className={styles.sectionLink}>
            More About Me
          </Link>
        </div>

        <div className={styles.capabilityGrid}>
          {capabilityHighlights.map((capability) => (
            <article key={capability.title} className={styles.capabilityCard}>
              <h3>{capability.title}</h3>
              <p>{capability.summary}</p>

              <div className={styles.capabilityTools}>
                {capability.tools.map((tool) => (
                  <span key={tool} className={styles.capabilityTool}>
                    {tool}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.skillsSection}>
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.sectionEyebrow}>Skills and Tools</p>
            <h2>Core technologies I use to build professional software and portfolio-ready work.</h2>
            <p className={styles.sectionText}>
              These are the tools and disciplines I rely on most while developing applications,
              improving product quality, and shipping work consistently.
            </p>
          </div>

          <Link href="/skills" className={styles.sectionLink}>
            See All Skills
          </Link>
        </div>

        <div className={styles.skillsGrid}>
          {spotlightSkills.map((skill) => (
            <article key={skill.name} className={styles.skillCard}>
              <div className={styles.skillTop}>
                <h3>{skill.name}</h3>
                <span className={styles.skillLevel}>{skill.level}</span>
              </div>
              <p>{skill.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.workSection}>
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.sectionEyebrow}>Selected Work</p>
            <h2>Projects that show product thinking, frontend polish, and technical growth.</h2>
            <p className={styles.sectionText}>
              A few portfolio pieces that reflect the kind of interfaces, tools, and workflows I
              have been building recently.
            </p>
          </div>

          <Link href="/portfolio" className={styles.sectionLink}>
            Open Portfolio
          </Link>
        </div>

        <div className={styles.projectGrid}>
          {featuredProjects.map((project) => (
            <article key={project.slug} className={styles.projectCard}>
              <div className={styles.projectMeta}>
                <span className={styles.projectCategory}>{project.category}</span>
                <span className={styles.projectStatus}>{project.status}</span>
              </div>
              <h3>{project.title}</h3>
              <p className={styles.projectText}>{project.summary}</p>

              <div className={styles.projectStack}>
                {project.stack.map((item) => (
                  <span key={item} className={styles.projectStackItem}>
                    {item}
                  </span>
                ))}
              </div>

              <Link href="/portfolio" className={styles.articleLink}>
                Explore In Portfolio
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.writingSection}>
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.sectionEyebrow}>Latest Writing</p>
            <h2>Recent posts from my learning journey in frontend and software development.</h2>
            <p className={styles.sectionText}>
              Writing is part of how I reflect on what I build, explain what I learn, and make my
              growth more visible.
            </p>
          </div>

          <Link href="/blog" className={styles.sectionLink}>
            Read All Posts
          </Link>
        </div>

        <div className={styles.articleGrid}>
          {latestPosts.map((post) => (
            <article key={post.slug} className={styles.articleCard}>
              <span className={styles.articleCategory}>{post.category}</span>
              <h3>{post.title}</h3>
              <p className={styles.articleMeta}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className={styles.articleSummary}>{post.summary}</p>
              <Link href={`/blog/${post.slug}`} className={styles.articleLink}>
                Read Article
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
