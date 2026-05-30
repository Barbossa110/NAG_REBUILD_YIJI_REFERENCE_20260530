import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/breadcrumb";
import { EventList } from "@/components/event-list";
import { MediaTile } from "@/components/media-tile";
import { ProductGrid } from "@/components/product-grid";
import { StoryList } from "@/components/story-list";
import { artists } from "@/data/artists";
import { events } from "@/data/events";
import { products } from "@/data/products";
import { stories } from "@/data/stories";
import { getEventBySlug } from "@/lib/filters";

type EventDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  const relatedArtists = artists.filter((artist) => event.artists.includes(artist.slug));
  const relatedProducts = products.filter((product) =>
    event.products.includes(product.slug),
  );
  const relatedStories = stories.filter((story) => story.relatedEvents.includes(event.slug));
  const siblingEvents = events.filter((entry) => entry.slug !== event.slug);

  return (
    <main className="fine-rule section-space">
      <div className="editorial-shell">
        <Breadcrumb
          items={[
            { label: "Events", href: "/events" },
            { label: event.title },
          ]}
        />

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <MediaTile
            src={event.images[0]}
            alt={event.title}
            label={`${event.title} key visual`}
            caption="Event image / PLACEHOLDER"
          />
          <div className="space-y-8 lg:pt-2">
            <div>
              <p className="metadata">{event.status}</p>
              <h1 className="mt-4 font-display-cn text-[2.3rem] leading-[1.02] md:text-[3.8rem]">
                {event.title}
              </h1>
            </div>
            <dl className="quiet-card grid gap-4 p-5 md:p-6">
              <MetaRow label="Date" value={event.dateRange} />
              <MetaRow label="City" value={event.city} />
              <MetaRow label="Location" value={event.location} />
              <MetaRow label="Status" value={event.status} />
            </dl>
            <p className="body-copy">{event.summary}</p>
            <p className="body-copy">
              Time, location, and media remain explicitly marked where
              information is still incomplete.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div className="quiet-card p-8">
            <p className="section-kicker">Related Artists</p>
            <div className="mt-6 space-y-4">
              {relatedArtists.map((artist) => (
                <div key={artist.slug} className="border-t border-[var(--line)] pt-4 first:border-t-0 first:pt-0">
                  <p className="font-display-cn text-[1.45rem] leading-[1.1]">{artist.nameZh}</p>
                  <p className="body-copy mt-1">
                    {artist.nameEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="quiet-card p-8">
            <p className="section-kicker">Media Area</p>
            <p className="body-copy mt-6">
              Image gallery: PLACEHOLDER / needs confirmation
              <br />
              Video embed: PLACEHOLDER / needs confirmation
            </p>
          </div>
        </div>

        <div className="mt-16 border-t border-[var(--line)] pt-10">
          <p className="section-kicker">Related Products</p>
          <div className="mt-8">
            <ProductGrid products={relatedProducts} />
          </div>
        </div>

        <div className="mt-16 border-t border-[var(--line)] pt-10">
          <p className="section-kicker">Related Stories</p>
          <div className="mt-8">
            <StoryList stories={relatedStories} />
          </div>
        </div>

        <div className="mt-16 border-t border-[var(--line)] pt-10">
          <p className="section-kicker">More Events</p>
          <div className="mt-8">
            <EventList events={siblingEvents} />
          </div>
        </div>
      </div>
    </main>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[92px_1fr] gap-4 border-b border-[var(--line)] pb-4 last:border-b-0 last:pb-0 md:grid-cols-[110px_1fr]">
      <dt className="metadata">{label}</dt>
      <dd className="body-copy text-[var(--ink)]">{value}</dd>
    </div>
  );
}
