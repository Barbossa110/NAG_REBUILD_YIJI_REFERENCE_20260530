type MediaFrameProps = {
  src?: string | null;
  alt?: string;
  label?: string;
  caption?: string;
  priority?: boolean;
  tone?: "light" | "dark";
  className?: string;
};

export function MediaFrame({
  label,
  caption,
  tone = "light",
  className = "",
}: MediaFrameProps) {
  const dark = tone === "dark";

  return (
    <div
      role="img"
      aria-label={label || caption || "Artwork image"}
      className={`flex aspect-[4/5] min-h-[280px] flex-col justify-between border p-6 md:min-h-[420px] ${
        dark
          ? "border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.04)] text-[var(--surface)]"
          : "border-[var(--line)] bg-[rgba(122,16,10,0.13)] text-[var(--ink)]"
      } ${className}`}
    >
      <div aria-hidden="true" className="flex flex-1 items-center justify-center">
        <span
          className={`block h-10 w-10 border ${
            dark ? "border-[rgba(255,255,255,0.18)]" : "border-[var(--line)]"
          }`}
        />
      </div>
      {label || caption ? (
        <div className="space-y-2 border-t border-[var(--line)] pt-4">
          {label ? <p className="eyebrow">{label}</p> : null}
          {caption ? (
            <p className={`max-w-lg text-sm leading-7 ${dark ? "text-[rgba(255,255,255,0.72)]" : "text-[var(--muted)]"}`}>
              {caption}
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
