import AIBioGenerator from "../../components/ai-bio-generator";
import { profile } from "../../lib/site-data";
import styles from "./page.module.css";

export const metadata = {
  title: "About | Olabits Blog Project",
};

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <section className={styles.intro}>
        <h1>About Me</h1>
        <p>
          This page introduces my background, my goals in tech, and the hobbies that keep me
          curious and creative outside coding.
        </p>
      </section>

      <section className={styles.grid}>
        <article className={styles.card}>
          <h2>Background</h2>
          <p>{profile.background}</p>
        </article>

        <article className={styles.card}>
          <h2>Goals in Tech</h2>
          <p>{profile.goals}</p>
        </article>

        <article className={styles.card}>
          <h2>Hobbies</h2>
          <ul>
            {profile.hobbies.map((hobby) => (
              <li key={hobby}>{hobby}</li>
            ))}
          </ul>
        </article>
      </section>

      <AIBioGenerator />
    </main>
  );
}
