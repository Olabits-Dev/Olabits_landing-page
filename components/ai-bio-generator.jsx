"use client";

import { useState } from "react";
import styles from "./ai-bio-generator.module.css";

export default function AIBioGenerator() {
  const [bio, setBio] = useState("");
  const [status, setStatus] = useState("idle");

  async function handleGenerate() {
    setStatus("loading");

    try {
      const response = await fetch("/api/generate-bio", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      setBio(data.bio || "Bio could not be generated.");
      setStatus("done");
    } catch (_error) {
      setBio("Something went wrong while generating the bio.");
      setStatus("done");
    }
  }

  return (
    <section className={styles.panel}>
      <div className={styles.copy}>
        <p className={styles.kicker}>AI Feature</p>
        <h3>Generate a professional bio</h3>
        <p>
          This section uses an API route to generate a polished bio. If no API key is configured,
          the app falls back to a built-in generated response so the feature still works in class.
        </p>
      </div>

      <button className={styles.button} type="button" onClick={handleGenerate} disabled={status === "loading"}>
        {status === "loading" ? "Generating..." : "Generate Bio"}
      </button>

      {bio ? <p className={styles.bio}>{bio}</p> : null}
    </section>
  );
}
