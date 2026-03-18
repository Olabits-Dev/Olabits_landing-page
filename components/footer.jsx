import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>Built with Next.js, reusable components, CSS Modules, API routes, and curiosity.</p>
        <p>© {new Date().getFullYear()} Samuel Atilola</p>
      </div>
    </footer>
  );
}
