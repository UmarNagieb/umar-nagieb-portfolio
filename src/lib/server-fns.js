import { createServerFn } from "@tanstack/react-start";

const GITHUB_USER = "UmarNagieb";

/**
 * Reads the public GitHub profile and latest repositories.
 * Returns { ok: false } when the API is unreachable so the UI can fall back
 * to a static profile card instead of inventing numbers.
 */
export const getGitHubProfile = createServerFn({ method: "GET" }).handler(async () => {
  const headers = { Accept: "application/vnd.github+json", "User-Agent": "umar-nagieb-portfolio" };

  try {
    const [profileRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USER}`, { headers }),
      fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=5&sort=updated`, { headers }),
    ]);

    if (!profileRes.ok || !reposRes.ok) return { ok: false };

    const profile = await profileRes.json();
    const repos = await reposRes.json();

    return {
      ok: true,
      publicRepos: typeof profile.public_repos === "number" ? profile.public_repos : null,
      joined: profile.created_at || null,
      repos: Array.isArray(repos)
        ? repos.map((repo) => ({
            name: repo.name,
            language: repo.language || null,
            url: repo.html_url,
            pushedAt: repo.pushed_at || null,
          }))
        : [],
    };
  } catch {
    return { ok: false };
  }
});