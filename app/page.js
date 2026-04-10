import Link from "next/link";
import {
  blogPosts,
  buildAreas,
  capabilityBands,
  profile,
  projectShowcase,
  skills,
} from "../lib/site-data";
import styles from "./page.module.css";

const featuredProjects = [
  "GMT-Homes-Real_Estate",
  "job-alert-bot",
  "Mt5-SaaS-Automated-Dashboard",
  "Expensetracker_refilne",
]
  .map((slug) => {
    const project = projectShowcase[slug];

    if (!project) {
      return null;
    }

    return {
      slug,
      ...project,
    };
  })
  .filter(Boolean);

const latestPosts = [...blogPosts]
  .sort((first, second) => new Date(second.date) - new Date(first.date))
  .slice(0, 3);

const spotlightSkills = skills.slice(0, 8);

function formatCount(count) {
  return count.toString().padStart(2, "0");
}

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function HomePage() {
  const stats = [
    { value: formatCount(featuredProjects.length), label: "Featured builds" },
    { value: formatCount(blogPosts.length), label: "Published notes" },
    { value: formatCount(buildAreas.length), label: "Product lanes" },
    { value: formatCount(skills.length), label: "Core tools" },
  ];

  const rolePills = profile.roleLine.split(" • ");

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Portfolio • Blog • Product Work</p>
          <p className={styles.identity}>{profile.name}</p>
          <h1>{profile.headline}</h1>
          <p className={styles.roleLine}>{profile.roleLine}</p>
          <p className={styles.intro}>{profile.summary}</p>

          <div className={styles.roleCluster}>
            {rolePills.map((role) => (
              <span key={role} className={styles.rolePill}>
                {role}
              </span>
            ))}
          </div>

          <div className={styles.ctaRow}>
            <Link href="/portfolio" className={styles.button}>
              View Portfolio
            </Link>
            <Link href="/blog" className={styles.ghostButton}>
              Read Blog
            </Link>
            <Link href={profile.resumeUrl} className={styles.ghostButton}>
              Download CV
            </Link>
          </div>

          <div className={styles.linkRow}>
            {profile.primaryLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className={styles.inlineLink}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className={styles.inlineLink}>
              Contact
            </Link>
          </div>
        </div>

        <aside className={styles.heroPanel}>
          <div className={styles.portraitWrap}>
            <div className={styles.portraitFrame}>
              <img
                src={profile.photo.src}
                alt={profile.photo.alt}
                className={styles.portrait}
              />
            </div>
            <p className={styles.portraitCaption}>Focused on product quality, clarity, and useful software.</p>
          </div>

          <div className={styles.panelContent}>
            <p className={styles.panelLabel}>Current Positioning</p>
            <h2>{profile.availability}</h2>

            <ul className={styles.focusList}>
              {profile.quickFacts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>

            <div className={styles.profileViews}>
              <span>Profile views</span>
              <img src={profile.profileViewsUrl} alt="Profile views badge" />
            </div>
          </div>
        </aside>
      </section>

      <section className={styles.statStrip}>
        {stats.map((stat) => (
          <article key={stat.label} className={styles.statCard}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </section>

      <section className={styles.storySection}>
        <article className={styles.storyCard}>
          <p className={styles.sectionEyebrow}>About Me</p>
          <h2>{profile.background}</h2>
          <p className={styles.sectionText}>{profile.intro}</p>
          <p className={styles.sectionText}>{profile.goals}</p>

          <div className={styles.interestList}>
            {profile.interests.map((interest) => (
              <span key={interest} className={styles.interest}>
                {interest}
              </span>
            ))}
          </div>
        </article>

        <article className={styles.storyAside}>
          <div className={styles.storyPanel}>
            <p className={styles.sectionEyebrow}>Current Focus</p>
            <ul className={styles.storyList}>
              {profile.currentFocus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.storyPanel}>
            <p className={styles.sectionEyebrow}>Open To</p>
            <ul className={styles.storyList}>
              {profile.openTo.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </article>
      </section>

      <section className={styles.capabilitySection}>
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.sectionEyebrow}>How I Work</p>
            <h2>Frontend precision, product structure, and systems that hold up beyond the first demo.</h2>
            <p className={styles.sectionText}>
              I combine interface quality, practical backend thinking, and workflow automation so
              the software is useful, understandable, and easier to scale.
            </p>
          </div>

          <Link href="/about" className={styles.sectionLink}>
            More About Me
          </Link>
        </div>

        <div className={styles.capabilityGrid}>
          {capabilityBands.map((capability) => (
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

      <section className={styles.buildSection}>
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.sectionEyebrow}>What I Build</p>
            <h2>Software shaped around business use, automation value, and strong product presentation.</h2>
          </div>

          <Link href="/portfolio" className={styles.sectionLink}>
            Explore Selected Work
          </Link>
        </div>

        <div className={styles.buildGrid}>
          {buildAreas.map((area) => (
            <article key={area.title} className={styles.buildCard}>
              <h3>{area.title}</h3>
              <p>{area.summary}</p>

              <ul className={styles.buildList}>
                {area.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.workSection}>
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.sectionEyebrow}>Featured Projects</p>
            <h2>Selected work across real estate, fintech automation, dashboards, and business tools.</h2>
            <p className={styles.sectionText}>
              These projects reflect the kinds of interfaces, systems, and workflow-heavy products
              I enjoy building.
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
                View Project Details
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.skillsSection}>
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.sectionEyebrow}>Tech Stack</p>
            <h2>The tools I rely on most when building product-facing interfaces and connected systems.</h2>
          </div>

          <Link href="/skills" className={styles.sectionLink}>
            See All Skills
          </Link>
        </div>

        <div className={styles.skillsGrid}>
          {spotlightSkills.map((skill) => (
            <article key={skill.name} className={styles.skillCard}>
              <div className={styles.skillTop}>
                <div>
                  <p className={styles.skillCategory}>{skill.category}</p>
                  <h3>{skill.name}</h3>
                </div>
                <span className={styles.skillLevel}>{skill.level}</span>
              </div>
              <p>{skill.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.writingSection}>
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.sectionEyebrow}>Latest Writing</p>
            <h2>Notes from my frontend, backend, and software development learning journey.</h2>
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
              <p className={styles.articleMeta}>{formatDate(post.date)}</p>
              <p className={styles.articleSummary}>{post.summary}</p>
              <Link href={`/blog/${post.slug}`} className={styles.articleLink}>
                Read Article
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.contactCopy}>
          <p className={styles.sectionEyebrow}>Connect</p>
          <h2>Available for product work, remote opportunities, and frontend-led software projects.</h2>
          <p className={styles.sectionText}>
            If you are building something that needs strong frontend execution, practical systems
            thinking, or a polished product-facing experience, let&apos;s talk.
          </p>
        </div>

        <div className={styles.contactGrid}>
          {profile.contactLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              className={styles.contactCard}
            >
              <strong>{link.label}</strong>
              <span>{link.summary}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
