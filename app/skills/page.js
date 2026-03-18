import SkillCard from "../../components/skill-card";
import { skills } from "../../lib/site-data";
import styles from "./page.module.css";

export const metadata = {
  title: "Skills | Olabits Blog Project",
};

export default function SkillsPage() {
  return (
    <main className={styles.page}>
      <section className={styles.intro}>
        <h1>Skills</h1>
        <p>
          This page uses a reusable skill card component to show technical skills and experience
          levels in a clean layout.
        </p>
      </section>

      <section className={styles.grid}>
        {skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </section>
    </main>
  );
}
