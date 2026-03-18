import { notFound } from "next/navigation";
import PostViewCounter from "../../../components/post-view-counter";
import { blogPosts } from "../../../lib/site-data";
import { getViewCount } from "../../../lib/view-store";
import styles from "./page.module.css";

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const post = blogPosts.find((item) => item.slug === resolvedParams.slug);

  if (!post) {
    return {
      title: "Post Not Found | Olabits Blog Project",
    };
  }

  return {
    title: `${post.title} | Olabits Blog Project`,
    description: post.summary,
  };
}

export default async function BlogDetailsPage({ params }) {
  const resolvedParams = await params;
  const post = blogPosts.find((item) => item.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const initialViews = getViewCount(post.slug, 20);

  return (
    <main className={styles.page}>
      <span className={styles.category}>{post.category}</span>
      <h1 className={styles.title}>{post.title}</h1>

      <div className={styles.metaRow}>
        <p className={styles.date}>{formatDate(post.date)}</p>
        <PostViewCounter slug={post.slug} initialViews={initialViews} />
      </div>

      <article className={styles.article}>
        {post.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </article>
    </main>
  );
}
