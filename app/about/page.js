import AIBioGenerator from "../../components/ai-bio-generator";
import { buildAreas, profile } from "../../lib/site-data";
import styles from "./page.module.css";

export const metadata = {
  title: "About | Samuel Atilola",
  description: "Background, focus areas, and product direction for Samuel Atilola.",
};

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <div className={styles.bentoGrid}>
        {/* Row 1: Hero (3 cols) + Focus (1 col) */}
        <section className={`${styles.card} ${styles.heroCard}`}>
          <span className={styles.eyebrow}>About Samuel</span>
          <h1>Building useful software with clean interfaces and solid structure.</h1>
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

        {/* Row 2: Role Mix (2 cols) + Open To (1 col) + Hobbies (1 col) */}
        <article className={`${styles.card} ${styles.roleCard}`}>
          <span className={styles.eyebrow}>Role Mix</span>
          <h2>{profile.roleLine}</h2>
          <p className={styles.lead} style={{ fontSize: '1rem' }}>{profile.summary}</p>
        </article>

        <article className={`${styles.card} ${styles.openToCard}`}>
          <span className={styles.eyebrow}>Open To</span>
          <ul className={styles.list}>
            {profile.openTo.slice(0, 3).map((item) => (
              <li key={item} style={{ padding: '8px 12px', fontSize: '0.85rem' }}>{item}</li>
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

        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2>Build Areas</h2>
        </div>

        {/* Build Areas Grid */}
        {buildAreas.map((area) => (
          <article key={area.title} className={`${styles.card} ${styles.buildCard}`}>
            <span className={styles.eyebrow}>Space</span>
            <h3>{area.title}</h3>
            <p>{area.summary}</p>
            <ul className={styles.list}>
              {area.items.map((item) => (
                <li key={item} style={{ padding: '8px 12px', fontSize: '0.85rem' }}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div style={{ marginTop: '48px' }}>
        <AIBioGenerator />
      </div>
    </main>
  );
}
