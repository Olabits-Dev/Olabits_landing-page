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
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>About Samuel</p>
          <h1>Building useful software with clean interfaces, solid structure, and business value.</h1>
          <p className={styles.lead}>{profile.background}</p>
          <p className={styles.lead}>{profile.goals}</p>
        </div>

        <aside className={styles.heroPanel}>
          <p className={styles.panelLabel}>Current Focus</p>
          <ul className={styles.list}>
            {profile.currentFocus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </section>

      <section className={styles.grid}>
        <article className={styles.card}>
          <p className={styles.sectionEyebrow}>Role Mix</p>
          <h2>{profile.roleLine}</h2>
          <p>{profile.summary}</p>
        </article>

        <article className={styles.card}>
          <p className={styles.sectionEyebrow}>Open To</p>
          <ul className={styles.list}>
            {profile.openTo.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className={styles.card}>
          <p className={styles.sectionEyebrow}>Outside Work</p>
          <div className={styles.hobbyList}>
            {profile.hobbies.map((hobby) => (
              <span key={hobby} className={styles.hobby}>
                {hobby}
              </span>
            ))}
          </div>
        </article>
      </section>

      <section className={styles.buildSection}>
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.sectionEyebrow}>Build Areas</p>
            <h2>The product spaces I keep returning to as a builder.</h2>
          </div>
        </div>

        <div className={styles.buildGrid}>
          {buildAreas.map((area) => (
            <article key={area.title} className={styles.buildCard}>
              <h3>{area.title}</h3>
              <p>{area.summary}</p>
              <ul className={styles.list}>
                {area.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <AIBioGenerator />
    </main>
  );
}
