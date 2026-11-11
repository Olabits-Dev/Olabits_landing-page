"use client";

import { useState } from "react";
import ProjectCard from "./project-card";
import styles from "./portfolio-explorer.module.css";

const FILTERS = ["All", "Mobile Apps", "Full-Stack & SaaS", "AI & Automation"];

function matchesFilter(project, activeFilter) {
  if (activeFilter === "All") {
    return true;
  }

  if (project.filterGroup === activeFilter) {
    return true;
  }

  if (
    activeFilter === "Full-Stack & SaaS" &&
    project.category.toLowerCase().includes("full-stack")
  ) {
    return true;
  }

  return false;
}

export default function PortfolioExplorer({ featuredProjects, otherProjects }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const allProjects = [...featuredProjects, ...otherProjects];
  const visibleFeatured = featuredProjects.filter((project) =>
    matchesFilter(project, activeFilter),
  );
  const visibleOther = otherProjects.filter((project) =>
    matchesFilter(project, activeFilter),
  );

  function countFor(filterName) {
    return allProjects.filter((project) => matchesFilter(project, filterName)).length;
  }

  return (
    <div className={styles.explorer}>
      <div className={styles.filterBar} role="group" aria-label="Filter projects by discipline">
        {FILTERS.map((filterName) => {
          const isSelected = activeFilter === filterName;
          return (
            <button
              key={filterName}
              type="button"
              aria-pressed={isSelected}
              className={`${styles.filterButton} ${isSelected ? styles.filterButtonActive : ""}`}
              onClick={() => setActiveFilter(filterName)}
            >
              {isSelected ? (
                <span aria-hidden="true" className={styles.checkMark}>
                  ✓
                </span>
              ) : null}
              <span>{filterName}</span>
              <span className={styles.count}>{countFor(filterName)}</span>
            </button>
          );
        })}
      </div>

      {visibleFeatured.length > 0 && (
        <section className={styles.group}>
          <div className={styles.sectionHeader}>
            <h2>Featured Projects</h2>
            <p className={styles.lead}>
              Flagship web, mobile, AI SaaS, and automated software builds.
            </p>
          </div>
          <div className={styles.projectGrid}>
            {visibleFeatured.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}

      {visibleOther.length > 0 && (
        <section className={styles.group}>
          <div className={styles.sectionHeader}>
            <h2>Additional Shipped Systems</h2>
            <p className={styles.lead}>
              Supporting web platforms, dashboards, and marketplace applications.
            </p>
          </div>
          <div className={styles.projectGrid}>
            {visibleOther.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
