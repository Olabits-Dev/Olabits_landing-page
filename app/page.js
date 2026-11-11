import Link from "next/link";
import {
  blogPosts,
  experience,
  profile,
  projectShowcase,
  services,
  skills,
} from "../lib/site-data";
import styles from "./page.module.css";

export default function HomePage() {
  const featuredProject = projectShowcase["farmitly-mobile"];
  const latestPost = [...blogPosts].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  )[0];
  const topSkills = skills.slice(0, 12);
  const projectCount = Object.keys(projectShowcase).length;

  return (
    <main id="main-content" tabIndex={-1} className={styles.page}>
      <div className={styles.bentoGrid}>
        {/* Row 1 (Cols 1-2): Client-ready Hero Card */}
        <section className={`${styles.card} ${styles.introCard}`}>
          <div className={styles.heroHeader}>
            <img
              src={profile.photo.src}
              alt={profile.photo.alt}
              width="72"
              height="72"
              fetchPriority="high"
              className={styles.avatar}
            />
            <div className={styles.heroIdentity}>
              <span className={styles.availabilityPill}>
                <span aria-hidden="true" className={styles.statusDot} />
                <span>Available for Projects &amp; Roles</span>
              </span>
              <h1>{profile.name}</h1>
              <p className={styles.roleBadge}>{profile.role}</p>
            </div>
          </div>

          <p className={styles.heroHeadline}>{profile.headline}</p>

          <div className={styles.ctaRow}>
            <Link
              href={profile.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className={styles.button}
            >
              Start a Project
            </Link>
            <Link href="/portfolio" className={styles.ghostButton}>
              View Portfolio
            </Link>
            <Link href={profile.resumeUrl} className={styles.ghostButton}>
              Download CV
            </Link>
          </div>
        </section>

        {/* Rows 1-2 (Cols 3-4): Flagship Mobile + Full-Stack Showcase */}
        <section className={`${styles.card} ${styles.featuredCard}`}>
          <div className={styles.featuredContent}>
            <div className={styles.featuredCopy}>
              <span className={styles.featuredTag}>Flagship Mobile Build</span>
              <h2>{featuredProject.title}</h2>
              <p>{featuredProject.summary}</p>
              <div className={styles.featuredStack}>
                {featuredProject.stack.slice(0, 4).map((tech) => (
                  <span key={tech} className={styles.featuredStackChip}>
                    {tech}
                  </span>
                ))}
              </div>
              <Link href="/portfolio" className={styles.featuredButton}>
                Explore {projectCount} Shipped Projects &rarr;
              </Link>
            </div>

            {featuredProject.image ? (
              <div className={styles.featuredVisual}>
                <img
                  src={featuredProject.image}
                  alt="Farmitly offline-first mobile app feed inventory and valuation screen"
                  width="260"
                  height="520"
                  fetchPriority="high"
                  className={styles.featuredScreenshot}
                />
              </div>
            ) : null}
          </div>
        </section>

        {/* Row 2 (Cols 1-2): Trust Metrics */}
        <section className={`${styles.card} ${styles.statsCard}`}>
          <span className={styles.statValue}>4+ Yrs</span>
          <span className={styles.statLabel}>Production Experience</span>
          <p className={styles.statNote}>Web platforms, mobile apps &amp; APIs</p>
        </section>

        <section className={`${styles.card} ${styles.statsCard}`}>
          <span className={styles.statValue}>{projectCount}+</span>
          <span className={styles.statLabel}>Shipped Systems</span>
          <p className={styles.statNote}>SaaS, Android .aab, AI &amp; fintech</p>
        </section>

        {/* Row 3 (Cols 1-2): Services for Clients + (Cols 3-4): Tech Stack */}
        <section className={`${styles.card} ${styles.servicesCard}`}>
          <div className={styles.cardHeader}>
            <span className={styles.statLabel}>What I Build for Clients</span>
            <Link href="/contact" className={styles.inlineLink}>
              Request quote &rarr;
            </Link>
          </div>
          <div className={styles.serviceGrid}>
            {services.map((service) => (
              <div key={service.title} className={styles.serviceItem}>
                <h3>{service.title}</h3>
                <p>{service.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={`${styles.card} ${styles.skillsCard}`}>
          <div className={styles.cardHeader}>
            <span className={styles.statLabel}>Full-Stack &amp; Mobile Tech Stack</span>
            <Link href="/skills" className={styles.inlineLink}>
              View all {skills.length} &rarr;
            </Link>
          </div>
          <div className={styles.skillList}>
            {topSkills.map((skill) => (
              <span key={skill.name} className={styles.skillBadge}>
                {skill.name}
              </span>
            ))}
          </div>
        </section>

        {/* Row 4 (Cols 1-2): Experience Snapshot + Col 3: GitHub + Col 4: LinkedIn */}
        <section className={`${styles.card} ${styles.experienceCard}`}>
          <div className={styles.cardHeader}>
            <span className={styles.statLabel}>Engineering Experience</span>
            <Link href="/about" className={styles.inlineLink}>
              Full history &rarr;
            </Link>
          </div>
          <div className={styles.experienceList}>
            {experience.map((job) => (
              <div key={job.company} className={styles.experienceRow}>
                <div>
                  <h3>{job.company}</h3>
                  <p>{job.role}</p>
                </div>
                <span className={styles.periodPill}>{job.period}</span>
              </div>
            ))}
          </div>
        </section>

        <Link
          href={profile.githubUrl}
          target="_blank"
          rel="noreferrer"
          className={`${styles.card} ${styles.utilityCard}`}
        >
          <span className={styles.statLabel}>Open Source</span>
          <span className={styles.socialLink}>GitHub</span>
          <p className={styles.utilitySub}>@Olabits-Dev</p>
        </Link>

        <Link
          href={profile.linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className={`${styles.card} ${styles.utilityCard}`}
        >
          <span className={styles.statLabel}>Network</span>
          <span className={styles.socialLink}>LinkedIn</span>
          <p className={styles.utilitySub}>Samuel Atilola</p>
        </Link>

        {/* Row 5 (Cols 1-3): Direct Client Conversion CTA + (Col 4): Engineering Notes */}
        <section className={`${styles.card} ${styles.ctaBannerCard}`}>
          <div className={styles.ctaBannerContent}>
            <span className={styles.statLabel}>
              {profile.location} &bull; Serving Africa &amp; Remote Global Teams
            </span>
            <h2>Need a reliable engineer to build your web platform, mobile app, or AI tool?</h2>
            <p className={styles.ctaBannerLead}>
              From product architecture and UI execution to backend APIs, payments, and Play Store
              builds — get a practical, tested product shipped fast.
            </p>
          </div>
          <div className={styles.ctaRow}>
            <Link
              href={profile.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className={styles.button}
            >
              Chat on WhatsApp
            </Link>
            <Link href="/contact" className={styles.ghostButton}>
              Send Project Brief
            </Link>
          </div>
        </section>

        <section className={`${styles.card} ${styles.notesCard}`}>
          <span className={styles.statLabel}>Architecture Note</span>
          <h3 className={styles.noteTitle}>{latestPost.title}</h3>
          <Link href={`/blog/${latestPost.slug}`} className={styles.inlineLink}>
            Read article &rarr;
          </Link>
        </section>
      </div>
    </main>
  );
}
