"use client";

import { useEffect, useState } from "react";
import styles from "./floating-whatsapp.module.css";

const WHATSAPP_URL =
  "https://wa.me/2348035208600?text=Hello%20Samuel%2C%20I%20visited%20your%20website%20and%20would%20like%20to%20discuss%20a%20software%20project%20for%20my%20business.";

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show after slight delay to grab attention
    const timer = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <aside
      className={styles.floatingContainer}
      aria-label="Direct WhatsApp contact"
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        className={styles.whatsappButton}
        title="Chat with Samuel on WhatsApp (+234 803 520 8600)"
      >
        <span className={styles.pulseRing} aria-hidden="true" />
        <svg
          viewBox="0 0 24 24"
          width="26"
          height="26"
          fill="currentColor"
          aria-hidden="true"
          className={styles.icon}
        >
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43l-.48-.01c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.78 2.71 4.3 3.8 2.53 1.09 2.53.73 2.99.69.46-.04 1.47-.6 1.68-1.18.21-.59.21-1.09.15-1.18-.06-.1-.23-.15-.48-.28" />
        </svg>
        <span className={styles.buttonLabel}>
          <strong>Chat on WhatsApp</strong>
          <small>Typically replies in 5 mins</small>
        </span>
      </a>
    </aside>
  );
}
