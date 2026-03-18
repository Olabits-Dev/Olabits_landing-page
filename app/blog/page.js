import BlogCard from "../../components/blog-card";
import { blogPosts } from "../../lib/site-data";
import styles from "./page.module.css";

export const metadata = {
  title: "Blog | Olabits Blog Project",
};

export default function BlogPage() {
  return (
    <main className={styles.page}>
      <section className={styles.intro}>
        <h1>Blog Posts</h1>
        <p>
          Here are some sample posts showing title, date, category, summary, and a route to the
          full article page.
        </p>
      </section>

      <section className={styles.grid}>
        {blogPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </section>
    </main>
  );
}
