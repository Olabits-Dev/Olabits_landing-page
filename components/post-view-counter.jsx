"use client";

import { useEffect, useState } from "react";
import styles from "./post-view-counter.module.css";

export default function PostViewCounter({ slug, initialViews }) {
  const [views, setViews] = useState(initialViews);

  useEffect(() => {
    let active = true;

    async function incrementCount() {
      try {
        const response = await fetch(`/api/posts/${slug}/view`, {
          method: "POST",
        });
        const data = await response.json();

        if (active && typeof data.views === "number") {
          setViews(data.views);
        }
      } catch (_error) {
        if (active) {
          setViews(initialViews);
        }
      }
    }

    incrementCount();

    return () => {
      active = false;
    };
  }, [slug, initialViews]);

  return <p className={styles.counter}>Views: {views}</p>;
}
