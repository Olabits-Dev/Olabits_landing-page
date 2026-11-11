"use client";

import { useState } from "react";
import styles from "./contact-form.module.css";

const WHATSAPP_NUMBER = "2348035208600";

const PROJECT_TYPES = [
  "Full-Stack Web / SaaS Platform",
  "Mobile App (React Native / Android / iOS)",
  "AI Chatbot & Workflow Automation",
  "E-Commerce & Paystack Integration",
  "Software Engineering Role / Contract",
];

const initialState = {
  name: "",
  email: "",
  projectType: PROJECT_TYPES[0],
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [submittedUrl, setSubmittedUrl] = useState("");
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setSubmittedUrl("");
    setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    const whatsappMessage = [
      "Hello Samuel, I have a project inquiry from your website.",
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Inquiry Type: ${form.projectType}`,
      `Message: ${form.message}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    const newWindow = window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    if (!newWindow) {
      setSubmittedUrl(whatsappUrl);
      setError(
        "Popup blocked by your browser. Click the direct WhatsApp button below to send your message.",
      );
      return;
    }

    setSubmittedUrl(whatsappUrl);
    setError("");
    setForm(initialState);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor="contact-name">
          Full Name <span aria-hidden="true">*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-email">
          Email Address <span aria-hidden="true">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          autoCorrect="off"
          autoCapitalize="none"
          spellCheck={false}
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-project-type">Project or Role Type</label>
        <select
          id="contact-project-type"
          name="projectType"
          value={form.projectType}
          onChange={handleChange}
        >
          {PROJECT_TYPES.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-message">
          Project Details <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.actions}>
        <button className={styles.button} type="submit">
          Send via WhatsApp
        </button>

        {submittedUrl && (
          <a
            href={submittedUrl}
            target="_blank"
            rel="noreferrer"
            className={styles.directLink}
          >
            Open WhatsApp Chat
          </a>
        )}
      </div>

      <div aria-live="polite" role="status">
        {submittedUrl && !error ? (
          <p className={styles.success}>
            WhatsApp chat opened. If it did not open automatically, click Open WhatsApp Chat.
          </p>
        ) : null}
        {error ? <p className={styles.error}>{error}</p> : null}
      </div>
    </form>
  );
}
