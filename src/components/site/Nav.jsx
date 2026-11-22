import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/lib/portfolio";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      let current = "";
      navLinks.forEach((link) => {
        const el = document.getElementById(link.id);
        if (el && el.getBoundingClientRect().top <= 160) current = link.id;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-ink/12 bg-ivory/92 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[68px] w-full max-w-[1320px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">
        <a href="#top" className="group flex items-center gap-3" aria-label="Umar Nagieb — back to top">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/35 font-heading text-[13px] tracking-tight text-ink transition-colors duration-300 group-hover:border-flash group-hover:text-flash">
            {profile.initials}
          </span>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.16em] text-ink/70 sm:block">
            Umar Nagieb
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Sections">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative font-mono text-[11px] uppercase tracking-[0.14em] transition-colors duration-200 ${
                active === link.id ? "text-ink" : "text-ink/50 hover:text-ink"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1.5 left-0 h-px bg-flash transition-all duration-300 ${
                  active === link.id ? "w-full opacity-100" : "w-0 opacity-0"
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="hidden h-9 items-center rounded-[3px] border border-ink bg-transparent px-4 font-mono text-[10px] uppercase tracking-[0.14em] text-ink transition-colors duration-300 hover:bg-ink hover:text-ivory sm:inline-flex"
          >
            Hire me
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-[3px] border border-ink/25 text-ink md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-ink/10 bg-ivory px-5 pb-6 pt-3 md:hidden" aria-label="Sections">
          <ul className="divide-y divide-ink/10">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-3 font-heading text-lg text-ink"
                >
                  {link.label}
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/40">
                    {active === link.id ? "—" : ""}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${profile.email}`}
            onClick={() => setOpen(false)}
            className="mt-4 flex h-11 items-center justify-center rounded-[3px] bg-ink font-mono text-[11px] uppercase tracking-[0.14em] text-ivory"
          >
            {profile.email}
          </a>
        </nav>
      )}
    </header>
  );
}