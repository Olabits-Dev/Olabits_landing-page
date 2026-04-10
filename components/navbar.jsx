"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "../lib/site-data";
import styles from "./navbar.module.css";
import ThemeToggle from "./theme-toggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  function handleToggleMenu() {
    setMenuOpen((current) => !current);
  }

  function handleCloseMenu() {
    setMenuOpen(false);
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.brand} onClick={handleCloseMenu}>
          <span className={styles.brandDot} />
          <span className={styles.brandCopy}>
            <strong>{profile.shortName}</strong>
            <small>{profile.alias}</small>
          </span>
        </Link>

        <div className={styles.actions}>
          <div className={styles.controls}>
            <ThemeToggle className={styles.themeToggle} />

            <button
              type="button"
              className={`${styles.menuButton} ${menuOpen ? styles.menuButtonOpen : ""}`}
              aria-expanded={menuOpen}
              aria-controls="primary-navigation"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={handleToggleMenu}
            >
              <span className={styles.srOnly}>
                {menuOpen ? "Close navigation menu" : "Open navigation menu"}
              </span>
              <span className={styles.menuIcon} aria-hidden="true">
                <span className={styles.menuLine} />
                <span className={styles.menuLine} />
                <span className={styles.menuLine} />
              </span>
            </button>
          </div>

          <div
            id="primary-navigation"
            className={`${styles.links} ${menuOpen ? styles.linksOpen : ""}`}
          >
            {links.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.link} ${isActive ? styles.linkActive : ""}`}
                  onClick={handleCloseMenu}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
