import ContactForm from "../../components/contact-form";
import styles from "./page.module.css";

export const metadata = {
  title: "Contact | Olabits Blog Project",
};

export default function ContactPage() {
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
      </section>

      <section className={styles.formPanel}>
        <ContactForm />
      </section>
    </main>
  );
}
