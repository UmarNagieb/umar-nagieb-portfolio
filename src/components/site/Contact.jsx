import { useState } from "react";
import { ArrowUpRight, Check, Copy, Github, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/site/ContactForm";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import { profile } from "@/lib/portfolio";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="bg-ink text-ivory">
      <div className="mx-auto w-full max-w-[1320px] px-5 py-20 sm:px-8 md:py-28 lg:px-10">
        <Reveal>
          <SectionHeading
            dark
            index="08"
            label="Contact"
            title="Have a project or opportunity in mind?"
            intro="I'm open to discussing software development opportunities, remote positions, and projects involving web applications, API integration, and applied AI technologies."
          />
        </Reveal>

        <div className="mt-12 grid gap-14 md:mt-16 md:grid-cols-12 md:gap-10">
          <Reveal className="md:col-span-6">
            <a href={`mailto:${profile.email}`} className="group block">
              <span className="meta-label text-ivory/40">Email</span>
              <span className="mt-3 block break-all font-heading text-[clamp(1.3rem,0.7rem+2.6vw,2.6rem)] leading-[1.12] text-ivory underline decoration-transparent decoration-1 underline-offset-[6px] transition-colors duration-300 group-hover:decoration-flash">
                {profile.email}
              </span>
            </a>

            <button
              type="button"
              onClick={copyEmail}
              className="mt-5 inline-flex items-center gap-2 rounded-[2px] border border-ivory/30 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ivory/70 transition-colors duration-300 hover:border-flash hover:text-flash"
            >
              {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
              {copied ? "Copied to clipboard" : "Copy address"}
            </button>

            <div className="mt-10 border-t border-ivory/15">
              <a
                href={profile.phoneHref}
                className="group flex items-center justify-between gap-4 border-b border-ivory/15 py-4 transition-colors duration-200"
              >
                <span className="flex items-center gap-3">
                  <Phone className="h-3.5 w-3.5 text-flash" />
                  <span className="meta-label text-ivory/40">Phone</span>
                </span>
                <span className="font-mono text-[12.5px] text-ivory/85 group-hover:text-flash">{profile.phone}</span>
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 border-b border-ivory/15 py-4 transition-colors duration-200"
              >
                <span className="flex items-center gap-3">
                  <Github className="h-3.5 w-3.5 text-flash" />
                  <span className="meta-label text-ivory/40">GitHub</span>
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[12.5px] text-ivory/85 group-hover:text-flash">
                  {profile.githubHandle}
                  <ArrowUpRight className="h-3 w-3" />
                </span>
              </a>
              <div className="flex items-center justify-between gap-4 border-b border-ivory/15 py-4">
                <span className="flex items-center gap-3">
                  <MapPin className="h-3.5 w-3.5 text-flash" />
                  <span className="meta-label text-ivory/40">Location</span>
                </span>
                <span className="font-mono text-[12.5px] text-ivory/85">{profile.location} · Remote</span>
              </div>
            </div>

            <a
              href={`mailto:${profile.email}`}
              className="group mt-10 inline-flex h-12 items-center gap-3 rounded-[2px] border border-ivory/40 px-6 font-mono text-[10.5px] uppercase tracking-[0.16em] text-ivory transition-colors duration-300 hover:border-flash hover:bg-flash hover:text-ink"
            >
              <Mail className="h-3.5 w-3.5" />
              Write me an email
            </a>
          </Reveal>

          <Reveal className="md:col-span-5 md:col-start-8" delay={120}>
            <p className="meta-label border-b border-ivory/15 pb-3 text-ivory/40">Or send a message</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}