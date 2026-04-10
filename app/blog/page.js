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
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Writing Archive</p>
          <h1>Thoughts, lessons, and working notes from my software development journey.</h1>
          <p className={styles.lead}>
            This blog is where I document how I think through frontend structure, backend growth,
            and the practical decisions behind the products I build.
          </p>
        </div>

        <aside className={styles.heroPanel}>
          <p className={styles.panelLabel}>Most Recent</p>
          <h2>{featuredPost.title}</h2>
          <p className={styles.panelMeta}>
            {featuredPost.category} • {formatDate(featuredPost.date)}
          </p>
          <p className={styles.panelText}>{featuredPost.summary}</p>
          <Link href={`/blog/${featuredPost.slug}`} className={styles.button}>
            Read Featured Post
          </Link>
        </aside>
      </section>

      <section className={styles.archive}>
        <div className={styles.archiveHeader}>
          <div>
            <p className={styles.eyebrow}>Archive</p>
            <h2>Published posts</h2>
          </div>
          <p className={styles.archiveText}>
            Notes on HTML, CSS, React, APIs, and the tooling that supports stronger product work.
          </p>
        </div>

        <div className={styles.grid}>
          {archivePosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
}
