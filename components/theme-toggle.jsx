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

export default function ThemeToggle() {
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

  return (
    <div className={styles.toggle}>
      <span className={styles.label}>Theme</span>

      <div className={styles.group} role="group" aria-label="Color theme">
        {THEME_OPTIONS.map((option) => {
          const isActive = themeMode === option;
          const title =
            option === "auto"
              ? `Auto mode follows the device theme. Current: ${resolvedTheme}`
              : `Switch to ${option} mode`;

          return (
            <button
              key={option}
              type="button"
              className={`${styles.option} ${isActive ? styles.optionActive : ""}`}
              onClick={() => handleThemeChange(option)}
              aria-pressed={isActive}
              title={title}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </button>
          );
        })}
      </div>
    </div>
  );
}
