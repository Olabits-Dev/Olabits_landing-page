import Link from "next/link";
import ContactForm from "../../components/contact-form";
import { profile } from "../../lib/site-data";
import styles from "./page.module.css";

export const metadata = {
  title: "Contact | Samuel Atilola",
  description: "Contact Samuel Atilola for frontend engineering, SaaS, and automation-focused work.",
};

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <div className={styles.bentoGrid}>
        {/* Row 1 & 2: Hero (2 cols) + Form (2 cols, 3 rows) */}
        <section className={`${styles.card} ${styles.heroCard}`}>
          <span className={styles.eyebrow}>Contact</span>
          <h1>Let&apos;s talk about frontend systems and product work.</h1>
          <p className={styles.lead}>
            Reach out through the form or any of the social links below.
          </p>
        </section>

        <section className={`${styles.card} ${styles.formCard}`}>
          <div className={styles.formIntro}>
            <span className={styles.eyebrow} style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}>Quick Message</span>
            <h2>Send a note directly to WhatsApp.</h2>
          </div>
          <ContactForm />
        </section>

        {/* Row 2 bottom: Focus (2 cols) */}
        <article className={`${styles.card} ${styles.focusCard}`}>
          <span className={styles.eyebrow}>Services</span>
          <div className={styles.focusList}>
            {profile.openTo.slice(0, 5).map((item) => (
              <span key={item} className={styles.focusTag}>
                {item}
              </span>
            ))}
          </div>
        </article>

        {/* Row 3: Utility Links (1 col each) */}
        {profile.contactLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noreferrer" : undefined}
            className={`${styles.card} ${styles.linkCard}`}
          >
             <span className={styles.eyebrow}>Link</span>
            <strong>{link.label}</strong>
            <span>{link.summary}</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
