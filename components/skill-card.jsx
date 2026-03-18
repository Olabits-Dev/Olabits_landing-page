import styles from "./skill-card.module.css";

export default function SkillCard({ name, level, description }) {
  return (
    <article className={styles.card}>
      <div className={styles.top}>
        <h3>{name}</h3>
        <span className={styles.level}>{level}</span>
      </div>
      <p>{description}</p>
    </article>
  );
}
