import { ArrowRight, ArrowDown } from "lucide-react";
import ProjectPreview from "@/components/site/ProjectPreview";
import { profile, projects } from "@/lib/portfolio";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ivory pt-[68px]" aria-label="Introduction">
      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between gap-4 border-b border-ink/12 py-4">
          <span className="meta-label text-ink/45">Portfolio — Vol. 01</span>
          <span className="meta-label hidden text-ink/45 sm:block">{profile.location} · GMT+7</span>
          <span className="meta-label text-ink/45">Section 00 / Intro</span>
        </div>

        <div className="flex flex-col items-center pb-0 pt-14 text-center md:pt-20">
          <div className="animate-rise flex items-center gap-3" style={{ animationDelay: "60ms" }}>
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/35 font-heading text-[15px] leading-none tracking-tight text-ink md:h-12 md:w-12 md:text-base">
              {profile.initials}
            </span>
            <span className="meta-label text-left leading-[1.6] text-ink/60">
              Independent software developer
              <br className="sm:hidden" /> — Indonesia
            </span>
          </div>

          <h1
            className="animate-rise group mt-8 max-w-[19ch] font-heading text-[clamp(2.5rem,1.5rem+5.2vw,4.6rem)] leading-[1.05] tracking-[-0.02em] text-ink sm:max-w-[24ch]"
            style={{ animationDelay: "150ms" }}
          >
            Building practical software.{" "}
            <span className="relative inline-block italic">
              Integrating intelligent technology.
              <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-center scale-x-0 bg-flash transition-transform duration-500 ease-out group-hover:scale-x-100" />
            </span>
          </h1>

          <p
            className="animate-rise mt-7 max-w-[620px] text-[15px] leading-[1.7] text-ink/70 md:text-base"
            style={{ animationDelay: "260ms" }}
          >
            I'm Umar Nagieb, a software developer focused on web applications, backend integration, and applied AI
            development. I enjoy transforming business requirements into practical, functional, and user-focused digital
            solutions.
          </p>

          <div
            className="animate-rise mt-9 flex flex-wrap items-center justify-center gap-x-2 gap-y-3"
            style={{ animationDelay: "360ms" }}
          >
            <a
              href="#work"
              className="group inline-flex h-[44px] items-stretch overflow-hidden rounded-[3px] border border-ink bg-flash text-ink transition-colors duration-300 hover:bg-ink hover:text-ivory"
            >
              <span className="inline-flex items-center px-5 text-[13px] font-medium tracking-[0.01em]">
                Explore My Work
              </span>
              <span className="w-px self-stretch bg-current opacity-30" aria-hidden="true" />
              <span className="inline-flex w-[44px] items-center justify-center">
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>
            <a
              href="#contact"
              className="group inline-flex h-[44px] items-center gap-2 px-4 text-[13px] font-medium text-ink"
            >
              <span className="relative">
                Get in Touch
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-100 bg-ink/30 transition-colors duration-300 group-hover:bg-flash" />
              </span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          <div
            className="animate-rise mt-12 flex w-full max-w-[760px] items-center justify-between gap-6 border-t border-ink/12 pt-4"
            style={{ animationDelay: "460ms" }}
          >
            <span className="meta-label flex items-center gap-2 text-ink/60">
              <span className="h-1.5 w-1.5 rounded-full bg-flash animate-pulse-dot" />
              {profile.availability}
            </span>
            <a href="#about" className="meta-label group flex items-center gap-2 text-ink/45 hover:text-ink">
              Scroll
              <span className="relative block h-4 w-3 overflow-hidden">
                <ArrowDown className="animate-scroll-cue h-3 w-3" />
              </span>
            </a>
          </div>
        </div>

        {/* Index strip — the three live projects, bleeding off the bottom edge */}
        <div className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-0 md:mt-16 md:grid md:grid-cols-3 md:gap-4 md:overflow-visible">
          {projects.map((project, index) => (
            <a
              key={project.number}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative block w-[78vw] shrink-0 snap-start sm:w-[46vw] md:w-auto ${
                index === 1 ? "md:translate-y-[clamp(0px,4vw,72px)]" : ""
              }`}
              aria-label={`${project.name} — open live website`}
            >
              <div className="relative h-[290px] overflow-hidden rounded-t-[10px] border border-b-0 border-ink/15 sm:h-[340px] md:h-[min(36vw,440px)]">
                <ProjectPreview project={project} variant="tile" />
                <div className="absolute inset-0 flex items-end justify-between bg-ink/0 p-4 opacity-0 transition-all duration-500 group-hover:bg-ink/10 group-hover:opacity-100">
                  <span className="meta-label rounded-[2px] bg-ivory/95 px-2 py-1 text-ink">View live</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ivory/95 text-ink">
                    <ArrowRight className="h-3.5 w-3.5 -rotate-45" />
                  </span>
                </div>
              </div>
              <div className="flex items-baseline justify-between gap-3 border-t border-ink/15 py-3">
                <span className="font-heading text-[15px] leading-tight text-ink">{project.name}</span>
                <span className="meta-label shrink-0 text-ink/40">{project.number}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}