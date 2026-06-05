type MediaFrameProps = {
  src?: string | null;
  alt?: string;
  label?: string;
  caption?: string;
  priority?: boolean;
  tone?: "light" | "dark";
};

export function MediaFrame({
  label = "Media forthcoming",
  caption,
  tone = "light",
}: MediaFrameProps) {
  const dark = tone === "dark";

  return (
    <div
      className={`flex min-h-[280px] flex-col justify-between border p-6 md:min-h-[420px] ${
        dark
          ? "border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.04)] text-[var(--surface)]"
          : "border-[var(--line)] bg-[var(--bg-alt)] text-[var(--ink)]"
      }`}
    >
      <div className="eyebrow">{label}</div>
      <div className="space-y-2">
        <p className="font-display-en text-3xl tracking-[-0.04em] md:text-5xl">
          Media forthcoming
        </p>
        {caption ? (
          <p className={`max-w-lg text-sm leading-7 ${dark ? "text-[rgba(255,255,255,0.72)]" : "text-[var(--muted)]"}`}>
            {caption}
          </p>
        ) : null}
      </div>
    </div>
  );
}
