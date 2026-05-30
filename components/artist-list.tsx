import type { Artist } from "@/lib/types";
import { ArtistPreview } from "@/components/artist-preview";

export function ArtistList({ artists }: { artists: Artist[] }) {
  return (
    <div className="border-b border-[var(--line)]">
      {artists.map((artist) => (
        <ArtistPreview key={artist.slug} artist={artist} />
      ))}
    </div>
  );
}
