import Image from "next/image";
import Link from "next/link";
import { ArtistList } from "@/components/artist-list";
import { EventList } from "@/components/event-list";
import { SectionHeading } from "@/components/section-heading";
import { StoryList } from "@/components/story-list";
import { ProductGrid } from "@/components/product-grid";
import { artists } from "@/data/artists";
import { events } from "@/data/events";
import { products } from "@/data/products";
import { stories } from "@/data/stories";
import { withAssetPath } from "@/lib/asset-path";

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
const heroImage = "/sources/branding/space-image.jpg";

export default function Home() {
  return (
    <main>
      <section className="fine-rule">
        <div className="editorial-shell py-5 md:py-8">
          <div className="relative min-h-[68svh] overflow-hidden border border-[var(--line-strong)] bg-[var(--inverse)] md:min-h-[74svh]">
            <Image
              src={withAssetPath(heroImage) ?? heroImage}
              alt="Nearly Anything Goes space image"
              fill
              sizes="100vw"
              priority
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-black/25" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-[var(--surface)] md:p-10 lg:p-14">
              <p className="font-display-en text-[1.5rem] leading-none tracking-[-0.03em] text-white/86 md:text-[1.85rem]">
                NAG
              </p>
              <h1 className="font-display-en mt-5 max-w-6xl text-[clamp(3rem,8.6vw,8.2rem)] leading-[0.9] tracking-[-0.055em]">
                Nearly Anything Goes
              </h1>
              <p className="font-display-cn mt-5 max-w-3xl text-[clamp(1.3rem,2.7vw,2.45rem)] leading-[1.35] tracking-[-0.02em] text-white/86">
                策展式艺术限定零售平台
              </p>
              <div className="mt-8 grid gap-5 border-t border-white/28 pt-5 md:grid-cols-3">
                <p className="text-[0.88rem] leading-[1.75] text-white/76">
                  Curated art limited retail space.
                </p>
                <p className="text-[0.88rem] leading-[1.75] text-white/76">
                  Art, objects, artists, and events are presented with a restrained editorial rhythm.
                </p>
                <p className="text-[0.88rem] leading-[1.75] text-white/76">
                  首店筹备中 / 快闪店即将公布
                  <br />
                  成都 / 武汉 / 深圳
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
              <p className="mt-4 text-[1.2rem] leading-tight">暂未公布</p>
              <p className="body-copy mt-4">
                成都 / 武汉 / 深圳
                <br />
                其余信息：暂未公布
              </p>
            </div>
            <div className="quiet-card p-6">
              <p className="section-kicker">Visit Notes</p>
              <p className="body-copy mt-4">
                {confirmedStoreCities.join(" / ")}
                <br />
                其余信息：暂未公布
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
              策展式艺术限定零售平台
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
