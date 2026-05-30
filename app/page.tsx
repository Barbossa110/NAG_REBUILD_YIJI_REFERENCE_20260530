import Link from "next/link";
import { ArtistList } from "@/components/artist-list";
import { EventList } from "@/components/event-list";
import { MediaTile } from "@/components/media-tile";
import { SectionHeading } from "@/components/section-heading";
import { StoryList } from "@/components/story-list";
import { ProductGrid } from "@/components/product-grid";
import { artists } from "@/data/artists";
import { events } from "@/data/events";
import { products } from "@/data/products";
import { siteSettings } from "@/data/site-settings";
import { stories } from "@/data/stories";

const curatedProductSlugs = ["panacea-122", "琥珀流", "彝衣", "大姜-giant-ginger", "海晏瑶", "莫比乌斯环灯1"];
const featuredProducts = curatedProductSlugs
  .map((slug) => products.find((product) => product.slug === slug))
  .filter((product): product is NonNullable<typeof product> => Boolean(product));
const curatedArtistSlugs = ["liu-zhenchen", "kong-yu", "huang-lu", "jeremie-thircuir", "xie-zhenlin", "dabeiyuzhou"];
const featuredArtists = curatedArtistSlugs
  .map((slug) => artists.find((artist) => artist.slug === slug))
  .filter((artist): artist is NonNullable<typeof artist> => Boolean(artist));
const featuredEvents = events.filter((event) => event.status !== "past").slice(0, 2);
const featuredStories = stories.slice(0, 4);
const confirmedStoreCities = ["成都", "武汉", "深圳"];
const heroProduct = products.find((product) => product.slug === "panacea-122") ?? products[0];
const heroArtist = artists.find((artist) => artist.slug === heroProduct.artistSlug);

export default function Home() {
  return (
    <main>
      <section className="fine-rule">
        <div className="editorial-shell grid min-h-[72svh] gap-8 py-6 md:grid-cols-[1.24fr_0.92fr] md:py-12 lg:gap-14 lg:py-16">
          <div className="flex flex-col justify-between gap-12">
            <div className="space-y-4">
              <div className="space-y-5">
                <h1 className="hero-title max-w-4xl">
                  <span className="font-display-en block">Nearly Anything Goes</span>
                </h1>
                <p className="hero-subtitle max-w-2xl font-display-cn font-normal">
                  让艺术成为生活的一部分
                </p>
                <p className="body-large max-w-2xl">
                  {siteSettings.missionZh}
                </p>
              </div>
            </div>

            <div className="grid gap-6 border-t border-[var(--line)] pt-7 md:grid-cols-3">
              <div>
                <p className="section-kicker">Space</p>
                <p className="body-copy mt-3">
                  Curated art limited retail space.
                </p>
              </div>
              <div>
                <p className="section-kicker">Approach</p>
                <p className="body-copy mt-3">
                  Art, objects, artists, and events are presented with a restrained editorial rhythm.
                </p>
              </div>
              <div>
                <p className="section-kicker">Now Showing</p>
                <p className="body-copy mt-3">
                  {siteSettings.storeStatus}
                  <br />
                  成都 / 武汉 / 深圳
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-rows-[1.35fr_0.9fr]">
            <MediaTile
              src={heroProduct.images[0]}
              alt={heroProduct.displayTitle}
              label={heroProduct.series}
              caption={
                heroArtist
                  ? `${heroArtist.nameZh} / ${heroArtist.nameEn}`
                  : "Artist"
              }
              tone="dark"
            />
            <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
              <div className="quiet-card p-6">
                <p className="section-kicker">Current Highlight</p>
                <p className="mt-3 font-display-cn text-[1.5rem] leading-[1.08]">
                  {heroProduct.displayTitle}
                </p>
                <p className="body-copy mt-3">
                  {heroProduct.descriptionZh}
                </p>
              </div>
              <div className="quiet-card bg-[var(--bg-alt)] p-6">
                <p className="section-kicker">Platform</p>
                <p className="body-copy mt-3">
                  Products, artists, events, stories, and spatial information
                  are arranged as distinct but connected channels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space fine-rule">
        <div className="editorial-shell">
          <SectionHeading
            eyebrow="Featured Products"
            title="Product archive shaped like a gallery index, not a storefront."
            description="Pricing remains present but restrained. Metadata stays quiet and factual rather than commercial."
            action={{ href: "/products", label: "View all products" }}
          />
          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      <section className="section-space fine-rule">
        <div className="editorial-shell">
          <SectionHeading
            eyebrow="Featured Artists"
            title="Artists are treated as living chapters inside a cultural archive."
            description="Artist pages bring together biography, works, and related events without flattening them into a commercial directory."
            action={{ href: "/artists", label: "Browse artists" }}
          />
          <ArtistList artists={featuredArtists} />
        </div>
      </section>

      <section className="section-space bg-[var(--inverse)] text-[var(--surface)]">
        <div className="editorial-shell">
          <SectionHeading
            eyebrow="Current / Upcoming Events"
            title="Event pages behave like project dossiers with media space built in."
            description="Events are presented as project files with room for image, video, and related works."
            action={{ href: "/events", label: "Open events channel", inverse: true }}
            inverse
          />
          <EventList events={featuredEvents} inverse />
        </div>
      </section>

      <section className="section-space fine-rule">
        <div className="editorial-shell grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeading
            eyebrow="Store / Visit"
            title="Space information stays factual, even when the facts are still incomplete."
            description="No speculative address, map, or visit logistics are shown before confirmation."
            action={{ href: "/stores", label: "Store status" }}
          />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="quiet-card p-6">
              <p className="section-kicker">Current Status</p>
              <p className="mt-4 text-[1.2rem] leading-tight">{siteSettings.storeStatus}</p>
              <p className="body-copy mt-4">
                Confirmed city references: 成都 / 武汉 / 深圳
                <br />
                Address: PLACEHOLDER / needs confirmation
              </p>
            </div>
            <div className="quiet-card p-6">
              <p className="section-kicker">Visit Notes</p>
              <p className="body-copy mt-4">
                Confirmed city references: {confirmedStoreCities.join(" / ")}.
                Opening hour, floor plan, and transport guidance remain hidden
                until a verifiable source is available.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space fine-rule">
        <div className="editorial-shell">
          <SectionHeading
            eyebrow="Stories / Editorial"
            title="Stories exists as a dedicated editorial layer for interviews, press material, and moving image."
            description="Stories holds interviews, press material, moving image, and future editorial writing."
            action={{ href: "/stories", label: "Open stories" }}
          />
          <StoryList stories={featuredStories} />
        </div>
      </section>

      <section className="section-space fine-rule">
        <div className="editorial-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="About NAG"
              title="An editorial reading experience, not a generic gallery paragraph stack."
              description="Brand profile, philosophy, and positioning are arranged as a reading sequence rather than a corporate summary."
              action={{ href: "/about", label: "Read about NAG" }}
            />
          </div>
          <div className="quiet-card space-y-6 p-8">
            <p className="font-display-cn text-[1.8rem] leading-[1.22] md:text-[2.2rem]">
              {siteSettings.missionZh}
            </p>
            <p className="body-copy">
              Nearly Anything Goes is a curated art limited retail space where
              art, commerce, and cultural life co-exist.
            </p>
            <Link
              href="/about"
              className="inline-flex border-b border-[var(--ink)] pb-1 text-sm"
            >
              Continue
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space fine-rule">
        <div className="editorial-shell grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="section-kicker">Contact</p>
            <h2 className="section-title mt-4 max-w-3xl text-[2rem] md:text-[3.15rem]">
              Contact remains concise and factual.
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center border border-[var(--ink)] px-6 text-sm transition-colors hover:bg-[var(--ink)] hover:text-[var(--surface)]"
          >
            Contact page
          </Link>
        </div>
      </section>
    </main>
  );
}
