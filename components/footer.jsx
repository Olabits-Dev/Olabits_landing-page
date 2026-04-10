import Link from "next/link";
import { profile } from "../lib/site-data";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.kicker}>{profile.shortName}</p>
          <p className={styles.text}>{profile.roleLine}</p>
        </div>

        <div className={styles.links}>
          <Link href={profile.portfolioUrl} target="_blank" rel="noreferrer" className={styles.link}>
            Portfolio
          </Link>
          <Link href={profile.githubUrl} target="_blank" rel="noreferrer" className={styles.link}>
            GitHub
          </Link>
          <Link href={profile.linkedinUrl} target="_blank" rel="noreferrer" className={styles.link}>
            LinkedIn
          </Link>
          <Link href={profile.resumeUrl} className={styles.link}>
            CV
          </Link>
        </div>

        <p className={styles.meta}>© {new Date().getFullYear()} Samuel Olawale Atilola</p>
      </div>
    </footer>
  );
}
