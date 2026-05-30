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
    <div
      className={`overflow-hidden border ${
        dark
          ? "border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.04)]"
          : "border-[var(--line)] bg-[var(--bg-alt)]"
      } ${className}`}
    >
      <div className="relative aspect-[4/5]">
        <Image
          src={resolvedSrc}
          alt={alt}
          fill
          className="object-cover"
          sizes="(min-width: 1200px) 30vw, (min-width: 768px) 45vw, 100vw"
        />
      </div>
      <div className="space-y-2 p-5">
        <p className={`tag-label ${dark ? "text-[rgba(255,255,255,0.62)]" : "text-[var(--muted)]"}`}>
          {label}
        </p>
        {caption ? (
          <p
            className={`body-copy ${
              dark ? "text-[rgba(255,255,255,0.72)]" : "text-[var(--muted)]"
            }`}
          >
            {caption}
          </p>
        ) : null}
      </div>
    </div>
  );
}
