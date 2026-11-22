import { Image } from "@/components/ui/image";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import { focusAreas, profile } from "@/lib/portfolio";

const facts = [
  { term: "Based in", value: profile.location },
  { term: "Focus", value: "Web & applied AI" },
  { term: "Degree", value: "B. Computer Science" },
  { term: "Availability", value: "Remote" },
];

export default function About() {
  return (
    <section id="about" className="border-t border-ink/12 py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-10">
        <Reveal>
          <SectionHeading index="01" label="About" />
        </Reveal>

        <div className="mt-10 grid gap-x-10 gap-y-10 md:mt-14 md:grid-cols-12">
          <Reveal className="md:col-span-6">
            <h2 className="max-w-[16ch] font-heading text-[clamp(1.95rem,1.1rem+3vw,3.4rem)] leading-[1.06] text-ink">
              Curious by nature. <span className="italic text-ink/75">Practical by design.</span>
            </h2>
            <dl className="mt-9 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-ink/12 pt-6">
              {facts.map((fact) => (
                <div key={fact.term}>
                  <dt className="meta-label text-ink/40">{fact.term}</dt>
                  <dd className="mt-1.5 text-[14px] text-ink/80">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal className="md:col-span-5 md:col-start-8" delay={120}>
            <div className="space-y-5 text-[15px] leading-[1.75] text-ink/70">
              <p>
                I'm a Computer Science graduate from University of Indraprasta with practical experience in software
                development, website creation, backend integration, and applied AI technologies.
              </p>
              <p>
                My development experience includes freelance projects for businesses, where I work with clients to
                understand their needs and deliver digital solutions that are both functional and accessible.
              </p>
              <p>
                I also have previous experience developing a Java desktop application for vehicle inventory and sales
                transaction management, which strengthened my understanding of application architecture, database
                management, and software problem-solving.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-12 md:items-start">
          <Reveal className="md:col-span-5">
            <figure>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[3px] border border-ink/12 bg-ink">
                <Image
                  src="https://images.unsplash.com/photo-1518186233392-c232efbf2373?auto=format&fit=crop&w=1200&q=85"
                  alt="Macro study of a precision mechanical movement, standing in for a working habit of exactness"
                  fittingType="fill"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="meta-label mt-3 text-ink/40">
                Fig. 01 — Precision as a working habit
              </figcaption>
            </figure>
          </Reveal>

          <div className="md:col-span-6 md:col-start-7">
            <p className="meta-label mb-5 text-ink/40">Three areas of focus</p>
            <div className="border-t border-ink/12">
              {focusAreas.map((area, index) => (
                <Reveal key={area.number} delay={index * 90}>
                  <div className="group grid grid-cols-[auto_1fr] gap-x-6 border-b border-ink/12 py-6 transition-colors duration-300 hover:bg-paper/70">
                    <span className="meta-label pt-1 text-flash">{area.number}</span>
                    <div>
                      <h3 className="font-heading text-[19px] leading-tight text-ink">{area.title}</h3>
                      <p className="mt-2 max-w-[42ch] text-[14.5px] leading-relaxed text-ink/65">{area.body}</p>
                    </div>
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