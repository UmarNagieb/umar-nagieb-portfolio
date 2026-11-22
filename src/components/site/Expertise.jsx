import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import { skillGroups } from "@/lib/portfolio";

export default function Expertise() {
  return (
    <section id="expertise" className="border-t border-ink/12 py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <SectionHeading index="02" label="Expertise" title="Tools, technologies & engineering practices." />
            <p className="meta-label mt-8 max-w-[30ch] leading-[1.9] text-ink/40">
              A working toolkit — no proficiency scores, no progress bars.
            </p>
          </Reveal>

          <div className="md:col-span-7 md:col-start-6">
            <div className="border-t border-ink/12">
              {skillGroups.map((group, index) => (
                <Reveal key={group.number} delay={index * 60}>
                  <div className="grid gap-4 border-b border-ink/12 py-7 sm:grid-cols-[190px_1fr] sm:gap-8">
                    <div className="flex items-baseline gap-3 sm:block">
                      <span className="meta-label text-flash">{group.number}</span>
                      <h3 className="mt-0 font-heading text-[17px] leading-snug text-ink sm:mt-2">{group.title}</h3>
                    </div>
                    <ul className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="cursor-default rounded-[2px] border border-ink/20 px-2.5 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.08em] text-ink/70 transition-colors duration-200 hover:border-flash hover:text-ink"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}