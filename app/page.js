import Link from "next/link";
import { profile } from "../lib/site-data";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles.hero}>
      <section className={styles.content}>
        <p className={styles.eyebrow}>Portfolio, Blog, and Project Showcase</p>
        <h1>{profile.name}</h1>
        <p className={styles.lead}>{profile.role}</p>
        <p className={styles.lead}>{profile.intro}</p>
        <p className={styles.lead}>{profile.welcome}</p>

        <div className={styles.interestList}>
          {profile.interests.map((interest) => (
            <span key={interest} className={styles.interest}>
              {interest}
            </span>
          ))}
        </div>

        <div className={styles.ctaRow}>
          <Link href="/blog" className={styles.button}>
            Visit Blog
          </Link>
          <Link href="/portfolio" className={styles.ghostButton}>
            View Portfolio
          </Link>
        </div>
      </section>

      <aside className={styles.card}>
        <h2>What this project includes</h2>
        <p>
          This site demonstrates reusable components, a shared navigation bar, blog listing pages,
          a GitHub-backed portfolio page, dynamic blog routes, CSS Modules, a contact form, a view
          counter API, and an AI-powered bio section.
        </p>
        <p>
          It is structured like a real class project you can keep extending into a portfolio-ready
          app.
        </p>
      </aside>
    </main>
  );
}
