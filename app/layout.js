import "./globals.css";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { DEFAULT_THEME, THEME_STORAGE_KEY } from "../lib/theme";

export const metadata = {
  title: "Samuel Atilola | Frontend Developer and Software Engineer",
  description:
    "An editorial-style portfolio and blog for Samuel Olawale Atilola, covering frontend engineering, SaaS products, automation systems, fintech builds, and business applications.",
};

const themeScript = `
  (() => {
    const getTimeBasedTheme = () => {
      const hour = new Date().getHours();
      return hour >= 18 || hour < 6 ? "dark" : "light";
    };

    const getThemeMediaQuery = () => {
      if (typeof window.matchMedia !== "function") {
        return null;
      }

      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      return mediaQuery.media === "not all" ? null : mediaQuery;
    };

    const resolveTheme = (themeMode) => {
      if (themeMode === "light" || themeMode === "dark") {
        return themeMode;
      }

      const mediaQuery = getThemeMediaQuery();

      if (mediaQuery) {
        return mediaQuery.matches ? "dark" : "light";
      }

      return getTimeBasedTheme();
    };

    try {
      const storageKey = "${THEME_STORAGE_KEY}";
      const defaultTheme = "${DEFAULT_THEME}";
      const savedTheme = window.localStorage.getItem(storageKey);
      const themeMode =
        savedTheme === "auto" || savedTheme === "dark" || savedTheme === "light"
          ? savedTheme
          : defaultTheme;
      const theme = resolveTheme(themeMode);

      document.documentElement.dataset.themeMode = themeMode;
      document.documentElement.dataset.theme = theme;
      document.documentElement.style.colorScheme = theme;
    } catch (error) {
      const fallbackTheme = resolveTheme("${DEFAULT_THEME}");
      document.documentElement.dataset.themeMode = "${DEFAULT_THEME}";
      document.documentElement.dataset.theme = fallbackTheme;
      document.documentElement.style.colorScheme = fallbackTheme;
    }
  })();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
