import { Image } from "@/components/ui/image";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import { engineeringAreas } from "@/lib/portfolio";

export default function Engineering() {
  return (
    <section id="engineering" className="bg-ink py-20 text-ivory md:py-28">
      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-10">
        <Reveal>
          <SectionHeading
            dark
            index="04"
            label="Engineering"
            title="Exploring the intersection of software and intelligent technology."
          />
        </Reveal>

        <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="max-w-[46ch] text-[15px] leading-[1.75] text-ivory/70">
              My experience extends beyond traditional web development into applied AI technologies, API integration,
              data processing, and automation. I focus on connecting technologies to practical software use cases.
            </p>
            <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-[3px] border border-ivory/15">
              <Image
                src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=85"
                alt="Brutalist concrete planes meeting at a sharp angle against a deep navy sky"
                fittingType="fill"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <div className="md:col-span-6 md:col-start-7">
            <div className="grid gap-x-8 sm:grid-cols-2">
              {engineeringAreas.map((area, index) => (
                <Reveal key={area.number} delay={index * 80}>
                  <div className="border-t border-ivory/20 py-6">
                    <span className="meta-label text-flash">{area.number}</span>
                    <h3 className="mt-3 font-heading text-[19px] leading-tight text-ivory">{area.title}</h3>
                    <p className="mt-2.5 max-w-[34ch] text-[14px] leading-relaxed text-ivory/60">{area.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <p className="mt-8 border-t border-ivory/20 pt-5 font-mono text-[10px] uppercase leading-[1.9] tracking-[0.13em] text-ivory/40">
              Presented as technical experience and areas of application. No public AI product or client case study is
              claimed here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}