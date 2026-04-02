"use client";

import { useEffect, useState } from "react";
import {
  DEFAULT_THEME,
  getTimeBasedTheme,
  THEME_OPTIONS,
  THEME_STORAGE_KEY,
} from "../lib/theme";
import styles from "./theme-toggle.module.css";

function getThemeMediaQuery() {
  if (typeof window === "undefined") {
    return null;
  }

  if (typeof window.matchMedia !== "function") {
    return null;
  }

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  return mediaQuery.media === "not all" ? null : mediaQuery;
}

function getStoredThemeMode() {
  if (typeof window === "undefined") {
    return DEFAULT_THEME;
  }

  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  return THEME_OPTIONS.includes(savedTheme) ? savedTheme : DEFAULT_THEME;
}

function resolveTheme(themeMode) {
  if (themeMode === "light" || themeMode === "dark") {
    return themeMode;
  }

  const mediaQuery = getThemeMediaQuery();

  if (mediaQuery) {
    return mediaQuery.matches ? "dark" : "light";
  }

  return getTimeBasedTheme();
}

function applyThemeMode(themeMode) {
  const resolvedTheme = resolveTheme(themeMode);
  document.documentElement.dataset.themeMode = themeMode;
  document.documentElement.dataset.theme = resolvedTheme;
  document.documentElement.style.colorScheme = resolvedTheme;
  return resolvedTheme;
}

function getNextThemeMode(themeMode) {
  const currentIndex = THEME_OPTIONS.indexOf(themeMode);
  const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % THEME_OPTIONS.length;
  return THEME_OPTIONS[nextIndex];
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.75v2.1" />
      <path d="M12 19.15v2.1" />
      <path d="m5.46 5.46 1.48 1.48" />
      <path d="m17.06 17.06 1.48 1.48" />
      <path d="M2.75 12h2.1" />
      <path d="M19.15 12h2.1" />
      <path d="m5.46 18.54 1.48-1.48" />
      <path d="m17.06 6.94 1.48-1.48" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
      <path d="M14.2 3.75a8.55 8.55 0 1 0 6.05 14.6 7.3 7.3 0 0 1-6.9-9.25 7.3 7.3 0 0 1 .85-5.35Z" />
    </svg>
  );
}

function AutoIcon({ resolvedTheme }) {
  return (
    <span className={styles.autoIcon}>
      {resolvedTheme === "dark" ? <MoonIcon /> : <SunIcon />}
      <span className={styles.autoPulse} />
    </span>
  );
}

function ThemeIcon({ themeMode, resolvedTheme }) {
  if (themeMode === "auto") {
    return <AutoIcon resolvedTheme={resolvedTheme} />;
  }

  return themeMode === "dark" ? <MoonIcon /> : <SunIcon />;
}

export default function ThemeToggle({ className = "" }) {
  const [themeMode, setThemeMode] = useState(DEFAULT_THEME);
  const [resolvedTheme, setResolvedTheme] = useState("light");

  useEffect(() => {
    const nextThemeMode = getStoredThemeMode();
    setThemeMode(nextThemeMode);
    setResolvedTheme(applyThemeMode(nextThemeMode));
  }, []);

  useEffect(() => {
    if (themeMode !== "auto") {
      return undefined;
    }

    const syncTheme = () => {
      setResolvedTheme(applyThemeMode("auto"));
    };

    const mediaQuery = getThemeMediaQuery();
    let fallbackTimer = null;

    syncTheme();

    if (mediaQuery) {
      if (typeof mediaQuery.addEventListener === "function") {
        mediaQuery.addEventListener("change", syncTheme);
      } else {
        mediaQuery.addListener(syncTheme);
      }
    } else {
      fallbackTimer = window.setInterval(syncTheme, 60000);
    }

    return () => {
      if (mediaQuery) {
        if (typeof mediaQuery.removeEventListener === "function") {
          mediaQuery.removeEventListener("change", syncTheme);
        } else {
          mediaQuery.removeListener(syncTheme);
        }
      }

      if (fallbackTimer) {
        window.clearInterval(fallbackTimer);
      }
    };
  }, [themeMode]);

  function handleThemeChange(nextThemeMode) {
    setThemeMode(nextThemeMode);
    setResolvedTheme(applyThemeMode(nextThemeMode));
    window.localStorage.setItem(THEME_STORAGE_KEY, nextThemeMode);
  }

  const nextThemeMode = getNextThemeMode(themeMode);
  const title =
    themeMode === "auto"
      ? `Theme: Auto, currently ${resolvedTheme}. Click to switch to ${nextThemeMode}.`
      : `Theme: ${themeMode}. Click to switch to ${nextThemeMode}.`;

  return (
    <button
      type="button"
      className={`${styles.toggle} ${className}`.trim()}
      onClick={() => handleThemeChange(nextThemeMode)}
      title={title}
      aria-label={title}
      data-mode={themeMode}
    >
      <ThemeIcon themeMode={themeMode} resolvedTheme={resolvedTheme} />
      <span className={styles.srOnly}>{title}</span>
    </button>
  );
}
