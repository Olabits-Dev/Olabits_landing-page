import AIBioGenerator from "../../components/ai-bio-generator";
import { buildAreas, experience, profile } from "../../lib/site-data";
import styles from "./page.module.css";

export const metadata = {
  title: "About & Experience | Samuel Atilola — Full-Stack & Mobile Engineer",
  description:
    "Software engineering roles, full-stack web and React Native mobile experience, focus areas, and architecture capabilities for Samuel Atilola.",
};

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <div className={styles.bentoGrid}>
        {/* Row 1: Hero (3 cols) + Focus (1 col) */}
        <section className={`${styles.card} ${styles.heroCard}`}>
          <span className={styles.eyebrow}>About Samuel</span>
          <h1>
            Senior Full-Stack &amp; Mobile Engineer building resilient web, mobile, and AI systems.
          </h1>
          <p className={styles.lead}>{profile.background}</p>
        </section>

        <aside className={`${styles.card} ${styles.focusCard}`}>
          <span className={styles.eyebrow}>Focus</span>
          <ul className={styles.list}>
            {profile.currentFocus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>

        {/* Row 2: Role Mix (2 cols) + Open To (1 col) + Interests (1 col) */}
        <article className={`${styles.card} ${styles.roleCard}`}>
          <span className={styles.eyebrow}>Role Mix</span>
          <h2>{profile.roleLine}</h2>
          <p className={styles.lead} style={{ fontSize: "1rem" }}>
            {profile.summary}
          </p>
        </article>

        <article className={`${styles.card} ${styles.openToCard}`}>
          <span className={styles.eyebrow}>Open To</span>
          <ul className={styles.list}>
            {profile.openTo.slice(0, 5).map((item) => (
              <li key={item} style={{ padding: "8px 12px", fontSize: "0.85rem" }}>
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article className={`${styles.card} ${styles.hobbyCard}`}>
          <span className={styles.eyebrow}>Interests</span>
          <div className={styles.hobbyList}>
            {profile.hobbies.map((hobby) => (
              <span key={hobby} className={styles.hobby}>
                {hobby}
              </span>
            ))}
          </div>
        </article>

        {/* Experience Section */}
        <div className={styles.sectionHeader}>
          <h2>Engineering Experience</h2>
        </div>

        {experience.map((job) => (
          <article key={`${job.company}-${job.period}`} className={`${styles.card} ${styles.experienceCard}`}>
            <div className={styles.experienceTop}>
              <span className={styles.eyebrow}>{job.period}</span>
              <span className={styles.experienceType}>{job.type}</span>
            </div>
            <h3>{job.role}</h3>
            <p className={styles.companyName}>{job.company}</p>
            <p className={styles.experienceSummary}>{job.summary}</p>
            <ul className={styles.list}>
              {job.highlights.map((item) => (
                <li key={item} style={{ padding: "10px 14px", fontSize: "0.88rem" }}>
                  {item}
                </li>
              ))}
            </ul>
            <div className={styles.stackRow}>
              {job.stack.map((tech) => (
                <span key={tech} className={styles.stackTag}>
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}

        {/* Build Areas Section */}
        <div className={styles.sectionHeader}>
          <h2>Build Areas</h2>
        </div>

        {buildAreas.map((area) => (
          <article key={area.title} className={`${styles.card} ${styles.buildCard}`}>
            <span className={styles.eyebrow}>Space</span>
            <h3>{area.title}</h3>
            <p>{area.summary}</p>
            <ul className={styles.list}>
              {area.items.map((item) => (
                <li key={item} style={{ padding: "8px 12px", fontSize: "0.85rem" }}>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div style={{ marginTop: "48px" }}>
        <AIBioGenerator />
      </div>
    </main>
  );
}
