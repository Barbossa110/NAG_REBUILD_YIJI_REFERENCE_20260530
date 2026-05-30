import Link from "next/link";
import { MediaTile } from "@/components/media-tile";
import { getSourceStatusLabel, getSourceStatusTone } from "@/lib/source-status";
import type { Artist } from "@/lib/types";

export function ArtistPreview({ artist }: { artist: Artist }) {
  return (
    <article className="grid gap-8 border-t border-[var(--line)] py-8 md:grid-cols-[0.78fr_1.22fr] md:items-start">
      <div className="space-y-4">
        <span className="index-mark">AR</span>
        <p className="metadata normal-case tracking-[0.03em]">{artist.nameEn}</p>
        <h3 className="font-display-cn text-[1.9rem] leading-[1.03] md:text-[2.5rem]">
          <Link href={`/artists/${artist.slug}`}>{artist.nameZh}</Link>
        </h3>
        <p className="body-copy">
          {artist.mediums.join(" / ")}
        </p>
        <span className={`status-chip ${getSourceStatusTone(artist.sourceStatus)}`}>
          {getSourceStatusLabel(artist.sourceStatus)}
        </span>
      </div>
      <div className="grid gap-6 md:grid-cols-[0.82fr_1.18fr]">
        <MediaTile
          src={artist.portrait}
          alt={artist.nameZh}
          label={`${artist.nameZh} portrait`}
        />
        <p className="body-copy">
          {artist.bioZh}
        </p>
      </div>
    </article>
  );
}
