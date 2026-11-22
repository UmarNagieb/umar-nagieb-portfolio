export default function SectionHeading({ index, label, title, intro, dark = false, className = "" }) {
  const titleColor = dark ? "text-ivory" : "text-ink";
  const soft = dark ? "text-ivory/50" : "text-ink/45";
  const rule = dark ? "bg-ivory/20" : "bg-ink/12";
  const introColor = dark ? "text-ivory/65" : "text-ink/65";

  return (
    <div className={className}>
      <div className="flex items-center gap-3">
        <span className="meta-label text-flash">{index}</span>
        <span className={`meta-label ${soft}`}>{label}</span>
        <span className={`h-px flex-1 ${rule}`} />
      </div>
      {title && (
        <h2
          className={`mt-7 max-w-[22ch] font-heading text-[clamp(1.9rem,1.1rem+2.8vw,3.2rem)] leading-[1.08] ${titleColor}`}
        >
          {title}
        </h2>
      )}
      {intro && <p className={`mt-5 max-w-[58ch] text-[15px] leading-[1.7] ${introColor}`}>{intro}</p>}
    </div>
  );
}