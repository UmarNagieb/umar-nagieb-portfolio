import { useEffect, useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import { getGitHubProfile } from "@/lib/server-fns";
import { profile } from "@/lib/portfolio";

function formatMonth(value) {
  if (!value) return null;
  return new Date(value).toLocaleDateString("en-US", { month: "short", year: "numeric", timeZone: "UTC" });
}

export default function GitHubSection() {
  const [data, setData] = useState(null);

  useEffect(() => {
    let alive = true;
    getGitHubProfile()
      .then((result) => alive && setData(result))
      .catch(() => alive && setData({ ok: false }));
    return () => {
      alive = false;
    };
  }, []);

  const live = data?.ok === true;
  const repos = live ? data.repos : [];

  return (
    <section id="code" className="border-t border-ink/12 py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-10">
        <Reveal>
          <SectionHeading index="07" label="Code & Development" title="Development in progress. Code in public." />
        </Reveal>

        <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <div className="relative overflow-hidden rounded-[3px] bg-ink p-7 text-ivory">
              <div className="flex items-start justify-between">
                <Github className="h-6 w-6 text-ivory/70" />
                <span className="meta-label text-ivory/35">Profile</span>
              </div>
              <p className="mt-10 font-heading text-[26px] leading-none">{profile.githubHandle}</p>
              <p className="meta-label mt-2.5 text-ivory/40">github.com/{profile.githubHandle}</p>

              <dl className="mt-8 flex gap-10 border-t border-ivory/15 pt-5">
                <div>
                  <dt className="meta-label text-ivory/35">Public repos</dt>
                  <dd className="mt-1.5 font-heading text-xl text-ivory">
                    {live && data.publicRepos !== null ? data.publicRepos : "—"}
                  </dd>
                </div>
                <div>
                  <dt className="meta-label text-ivory/35">Member since</dt>
                  <dd className="mt-1.5 font-heading text-xl text-ivory">
                    {live && data.joined ? new Date(data.joined).getUTCFullYear() : "—"}
                  </dd>
                </div>
              </dl>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex h-10 items-center gap-2 rounded-[2px] border border-ivory/40 px-4 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ivory transition-colors duration-300 hover:border-flash hover:bg-flash hover:text-ink"
              >
                Explore GitHub
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>

          <Reveal className="md:col-span-6 md:col-start-7" delay={100}>
            <p className="meta-label border-b border-ink/12 pb-2 text-ink/40">Recently updated repositories</p>
            {repos.length > 0 ? (
              <ul className="divide-y divide-ink/12">
                {repos.map((repo) => (
                  <li key={repo.name}>
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-4 py-4 transition-colors duration-200 hover:text-flash"
                    >
                      <span className="min-w-0">
                        <span className="block truncate font-mono text-[12.5px] tracking-[0.02em] text-ink group-hover:text-flash">
                          {repo.name}
                        </span>
                        <span className="meta-label mt-1 block text-ink/40">
                          {repo.language || "Repository"} · updated {formatMonth(repo.pushedAt) || "recently"}
                        </span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-ink/30 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-flash" />
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-5 max-w-[44ch] text-[14.5px] leading-relaxed text-ink/60">
                {data === null
                  ? "Loading public repository activity…"
                  : "Live repository data is unavailable right now. Open the GitHub profile to browse the latest work directly."}
              </p>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}