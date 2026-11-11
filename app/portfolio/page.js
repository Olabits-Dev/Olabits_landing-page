import Link from "next/link";
import ProjectCard from "../../components/project-card";
import { getPortfolioPageData } from "../../lib/portfolio";
import { profile } from "../../lib/site-data";
import styles from "./page.module.css";

export const metadata = {
  title: "Portfolio | Samuel Atilola — Full-Stack & Mobile Engineer",
  description:
    "Software engineering portfolio of Samuel Atilola covering full-stack web platforms, React Native & Capacitor mobile apps, AI SaaS products, B2B ERPs, and fintech automation.",
};

export default async function PortfolioPage() {
  const { githubUrl, repoCount, featuredCount, primaryLanguages, projects } =
    await getPortfolioPageData();
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <main className={styles.page}>
      <div className={styles.bentoGrid}>
        {/* Row 1: Hero (3 cols) + Snapshot (1 col) */}
        <section className={`${styles.card} ${styles.heroCard}`}>
          <span className={styles.eyebrow}>Selected Engineering Work</span>
          <h1>Full-stack platforms, offline-first mobile apps, AI SaaS &amp; automation systems.</h1>
          <p className={styles.lead}>
            Production client architectures and GitHub repositories spanning React Native, Expo,
            Next.js App Router, Vue 3, Node.js, PostgreSQL, and Python.
          </p>

          <div className={styles.actions}>
            <Link href={githubUrl} target="_blank" rel="noreferrer" className={styles.button}>
              GitHub Profile
            </Link>
            <Link href={profile.resumeUrl} className={styles.ghostButton}>
              Download CV
            </Link>
          </div>
        </section>

        <aside className={`${styles.card} ${styles.snapshotCard}`}>
          <span className={styles.eyebrow} style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}>Snapshot</span>
          <h2>Full-stack &amp; mobile engineering across public and client systems.</h2>

          <div className={styles.stats}>
            <div className={styles.statCard}>
              <strong>{repoCount}</strong>
              <span>Shipped Projects</span>
            </div>
            <div className={styles.statCard}>
              <strong>{featuredCount}</strong>
              <span>Featured Builds</span>
            </div>
            <div className={styles.statCard}>
              <strong>{primaryLanguages.slice(0, 2).join(", ")}</strong>
              <span>Core Tech</span>
            </div>
          </div>
        </aside>

        {/* Featured Projects Section */}
        {featuredProjects.length > 0 && (
          <>
            <div className={styles.sectionHeader}>
              <h2>Featured Projects</h2>
              <p className={styles.lead}>Top examples of my recent product builds.</p>
            </div>
            <div className={styles.projectGrid}>
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        )}

        {/* Other Projects Section */}
        {otherProjects.length > 0 && (
          <>
            <div className={styles.sectionHeader}>
              <h2>More from GitHub</h2>
              <p className={styles.lead}>Public experiments and learning projects.</p>
            </div>
            <div className={styles.projectGrid}>
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
