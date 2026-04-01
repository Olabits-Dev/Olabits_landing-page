import Link from "next/link";
import ContactForm from "../../components/contact-form";
import { profile } from "../../lib/site-data";
import styles from "./page.module.css";

export const metadata = {
  title: "Contact | Olabits Blog Project",
};

export default function ContactPage() {
  const socialLinks = [
    { href: profile.linkedinUrl, label: "LinkedIn" },
    { href: profile.facebookUrl, label: "Facebook" },
  ];

  return (
    <main className={styles.page}>
      <section className={styles.copy}>
        <h1>Contact</h1>
        <p>
          Fill the form and your message will open directly in WhatsApp so it can be sent to you
          immediately.
        </p>
        <ul>
          <li>Name field</li>
          <li>Email field</li>
          <li>Message field</li>
          <li>Direct WhatsApp message handoff</li>
        </ul>

        <div className={styles.socials}>
          <p className={styles.socialText}>You can also reach me through my social profiles.</p>

          <div className={styles.socialLinks}>
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={styles.socialLink}
              >
                Visit {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.formPanel}>
        <ContactForm />
      </section>
    </main>
  );
}
