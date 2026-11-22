import { ArrowUpRight } from "lucide-react";
import ProjectPreview from "@/components/site/ProjectPreview";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import { projects } from "@/lib/portfolio";

export default function Projects() {
  return (
    <section id="work" className="border-t border-ink/12 py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-10">
        <Reveal>
          <SectionHeading
            index="03"
            label="Selected Work"
            title="Selected projects. Built with purpose."
            intro="Live websites built for service businesses. Each preview below is a representation of the published site — open the live link to see the real thing."
          />
        </Reveal>

        <div className="mt-6 md:mt-10">
          {projects.map((project, index) => (
            <article
              key={project.number}
              className={`mt-14 md:mt-20 ${index % 2 === 1 ? "md:ml-[12%]" : ""} ${index % 2 === 0 ? "md:mr-[6%]" : ""}`}
            >
              <Reveal>
                <div className="mb-4 flex items-baseline justify-between gap-4">
                  <span className="font-heading text-[clamp(2.6rem,1.6rem+3vw,4.5rem)] leading-none text-sage">
                    {project.number}
                  </span>
                  <span className="meta-label text-ink/40">{project.label}</span>
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-[4px] border border-ink/15 transition-colors duration-300 hover:border-ink/35"
                  aria-label={`Open ${project.name} live website in a new tab`}
                >
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-paper sm:aspect-[16/10]">
                    <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.015]">
                      <ProjectPreview project={project} variant="wide" />
                    </div>
                    <span className="pointer-events-none absolute right-4 top-4 hidden items-center gap-1.5 rounded-[2px] bg-ivory/95 px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:inline-flex">
                      Open live site
                      <ArrowUpRight className="h-3 w-3" />
                    </span>
                  </div>
                </a>

                <div className="mt-7 grid gap-x-10 gap-y-6 md:grid-cols-12">
                  <div className="md:col-span-7">
                    <p className="meta-label text-ink/45">{project.category}</p>
                    <h3 className="mt-3 font-heading text-[clamp(1.4rem,1rem+1.3vw,2rem)] leading-tight text-ink">
                      {project.name}
                    </h3>
                    <p className="mt-4 max-w-[54ch] text-[14.5px] leading-[1.7] text-ink/70">{project.description}</p>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-6 inline-flex items-center gap-2 border-b border-ink/30 pb-1 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink transition-colors duration-300 hover:border-flash"
                    >
                      View Live Website
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </div>

                  <div className="md:col-span-4 md:col-start-9">
                    <p className="meta-label border-b border-ink/12 pb-2 text-ink/40">Verified in build</p>
                    <ul className="mt-3 space-y-2">
                      {project.features.map((feature) => (
                        <li key={feature} className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink/60">
                          — {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}