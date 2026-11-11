import SkillCard from "../../components/skill-card";
import { capabilityBands, skills } from "../../lib/site-data";
import styles from "./page.module.css";

export const metadata = {
  title: "Skills & Architecture | Samuel Atilola — Full-Stack & Mobile Engineer",
  description:
    "Full-stack web, React Native & Expo mobile, Capacitor Android, PostgreSQL/Prisma/SQLite, AI SaaS, Paystack billing, and automated testing stack used by Samuel Atilola.",
};

export default function SkillsPage() {
  const categories = [...new Set(skills.map((skill) => skill.category))];

  return (
    <main className={styles.page}>
      <div className={styles.bentoGrid}>
        {/* Row 1: Hero (3 cols) + Categories (1 col) */}
        <section className={`${styles.card} ${styles.heroCard}`}>
          <span className={styles.eyebrow}>Full-Stack &amp; Mobile Stack</span>
          <h1>Tools and architectures I use across web, mobile, backend, AI, and automation.</h1>
          <p className={styles.lead}>
            Production-tested across offline-first React Native apps, Next.js BFF platforms,
            Vue 3 storefronts, Express/Prisma APIs, Python trading engines, and automated test suites.
          </p>
        </section>

        <aside className={`${styles.card} ${styles.categoryCard}`}>
          <span className={styles.eyebrow} style={{ background: "rgba(255,255,255,0.1)", color: "#fff" }}>
            Disciplines
          </span>
          <div className={styles.categoryList}>
            {categories.map((category) => (
              <span key={category} className={styles.categoryTag}>
                {category}
              </span>
            ))}
          </div>
        </aside>

        {/* Capability Bands */}
        <div className={styles.sectionHeader}>
          <h2>Engineering Capabilities</h2>
        </div>

        <div className={styles.bandsSection}>
          {capabilityBands.map((band) => (
            <article key={band.title} className={styles.card}>
              <span className={styles.eyebrow}>Capability</span>
              <h3 className={styles.bandTitle}>{band.title}</h3>
              <p className={styles.bandSummary}>{band.summary}</p>
              <div className={styles.toolRow}>
                {band.tools.map((tool) => (
                  <span key={tool} className={styles.toolBadge}>
                    {tool}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Core Technologies Section */}
        <div className={styles.sectionHeader}>
          <h2>Technologies &amp; Tooling</h2>
        </div>

        <div className={styles.skillsSection}>
          {skills.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </main>
  );
}
