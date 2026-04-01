import "./globals.css";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { DEFAULT_THEME, THEME_STORAGE_KEY } from "../lib/theme";

export const metadata = {
  title: "Olabits Dev Portfolio",
  description:
    "A personal portfolio and blog built with Next.js, CSS Modules, dynamic routes, and API features.",
};

const themeScript = `
  (() => {
    try {
      const storageKey = "${THEME_STORAGE_KEY}";
      const defaultTheme = "${DEFAULT_THEME}";
      const savedTheme = window.localStorage.getItem(storageKey);
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      const theme =
        savedTheme === "dark" || savedTheme === "light" ? savedTheme : systemTheme || defaultTheme;

      document.documentElement.dataset.theme = theme;
      document.documentElement.style.colorScheme = theme;
    } catch (error) {
      document.documentElement.dataset.theme = "${DEFAULT_THEME}";
      document.documentElement.style.colorScheme = "${DEFAULT_THEME}";
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
