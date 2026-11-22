import { ArrowUp } from "lucide-react";
import { navLinks, profile } from "@/lib/portfolio";

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto w-full max-w-[1320px] border-t border-ivory/15 px-5 py-10 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/35 font-heading text-[13px] leading-none text-ivory">
              {profile.initials}
            </span>
            <span className="font-mono text-[10.5px] uppercase leading-relaxed tracking-[0.14em] text-ivory/55">
              Umar Nagieb
              <br />
              Software Developer
            </span>
          </div>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-3" aria-label="Footer">
            {navLinks.slice(0, 4).map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="font-mono text-[10px] uppercase tracking-[0.14em] text-ivory/50 transition-colors duration-200 hover:text-ivory"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`mailto:${profile.email}`}
              className="font-mono text-[10px] uppercase tracking-[0.14em] text-ivory/50 transition-colors duration-200 hover:text-flash"
            >
              Email
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] uppercase tracking-[0.14em] text-ivory/50 transition-colors duration-200 hover:text-flash"
            >
              GitHub
            </a>
          </nav>

          <a
            href="#top"
            className="group inline-flex items-center gap-2 self-start font-mono text-[10px] uppercase tracking-[0.14em] text-ivory/50 transition-colors duration-200 hover:text-ivory md:self-auto"
          >
            Back to top
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-ivory/25 transition-colors duration-300 group-hover:border-flash group-hover:text-flash">
              <ArrowUp className="h-3 w-3" />
            </span>
          </a>
        </div>

        <p className="mt-10 border-t border-ivory/10 pt-5 font-mono text-[9.5px] uppercase tracking-[0.14em] text-ivory/30">
          © 2026 Umar Nagieb — Designed & built by me
        </p>
      </div>
    </footer>
  );
}