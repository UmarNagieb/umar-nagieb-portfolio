import { ArrowUpRight } from "lucide-react";

function Headline({ text, accentWord, ink, highlight, className }) {
  if (!accentWord || !text.includes(accentWord)) {
    return (
      <span className={className} style={{ color: ink }}>
        {text}
      </span>
    );
  }
  const start = text.indexOf(accentWord);
  return (
    <span className={className} style={{ color: ink }}>
      {text.slice(0, start)}
      <span style={{ color: highlight }}>{accentWord}</span>
      {text.slice(start + accentWord.length)}
    </span>
  );
}

/** Compact portrait specimen used in the hero index strip. */
function Tile({ project }) {
  const p = project.preview;
  const highlight = p.highlight || p.accent;

  return (
    <div className="relative h-full w-full" style={{ background: p.background }}>
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `repeating-linear-gradient(90deg, ${p.ink} 0 1px, transparent 1px 44px)`,
        }}
      />
      <div className="relative flex items-center justify-between px-4 pt-4">
        <span
          className="font-mono text-[9px] uppercase tracking-[0.18em]"
          style={{ color: p.muted }}
        >
          {p.dark ? "● ● ●" : "— — —"}
        </span>
        <span className="font-mono text-[9px] uppercase tracking-[0.18em]" style={{ color: p.accent }}>
          {project.number}
        </span>
      </div>

      <div className="relative px-4 pt-10">
        <p className="font-mono text-[8.5px] uppercase leading-relaxed tracking-[0.16em]" style={{ color: p.accent }}>
          {p.eyebrow}
        </p>
        <Headline
          text={p.headline}
          accentWord={p.accentWord}
          ink={p.ink}
          highlight={highlight}
          className="mt-3 block font-heading text-[clamp(0.95rem,1.5vw,1.3rem)] leading-[1.15]"
        />
        <span
          className="mt-4 inline-flex h-6 items-center rounded-[2px] px-2.5 font-mono text-[8px] uppercase tracking-[0.12em]"
          style={{ background: p.accent, color: p.accentInk }}
        >
          {p.cta}
        </span>
      </div>

      <div
        className="absolute inset-x-4 bottom-[-40px] top-[62%] rounded-t-[3px] border border-white/10"
        style={{ background: p.surface }}
      >
        <div className="grid h-full grid-cols-3 gap-1 p-2 opacity-60">
          <div className="rounded-[2px]" style={{ background: p.accent, opacity: 0.35 }} />
          <div className="rounded-[2px]" style={{ background: p.muted, opacity: 0.25 }} />
          <div className="rounded-[2px]" style={{ background: p.muted, opacity: 0.15 }} />
        </div>
      </div>
    </div>
  );
}

/** Large landscape representation used in Selected Work. */
function Wide({ project }) {
  const p = project.preview;
  const highlight = p.highlight || p.accent;

  return (
    <div className="relative h-full w-full overflow-hidden" style={{ background: p.background }}>
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `repeating-linear-gradient(90deg, ${p.ink} 0 1px, transparent 1px 64px)`,
        }}
      />

      {/* mock navigation bar */}
      <div
        className="relative flex items-center justify-between gap-4 border-b px-5 py-3.5 sm:px-7"
        style={{ borderColor: `${p.ink}1a` }}
      >
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full" style={{ background: p.accent }} />
          <span className="font-mono text-[9px] uppercase tracking-[0.18em]" style={{ color: p.ink }}>
            {project.name.split(" ")[0]}
          </span>
        </div>
        <div className="hidden items-center gap-4 sm:flex">
          {["Home", "Services", "About", "Contact"].map((item) => (
            <span key={item} className="font-mono text-[8px] uppercase tracking-[0.14em]" style={{ color: p.muted }}>
              {item}
            </span>
          ))}
        </div>
        <span
          className="hidden rounded-[2px] px-2 py-1 font-mono text-[8px] uppercase tracking-[0.1em] sm:inline-flex"
          style={{ background: p.accent, color: p.accentInk }}
        >
          {p.cta}
        </span>
      </div>

      {/* mock hero split */}
      <div className="relative grid gap-6 px-5 py-7 sm:grid-cols-[1.15fr_0.85fr] sm:px-7 sm:py-9">
        <div>
          <p className="font-mono text-[8.5px] uppercase tracking-[0.18em]" style={{ color: p.accent }}>
            {p.eyebrow}
          </p>
          <Headline
            text={p.headline}
            accentWord={p.accentWord}
            ink={p.ink}
            highlight={highlight}
            className="mt-3 block font-heading text-[clamp(1.1rem,2.4vw,2rem)] leading-[1.1]"
          />
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span
              className="inline-flex h-7 items-center rounded-[2px] px-3 font-mono text-[8px] uppercase tracking-[0.1em]"
              style={{ background: p.accent, color: p.accentInk }}
            >
              {p.cta}
            </span>
            <span
              className="inline-flex h-7 items-center rounded-[2px] border px-3 font-mono text-[8px] uppercase tracking-[0.1em]"
              style={{ borderColor: `${p.ink}40`, color: p.ink }}
            >
              {p.secondary}
            </span>
          </div>
        </div>

        <div
          className="relative hidden min-h-[110px] overflow-hidden rounded-[3px] border sm:block"
          style={{ background: p.surface, borderColor: `${p.ink}1a` }}
        >
          <div className="absolute inset-0 grid grid-cols-2 gap-px opacity-70">
            <div style={{ background: `${p.accent}33` }} />
            <div style={{ background: `${p.ink}12` }} />
            <div style={{ background: `${p.ink}08` }} />
            <div style={{ background: `${p.muted}22` }} />
          </div>
          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
            <span className="font-mono text-[7.5px] uppercase tracking-[0.14em]" style={{ color: p.muted }}>
              {project.category}
            </span>
            <ArrowUpRight className="h-3 w-3" style={{ color: p.accent }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectPreview({ project, variant = "wide" }) {
  return variant === "tile" ? <Tile project={project} /> : <Wide project={project} />;
}