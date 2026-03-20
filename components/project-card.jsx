import Link from "next/link";
import styles from "./project-card.module.css";

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function ProjectCard({ project }) {
  return (
    <article className={styles.card}>
      <div className={styles.top}>
        <div className={styles.badges}>
          <span className={styles.category}>{project.category}</span>
          {project.featured ? <span className={styles.featured}>Featured</span> : null}
        </div>
        <span className={styles.status}>{project.status}</span>
      </div>

      <h3>{project.title}</h3>
      <p className={styles.summary}>{project.summary}</p>

      <div className={styles.meta}>
        <p>
          <strong>Primary tech:</strong> {project.language}
        </p>
        <p>
          <strong>Updated:</strong> {formatDate(project.updatedAt)}
        </p>
      </div>

      {project.stack.length > 0 ? (
        <div className={styles.stack}>
          {project.stack.map((item) => (
            <span key={item} className={styles.stackItem}>
              {item}
            </span>
          ))}
        </div>
      ) : null}

      {project.highlights.length > 0 ? (
        <ul className={styles.highlights}>
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      ) : null}

      <div className={styles.links}>
        <Link href={project.repoUrl} target="_blank" rel="noreferrer" className={styles.link}>
          View repository
        </Link>
        {project.liveUrl ? (
          <Link href={project.liveUrl} target="_blank" rel="noreferrer" className={styles.ghostLink}>
            Live preview
          </Link>
        ) : null}
      </div>
    </article>
  );
}
