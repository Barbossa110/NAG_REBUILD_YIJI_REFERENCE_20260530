import Image from "next/image";
import { MediaFrame } from "@/components/media-frame";
import { withAssetPath } from "@/lib/asset-path";

type MediaTileProps = {
  src?: string | null;
  alt: string;
  label: string;
  caption?: string;
  tone?: "light" | "dark";
  className?: string;
};

export function MediaTile({
  src,
  alt,
  label,
  caption,
  tone = "light",
  className = "",
}: MediaTileProps) {
  if (!src) {
    return <MediaFrame label={label} caption={caption} tone={tone} />;
  }

  const dark = tone === "dark";
  const resolvedSrc = withAssetPath(src) ?? src;

  return (
    <figure
      className={`overflow-hidden border transition-colors duration-300 ease-[var(--motion)] ${
        dark
          ? "border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.04)]"
          : "border-[var(--line)] bg-[var(--bg-alt)] group-hover:border-[var(--line-strong)]"
      } ${className}`}
    >
      <div className="relative aspect-[4/5]">
        <Image
          src={resolvedSrc}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 ease-[var(--motion)] group-hover:scale-[1.016]"
          sizes="(min-width: 1200px) 30vw, (min-width: 768px) 45vw, 100vw"
        />
      </div>
      {label || caption ? (
        <figcaption className="space-y-2 border-t border-[var(--line)] p-4 md:p-5">
          {label ? (
            <p className={`tag-label ${dark ? "text-[rgba(255,255,255,0.62)]" : "text-[var(--muted)]"}`}>
              {label}
            </p>
          ) : null}
          {caption ? (
            <p
              className={`body-copy ${
                dark ? "text-[rgba(255,255,255,0.72)]" : "text-[var(--muted)]"
              }`}
            >
              {caption}
            </p>
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
