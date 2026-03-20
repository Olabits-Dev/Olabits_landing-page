import Link from "next/link";
import ProjectCard from "../../components/project-card";
import { getPortfolioPageData } from "../../lib/portfolio";
import { profile } from "../../lib/site-data";
import styles from "./page.module.css";

export const metadata = {
  title: "Portfolio | Olabits Dev",
  description: "A GitHub-backed project portfolio featuring the public work of Olabits-Dev.",
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
          <p className={styles.eyebrow}>GitHub Project Portfolio</p>
          <h1>Projects I have built and published through my GitHub profile.</h1>
          <p className={styles.lead}>
            This page pulls from my public repositories on GitHub and turns them into a cleaner
            portfolio view with featured work, project summaries, and direct links to the code.
          </p>

          <div className={styles.actions}>
            <Link href={githubUrl} target="_blank" rel="noreferrer" className={styles.button}>
              Visit GitHub Profile
            </Link>
            <Link href="/contact" className={styles.ghostButton}>
              Contact Me
            </Link>
          </div>
        </div>

        <aside className={styles.panel}>
          <h2>Portfolio at a glance</h2>

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
              <span>Primary tools in the mix</span>
            </article>
          </div>

          <p className={styles.panelText}>
            Featured summaries are curated for readability, while the repo list stays connected to{" "}
            {profile.githubUsername}
            {" "}on GitHub.
          </p>
        </aside>
      </section>

      {featuredProjects.length > 0 ? (
        <section className={styles.section}>
          <div className={styles.sectionHeading}>
            <h2>Featured projects</h2>
            <p>
              These are the projects that best show the kind of products, interfaces, and
              automation workflows I have been building recently.
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
              The rest of my public repositories are also included here so the portfolio reflects
              the work on my GitHub profile more completely.
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
