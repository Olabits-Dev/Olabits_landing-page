import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFoundPage() {
  return (
    <main className={styles.page}>
      <h1>Post not found</h1>
      <p>
        The blog post you tried to open does not exist yet. Try another article from the blog page.
      </p>
      <Link href="/blog" className={styles.link}>
        Back to Blog
      </Link>
    </main>
  );
}
