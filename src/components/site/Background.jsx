import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import { certifications, languages } from "@/lib/portfolio";

export default function Background() {
  return (
    <section id="background" className="border-t border-ink/12 py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-10">
        <Reveal>
          <SectionHeading index="06" label="Background" title="Education, certifications & languages." />
        </Reveal>

        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-4">
            <p className="meta-label border-b border-ink/12 pb-2 text-ink/40">Education</p>
            <h3 className="mt-5 font-heading text-[22px] leading-tight text-ink">Bachelor of Computer Science</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-ink/65">
              University of Indraprasta
              <br />
              South Jakarta
            </p>
            <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-ink/12 pt-4">
              <div>
                <dt className="meta-label text-ink/40">Graduated</dt>
                <dd className="mt-1 font-mono text-[13px] text-ink/80">2025</dd>
              </div>
              <div>
                <dt className="meta-label text-ink/40">GPA</dt>
                <dd className="mt-1 font-mono text-[13px] text-ink/80">3.59 / 4.00</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal className="md:col-span-4" delay={90}>
            <p className="meta-label border-b border-ink/12 pb-2 text-ink/40">Certifications</p>
            <ul className="mt-5 space-y-4">
              {certifications.map((certification, index) => (
                <li key={certification.name} className="flex gap-3">
                  <span className="meta-label pt-1 text-flash">0{index + 1}</span>
                  <span>
                    <span className="block text-[14.5px] leading-snug text-ink">{certification.name}</span>
                    <span className="meta-label mt-1 block text-ink/40">{certification.issuer}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="md:col-span-3 md:col-start-10" delay={180}>
            <p className="meta-label border-b border-ink/12 pb-2 text-ink/40">Languages</p>
            <ul className="mt-5 space-y-5">
              {languages.map((language) => (
                <li key={language.name}>
                  <p className="text-[14.5px] text-ink">{language.name}</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-ink/55">{language.level}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}