import { profile, projectShowcase } from "./site-data";

const githubApiUrl = `https://api.github.com/users/${profile.githubUsername}/repos?per_page=100&sort=updated`;

function humanizeRepoName(name) {
  return name
    .replace(/[-_]+/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((word) => {
      if (/[0-9]/.test(word)) {
        return word.toUpperCase();
      }

      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}

function inferCategory(name) {
  const value = name.toLowerCase();

  if (value.includes("dashboard")) {
    return "Dashboard App";
  }

  if (value.includes("landing")) {
    return "Landing Page";
  }

  if (value.includes("tracker")) {
    return "Productivity App";
  }

  if (value.includes("job")) {
    return "Automation Tool";
  }

  if (value.includes("blog")) {
    return "Content Platform";
  }

  if (value.includes("saas")) {
    return "SaaS Project";
  }

  return "Web Project";
}

function buildFallbackSummary(repo, override) {
  if (override.summary) {
    return override.summary;
  }

  const category = inferCategory(repo.name).toLowerCase();
  const language = repo.language || "modern web technologies";

  return `${humanizeRepoName(repo.name)} is a ${category} published on GitHub and built primarily with ${language}.`;
}

function normalizeProject(repo) {
  const override = projectShowcase[repo.name] ?? {};
  const stack =
    override.stack?.length > 0
      ? override.stack
      : [repo.language].filter(Boolean);

  return {
    id: repo.id,
    name: repo.name,
    title: override.title ?? humanizeRepoName(repo.name),
    category: override.category ?? inferCategory(repo.name),
    status: override.status ?? "Public repository",
    summary: buildFallbackSummary(repo, override),
    highlights: override.highlights ?? [],
    stack,
    language: repo.language || stack[0] || "Not specified",
    repoUrl: repo.html_url,
    liveUrl: override.liveUrl || repo.homepage || "",
    updatedAt: repo.updated_at,
    pushedAt: repo.pushed_at,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    featured: Boolean(override.featured),
  };
}

async function fetchGitHubRepos() {
  try {
    const response = await fetch(githubApiUrl, {
      headers: {
        Accept: "application/vnd.github+json",
      },
      next: {
        revalidate: 3600,
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API request failed with status ${response.status}`);
    }

    const repos = await response.json();

    return repos
      .filter((repo) => !repo.fork && !repo.archived)
      .sort((left, right) => new Date(right.pushed_at) - new Date(left.pushed_at));
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn("Unable to load portfolio projects from GitHub.", error);
    }

    return [];
  }
}

function buildFallbackProjects() {
  return Object.entries(projectShowcase).map(([name, project]) =>
    normalizeProject({
      id: name,
      name,
      language: project.stack?.[0] || null,
      html_url: `${profile.githubUrl}/${name}`,
      homepage: project.liveUrl || "",
      updated_at: new Date().toISOString(),
      pushed_at: new Date().toISOString(),
      stargazers_count: 0,
      forks_count: 0,
    }),
  );
}

export async function getPortfolioProjects() {
  const repos = await fetchGitHubRepos();
  const projects = repos.length > 0 ? repos.map(normalizeProject) : buildFallbackProjects();

  return projects.sort((left, right) => {
    if (left.featured !== right.featured) {
      return left.featured ? -1 : 1;
    }

    return new Date(right.pushedAt) - new Date(left.pushedAt);
  });
}

export async function getPortfolioPageData() {
  const projects = await getPortfolioProjects();
  const primaryLanguages = [...new Set(projects.map((project) => project.language).filter(Boolean))];

  return {
    githubUrl: profile.githubUrl,
    repoCount: projects.length,
    featuredCount: projects.filter((project) => project.featured).length,
    primaryLanguages: primaryLanguages.slice(0, 4),
    projects,
  };
}
