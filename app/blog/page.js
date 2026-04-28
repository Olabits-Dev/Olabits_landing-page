import Link from "next/link";
import BlogCard from "../../components/blog-card";
import { blogPosts } from "../../lib/site-data";
import styles from "./page.module.css";

export const metadata = {
  title: "Blog | Samuel Atilola",
  description: "Frontend, backend, and software development notes from Samuel Atilola.",
};

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const posts = [...blogPosts].sort((first, second) => new Date(second.date) - new Date(first.date));
  const [featuredPost, ...archivePosts] = posts;

  return (
    <main className={styles.page}>
      <div className={styles.bentoGrid}>
        {/* Row 1: Hero (2 cols) + Featured Post (2 cols) */}
        <section className={`${styles.card} ${styles.heroCard}`}>
          <span className={styles.eyebrow}>Writing Archive</span>
          <h1>Thoughts, lessons, and notes from my dev journey.</h1>
          <p className={styles.lead}>
            Documenting frontend structure, backend growth, and product decisions.
          </p>
        </section>

        <aside className={`${styles.card} ${styles.featuredPostCard}`}>
          <span className={styles.eyebrow} style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}>Most Recent</span>
          <h2>{featuredPost.title}</h2>
          <p className={styles.panelMeta}>
            {featuredPost.category} • {formatDate(featuredPost.date)}
          </p>
          <p className={styles.lead} style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)' }}>
            {featuredPost.summary}
          </p>
          <Link href={`/blog/${featuredPost.slug}`} className={styles.button}>
            Read Post
          </Link>
        </aside>

        {/* Archive Section */}
        <div className={styles.sectionHeader}>
          <h2>Published Posts</h2>
          <p className={styles.lead}>Notes on HTML, CSS, React, and product tooling.</p>
        </div>

        <div className={styles.archiveGrid}>
          {archivePosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}
