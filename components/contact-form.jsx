"use client";

import { useState } from "react";
import styles from "./contact-form.module.css";

const WHATSAPP_NUMBER = "2348035208600";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setSubmitted(false);
    setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    const whatsappMessage = [
      "Hello Samuel, I have a message from your website.",
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Message: ${form.message}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    const newWindow = window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    if (!newWindow) {
      setError("WhatsApp could not open. Please allow popups and try again.");
      return;
    }

    setSubmitted(true);
    setError("");
    setForm(initialState);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.field}>
        <span>Name</span>
        <input name="name" type="text" value={form.name} onChange={handleChange} required />
      </label>

      <label className={styles.field}>
        <span>Email</span>
        <input name="email" type="email" value={form.email} onChange={handleChange} required />
      </label>

      <label className={styles.field}>
        <span>Message</span>
        <textarea
          name="message"
          rows="6"
          value={form.message}
          onChange={handleChange}
          required
        />
      </label>

      <button className={styles.button} type="submit">
        Send Message
      </button>

      {submitted ? (
        <p className={styles.success}>Your message was sent to WhatsApp successfully.</p>
      ) : null}

      {error ? <p className={styles.error}>{error}</p> : null}
    </form>
  );
}
