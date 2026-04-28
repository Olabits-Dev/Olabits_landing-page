import Link from "next/link";
import {
  blogPosts,
  profile,
  projectShowcase,
  skills,
} from "../lib/site-data";
import styles from "./page.module.css";

export default function HomePage() {
  const featuredProject = projectShowcase["GMT-Homes-Real_Estate"];
  const latestPost = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date))[0];
  const secondLatestPost = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date))[1];
  
  const topSkills = skills.slice(0, 10);

  return (
    <main className={styles.page}>
      <div className={styles.bentoGrid}>
        {/* Row 1: Intro (2 cols) + Latest Article (1 col) + Stats (1 col) */}
        <section className={`${styles.card} ${styles.introCard}`}>
          <div>
            <h1>{profile.name}</h1>
            <p>{profile.headline}</p>
            <div className={styles.ctaRow}>
              <Link href="/portfolio" className={styles.button}>Projects</Link>
              <Link href={profile.resumeUrl} className={styles.ghostButton}>CV</Link>
            </div>
          </div>
        </section>

        <section className={`${styles.card} ${styles.featuredCard}`}>
          <div 
            className={styles.featuredContent}
            style={{ 
              backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <span className={styles.featuredTag}>Featured Project</span>
            <h2>{featuredProject.title}</h2>
            <p>{featuredProject.summary}</p>
            <Link href="/portfolio" className={styles.button} style={{ marginTop: '16px', width: 'fit-content' }}>
              View Details
            </Link>
          </div>
        </section>

        <section className={styles.card}>
          <span className={styles.statLabel}>Status</span>
          <p style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--accent-text)' }}>
            {profile.availability.split(',')[0]}
          </p>
          <Link href="/contact" className={styles.ghostButton} style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
            Hire Me
          </Link>
        </section>

        <section className={`${styles.card} ${styles.statsCard}`}>
          <span className={styles.statValue}>{blogPosts.length}</span>
          <span className={styles.statLabel}>Articles Published</span>
        </section>

        {/* Row 2: (Featured Project spans 2 rows) + GitHub + LinkedIn */}
        <Link 
          href={profile.githubUrl} 
          target="_blank" 
          className={`${styles.card} ${styles.utilityCard}`}
        >
          <span className={styles.socialLink}>GitHub</span>
          <p style={{ fontSize: '0.85rem' }}>@Olabits-Dev</p>
        </Link>

        <Link 
          href={profile.linkedinUrl} 
          target="_blank" 
          className={`${styles.card} ${styles.utilityCard}`}
        >
          <span className={styles.socialLink}>LinkedIn</span>
          <p style={{ fontSize: '0.85rem' }}>Samuel Atilola</p>
        </Link>

        {/* Row 3: Skills (2 cols) + Latest Post (1 col) + Stats (1 col) */}
        <section className={`${styles.card} ${styles.skillsCard}`}>
          <span className={styles.statLabel} style={{ marginBottom: '12px' }}>Tech Stack</span>
          <div>
            {topSkills.map(skill => (
              <span key={skill.name} className={styles.skillBadge}>{skill.name}</span>
            ))}
          </div>
        </section>

        <section className={styles.card}>
          <span className={styles.statLabel}>Latest Note</span>
          <h3 style={{ fontSize: '1.1rem', margin: '8px 0' }}>{latestPost.title}</h3>
          <Link href={`/blog/${latestPost.slug}`} className={styles.ghostButton} style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
            Read
          </Link>
        </section>

        <section className={styles.card}>
          <span className={styles.statLabel}>Location</span>
          <p style={{ fontSize: '1.25rem', fontWeight: '700' }}>{profile.location}</p>
          <p style={{ fontSize: '0.85rem' }}>Remote Friendly</p>
        </section>

        {/* Row 4: Secondary Project (1 col) + Newsletter/Utility (1 col) + More Posts (2 cols) */}
        <section className={styles.card}>
          <span className={styles.statLabel}>Second Note</span>
          <h3 style={{ fontSize: '1.1rem', margin: '8px 0' }}>{secondLatestPost.title}</h3>
          <Link href={`/blog/${secondLatestPost.slug}`} className={styles.ghostButton} style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
            Read
          </Link>
        </section>

        <section className={styles.card} style={{ gridColumn: 'span 2' }}>
           <span className={styles.statLabel}>About Me</span>
           <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '12px 0' }}>
             {profile.background.substring(0, 120)}...
           </p>
           <Link href="/about" className={styles.ghostButton} style={{ width: 'fit-content' }}>Learn More</Link>
        </section>

        <section className={styles.card}>
          <span className={styles.statLabel}>Let&apos;s Talk</span>
          <Link href="/contact" className={styles.button}>Contact</Link>
        </section>

      </div>
    </main>
  );
}
