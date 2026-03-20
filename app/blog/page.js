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
          Welcome to my blog. This is where I share what I am learning, how I build, and a few
          helpful ideas from my journey in tech.
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
