import Link from "next/link";
import ProjectCard from "../../components/project-card";
import { getPortfolioPageData } from "../../lib/portfolio";
import { profile } from "../../lib/site-data";
import styles from "./page.module.css";

export const metadata = {
  title: "Portfolio | Samuel Atilola",
  description:
    "A project portfolio featuring Samuel Atilola's frontend, SaaS, automation, fintech, and business software work.",
};

export default async function PortfolioPage() {
  const { githubUrl, repoCount, featuredCount, primaryLanguages, projects } =
    await getPortfolioPageData();
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Selected Work</p>
          <h1>Projects across automation, dashboards, real estate, product sites, and applied SaaS systems.</h1>
          <p className={styles.lead}>
            This portfolio brings together curated write-ups and GitHub-backed repositories so the
            work reads clearly for recruiters, collaborators, and product teams.
          </p>

          <div className={styles.actions}>
            <Link href={githubUrl} target="_blank" rel="noreferrer" className={styles.button}>
              Visit GitHub Profile
            </Link>
            <Link href={profile.resumeUrl} className={styles.ghostButton}>
              Download CV
            </Link>
          </div>
        </div>

        <aside className={styles.panel}>
          <p className={styles.panelLabel}>Portfolio Snapshot</p>
          <h2>A GitHub-connected portfolio with curated summaries and product context.</h2>

          <div className={styles.stats}>
            <article className={styles.statCard}>
              <strong>{repoCount}</strong>
              <span>Public repos shown</span>
            </article>
            <article className={styles.statCard}>
              <strong>{featuredCount}</strong>
              <span>Featured projects</span>
            </article>
            <article className={styles.statCard}>
              <strong>{primaryLanguages.join(", ")}</strong>
              <span>Primary tools in view</span>
            </article>
          </div>

          <p className={styles.panelText}>
            Featured project descriptions are intentionally curated while the broader project list
            stays connected to {profile.githubUsername} on GitHub.
          </p>
        </aside>
      </section>

      {featuredProjects.length > 0 ? (
        <section className={styles.section}>
          <div className={styles.sectionHeading}>
            <h2>Featured projects</h2>
            <p>
              These are the strongest examples of the products, systems, and user-facing
              experiences I have been building recently.
            </p>
          </div>

          <div className={styles.grid}>
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      ) : null}

      {otherProjects.length > 0 ? (
        <section className={styles.section}>
          <div className={styles.sectionHeading}>
            <h2>More from GitHub</h2>
            <p>
              The rest of my public repositories also appear here so the portfolio reflects the
              wider range of experiments, learning, and product directions on my profile.
            </p>
          </div>

          <div className={styles.grid}>
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
