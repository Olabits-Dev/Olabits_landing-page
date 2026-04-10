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
      <section className={styles.copy}>
        <p className={styles.eyebrow}>Contact</p>
        <h1>Let&apos;s talk about frontend systems, product work, and software that needs to ship well.</h1>
        <p className={styles.lead}>
          Use the form to send a message through WhatsApp, or reach out through the portfolio,
          GitHub, LinkedIn, and CV links below.
        </p>

        <div className={styles.focusList}>
          {profile.openTo.slice(0, 4).map((item) => (
            <span key={item} className={styles.focusTag}>
              {item}
            </span>
          ))}
        </div>

        <div className={styles.linkGrid}>
          {profile.contactLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              className={styles.contactCard}
            >
              <strong>{link.label}</strong>
              <span>{link.summary}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.formPanel}>
        <div className={styles.formIntro}>
          <p className={styles.panelLabel}>Quick Message</p>
          <h2>Send a note directly to WhatsApp.</h2>
          <p>
            Fill in your name, email, and message. When you submit, the site opens WhatsApp with
            your message already prepared for sending.
          </p>
        </div>

        <ContactForm />
      </section>
    </main>
  );
}
