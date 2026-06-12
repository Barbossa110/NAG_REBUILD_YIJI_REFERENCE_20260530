import Link from "next/link";
import { MediaTile } from "@/components/media-tile";
import { publicMetadataList } from "@/lib/public-display";
import type { Artist } from "@/lib/types";

export function ArtistPreview({ artist }: { artist: Artist }) {
  const mediums = publicMetadataList(artist.mediums);

  return (
    <article className="group grid gap-8 border-t border-[var(--line)] py-8 transition-colors duration-300 ease-[var(--motion)] hover:border-[var(--line-strong)] md:grid-cols-[0.68fr_1.32fr] md:items-start md:py-10">
      <div className="space-y-4">
        <span className="index-mark">AR</span>
        <p className="metadata normal-case tracking-[0.03em]">{artist.nameEn}</p>
        <h3 className="font-display-cn text-[1.72rem] leading-[1.08] transition-colors duration-300 ease-[var(--motion)] group-hover:text-[var(--accent)] md:text-[2.28rem]">
          <Link href={`/artists/${artist.slug}`}>{artist.nameZh}</Link>
        </h3>
        {mediums.length ? (
          <p className="body-copy">{mediums.join(" / ")}</p>
        ) : null}
      </div>
      <div className="group grid gap-6 md:grid-cols-[0.72fr_1.28fr]">
        <MediaTile
          src={artist.portrait}
          alt={artist.nameZh}
          label={`${artist.nameZh} portrait`}
        />
        <p className="body-copy max-w-[68ch]">
          {artist.bioZh}
        </p>
      </div>
    </article>
  );
}
