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
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Tech Stack</p>
          <h1>Tools I use across frontend, backend, mobile, automation, and delivery workflows.</h1>
          <p className={styles.lead}>
            My stack is shaped by real product needs: clean interfaces, dashboards, workflow
            automation, backend integrations, and software that holds up in practice.
          </p>
        </div>

        <aside className={styles.heroPanel}>
          <p className={styles.panelLabel}>Categories</p>
          <div className={styles.categoryList}>
            {categories.map((category) => (
              <span key={category} className={styles.categoryTag}>
                {category}
              </span>
            ))}
          </div>
        </aside>
      </section>

      <section className={styles.grid}>
        {skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </section>
    </main>
  );
}
