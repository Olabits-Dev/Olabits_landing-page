import SkillCard from "../../components/skill-card";
import { skills } from "../../lib/site-data";
import styles from "./page.module.css";

export const metadata = {
  title: "Skills | Samuel Atilola",
  description: "The tools and disciplines Samuel Atilola uses across frontend, backend, automation, and delivery.",
};

export default function SkillsPage() {
  const categories = [...new Set(skills.map((skill) => skill.category))];

  return (
    <main className={styles.page}>
      <div className={styles.bentoGrid}>
        {/* Row 1: Hero (3 cols) + Categories (1 col) */}
        <section className={`${styles.card} ${styles.heroCard}`}>
          <span className={styles.eyebrow}>Tech Stack</span>
          <h1>Tools I use across frontend, backend, mobile, and automation workflows.</h1>
          <p className={styles.lead}>
            A curated stack shaped by real product needs and practical development experience.
          </p>
        </section>

        <aside className={`${styles.card} ${styles.categoryCard}`}>
          <span className={styles.eyebrow} style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}>Disciplines</span>
          <div className={styles.categoryList}>
            {categories.map((category) => (
              <span key={category} className={styles.categoryTag}>
                {category}
              </span>
            ))}
          </div>
        </aside>

        {/* Skills Section */}
        <div className={styles.skillsSection}>
          {skills.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </main>
  );
}
