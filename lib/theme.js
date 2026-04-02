export const THEME_STORAGE_KEY = "olabits-theme";
export const DEFAULT_THEME = "auto";
export const THEME_OPTIONS = ["auto", "light", "dark"];

export function getTimeBasedTheme(date = new Date()) {
  const hour = date.getHours();
  return hour >= 18 || hour < 6 ? "dark" : "light";
}
