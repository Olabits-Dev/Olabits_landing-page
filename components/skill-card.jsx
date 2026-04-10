import styles from "./skill-card.module.css";

export default function SkillCard({ name, category, level, description }) {
  return (
    <article className={styles.card}>
      <div className={styles.top}>
        <div className={styles.heading}>
          <span className={styles.category}>{category}</span>
          <h3>{name}</h3>
        </div>
        <span className={styles.level}>{level}</span>
      </div>
      <p>{description}</p>
    </article>
  );
}
