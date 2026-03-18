import Link from "next/link";
import styles from "./blog-card.module.css";

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogCard({ post }) {
  return (
    <article className={styles.card}>
      <span className={styles.category}>{post.category}</span>
      <h3>{post.title}</h3>
      <p className={styles.meta}>{formatDate(post.date)}</p>
      <p className={styles.summary}>{post.summary}</p>
      <Link href={`/blog/${post.slug}`} className={styles.link}>
        Read full post
      </Link>
    </article>
  );
}
