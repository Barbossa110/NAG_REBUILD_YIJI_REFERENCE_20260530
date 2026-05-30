import { notFound } from "next/navigation";
import { ArtistList } from "@/components/artist-list";
import { Breadcrumb } from "@/components/breadcrumb";
import { MediaTile } from "@/components/media-tile";
import { ProductGrid } from "@/components/product-grid";
import { artists } from "@/data/artists";
import { EventList } from "@/components/event-list";
import { getEventsByArtist, getProductsByArtist } from "@/lib/filters";

type ArtistDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return artists.map((artist) => ({ slug: artist.slug }));
}

export default async function ArtistDetailPage({
  params,
}: ArtistDetailPageProps) {
  const { slug } = await params;
  const artist = artists.find((entry) => entry.slug === slug);

  if (!artist) {
    notFound();
  }

  const artistProducts = getProductsByArtist(artist.slug);
  const relatedEvents = getEventsByArtist(artist.slug);

  return (
    <main className="fine-rule section-space">
      <div className="editorial-shell">
        <Breadcrumb
          items={[
            { label: "Artists", href: "/artists" },
            { label: artist.nameZh },
          ]}
        />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <MediaTile
            src={artist.portrait}
            alt={artist.nameZh}
            label="Artist portrait"
            caption="Portrait / artwork image"
          />
          <div className="space-y-8 lg:pt-2">
            <div>
              <p className="metadata normal-case tracking-[0.03em]">{artist.nameEn}</p>
              <h1 className="mt-4 font-display-cn text-[2.3rem] leading-[1.02] md:text-[3.8rem]">
                {artist.nameZh}
              </h1>
            </div>
            <div className="quiet-card grid gap-4 p-5 md:p-6">
              <div className="grid grid-cols-[92px_1fr] gap-4 md:grid-cols-[110px_1fr]">
                <span className="metadata">City</span>
                <span className="body-copy text-[var(--ink)]">{artist.city}</span>
              </div>
              <div className="grid grid-cols-[92px_1fr] gap-4 md:grid-cols-[110px_1fr]">
                <span className="metadata">Mediums</span>
                <span className="body-copy text-[var(--ink)]">{artist.mediums.join(" / ")}</span>
              </div>
            </div>
            <div className="space-y-4">
              <p className="body-copy">{artist.bioZh}</p>
              <p className="body-copy">{artist.bioEn}</p>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-[var(--line)] pt-10">
          <p className="section-kicker">Gallery</p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {artist.gallery.length ? artist.gallery.slice(0, 3).map((image) => (
              <MediaTile
                key={image}
                src={image}
                alt={artist.nameZh}
                label="Gallery image"
              />
            )) : (
              <MediaTile
                label={`${artist.nameZh} gallery / PLACEHOLDER`}
                alt={artist.nameZh}
              />
            )}
          </div>
        </div>

        <div className="mt-16 border-t border-[var(--line)] pt-10">
          <p className="section-kicker">Products</p>
          <h2 className="mt-3 font-display-en text-[1.9rem] leading-[1.05] tracking-[-0.03em] md:text-[2.5rem]">
            All products linked to this artist
          </h2>
          <div className="mt-8">
            <ProductGrid products={artistProducts} />
          </div>
        </div>

        <div className="mt-16 border-t border-[var(--line)] pt-10">
          <p className="section-kicker">Related Events</p>
          <h2 className="mt-3 font-display-en text-[1.9rem] leading-[1.05] tracking-[-0.03em] md:text-[2.5rem]">
            Project and event structure
          </h2>
          <div className="mt-8">
            <EventList events={relatedEvents} />
          </div>
        </div>

        <div className="mt-16 border-t border-[var(--line)] pt-10">
          <p className="section-kicker">Artist Index</p>
          <div className="mt-6">
            <ArtistList artists={artists} />
          </div>
        </div>
      </div>
    </main>
  );
}
