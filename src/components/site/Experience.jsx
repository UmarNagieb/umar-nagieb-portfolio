import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import { experience } from "@/lib/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-ink/12 py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-10">
        <Reveal>
          <SectionHeading index="05" label="Experience" title="Experience built through practical development." />
        </Reveal>

        <div className="mt-12 border-b border-ink/12 md:mt-16">
          {experience.map((job, index) => (
            <Reveal key={job.role} delay={index * 100}>
              <div className="grid gap-x-10 gap-y-6 border-t border-ink/12 py-9 md:grid-cols-12 md:py-12">
                <div className="md:col-span-3">
                  <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink/70">{job.period}</p>
                  <p className="meta-label mt-2 text-flash">{job.type}</p>
                </div>

                <div className="md:col-span-7">
                  <h3 className="font-heading text-[clamp(1.35rem,1rem+1vw,1.75rem)] leading-tight text-ink">
                    {job.role}
                  </h3>
                  <p className="mt-1.5 text-[13.5px] text-ink/55">
                    {job.organisation} · {job.place}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3 text-[14.5px] leading-[1.7] text-ink/70">
                        <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-flash" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="hidden md:col-span-2 md:col-start-11 md:block md:text-right">
                  <span className="font-heading text-4xl leading-none text-ink/15">0{index + 1}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}