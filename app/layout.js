import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { DEFAULT_THEME, THEME_STORAGE_KEY } from "../lib/theme";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display-loaded",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body-loaded",
  display: "swap",
});

export const metadata = {
  title: "Samuel Atilola | Senior Full-Stack & Mobile Software Engineer",
  description:
    "Portfolio of Samuel Olawale Atilola — Senior Full-Stack & Mobile Software Engineer building production React Native & Expo mobile apps, Next.js BFF web platforms, Vue 3 storefronts, AI SaaS products, and fintech automation systems.",
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
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
