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
          Here is a look at the skills I am building and using as I grow in frontend, backend,
          and full-stack development.
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
