// app.js

// -----------------------------
// WhatsApp Contact Configuration
// -----------------------------
const WHATSAPP_NUMBER = "2348035208600";
const DEFAULT_MESSAGE =
  "Hello Samuel, I saw your landing page and I’d like to discuss a project.";

// GitHub repos auto-loader
const GITHUB_USERNAME = "Olabits-Dev";
const REPO_LIMIT = 6; // show 6 latest repos

function buildWhatsAppLink(number, message) {
  const msg = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${msg}`;
}

function openWhatsAppChat() {
  const url = buildWhatsAppLink(WHATSAPP_NUMBER, DEFAULT_MESSAGE);
  window.open(url, "_blank", "noopener,noreferrer");
}

// Bind WhatsApp buttons
const whatsappBtn = document.getElementById("whatsappBtn");
const whatsappBtn2 = document.getElementById("whatsappBtn2");
const floatingWa = document.getElementById("floatingWa");

if (whatsappBtn) whatsappBtn.addEventListener("click", openWhatsAppChat);
if (whatsappBtn2) whatsappBtn2.addEventListener("click", openWhatsAppChat);
if (floatingWa) floatingWa.addEventListener("click", openWhatsAppChat);

// -----------------------------
// Mobile Nav Toggle
// -----------------------------
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });

  navLinks.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// -----------------------------
// Footer year
// -----------------------------
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// -----------------------------
// Count-up animation for stats
// -----------------------------
function animateCount(el, target, duration = 900) {
  const startTime = performance.now();

  function tick(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const value = Math.floor(target * progress);
    el.textContent = value;
    if (progress < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

function initStats() {
  const statEls = document.querySelectorAll("[data-count]");
  statEls.forEach((el) => {
    const target = parseInt(el.getAttribute("data-count"), 10) || 0;
    animateCount(el, target);
  });
}

// -----------------------------
// Skills bar animation (on scroll)
// -----------------------------
function initSkillBars() {
  const bars = document.querySelectorAll(".bar-fill[data-fill]");
  if (!bars.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el = entry.target;
        const fill = parseInt(el.getAttribute("data-fill"), 10) || 0;
        el.style.width = `${Math.max(0, Math.min(fill, 100))}%`;

        observer.unobserve(el);
      });
    },
    { threshold: 0.35 }
  );

  bars.forEach((b) => observer.observe(b));
}

// -----------------------------
// GitHub repo auto-loader
// -----------------------------
function fmtDate(iso) {
  if (!iso) return "—";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "2-digit" });
}

function safeText(s, fallback = "") {
  if (!s) return fallback;
  return String(s);
}

function createRepoCard(repo) {
  const name = safeText(repo.name, "Repository");
  const url = safeText(repo.html_url, "#");
  const desc = safeText(repo.description, "No description provided.");
  const lang = safeText(repo.language, "Project");
  const updated = fmtDate(repo.updated_at);
  const stars = typeof repo.stargazers_count === "number" ? repo.stargazers_count : 0;

  const el = document.createElement("article");
  el.className = "repo";

  el.innerHTML = `
    <div class="repo-top">
      <h3 class="repo-name">
        <a href="${url}" target="_blank" rel="noreferrer">${name}</a>
      </h3>
      <span class="repo-pill">${lang}</span>
    </div>
    <p class="repo-desc">${desc}</p>
    <div class="repo-meta">
      <span>Updated: ${updated}</span>
      <span>★ ${stars}</span>
    </div>
  `;

  return el;
}

async function loadGitHubRepos() {
  const grid = document.getElementById("repoGrid");
  const status = document.getElementById("repoStatus");
  if (!grid || !status) return;

  status.textContent = "Loading repositories...";
  grid.innerHTML = "";

  const endpoint = `https://api.github.com/users/${encodeURIComponent(
    GITHUB_USERNAME
  )}/repos?sort=updated&per_page=${REPO_LIMIT}`;

  try {
    const res = await fetch(endpoint, {
      headers: { Accept: "application/vnd.github+json" },
    });

    if (!res.ok) {
      status.textContent = `Could not load repos (GitHub API: ${res.status}).`;
      return;
    }

    const repos = await res.json();
    if (!Array.isArray(repos) || repos.length === 0) {
      status.textContent = "No repositories found.";
      return;
    }

    const nonFork = repos.filter((r) => !r.fork);
    const final = (nonFork.length ? nonFork : repos).slice(0, REPO_LIMIT);

    final.forEach((repo) => grid.appendChild(createRepoCard(repo)));
    status.textContent = "";
  } catch (err) {
    status.textContent =
      "Network error while loading repos. If you’re offline, projects won’t load.";
  }
}

// -----------------------------
// Init
// -----------------------------
document.addEventListener("DOMContentLoaded", () => {
  initStats();
  initSkillBars();
  loadGitHubRepos();
});