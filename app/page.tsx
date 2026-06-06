import Image from "next/image";
import Link from "next/link";
import { ArtistList } from "@/components/artist-list";
import { SectionHeading } from "@/components/section-heading";
import { ProductGrid } from "@/components/product-grid";
import { artists } from "@/data/artists";
import { products } from "@/data/products";
import { withAssetPath } from "@/lib/asset-path";

const curatedProductSlugs = ["panacea-122", "琥珀流", "大姜-giant-ginger", "海晏瑶", "莫比乌斯环灯1"];
const featuredProducts = curatedProductSlugs
  .map((slug) => products.find((product) => product.slug === slug))
  .filter((product): product is NonNullable<typeof product> => Boolean(product));
const curatedArtistSlugs = ["liu-zhenchen", "kong-yu", "jeremie-thircuir", "xie-zhenlin", "dabeiyuzhou"];
const featuredArtists = curatedArtistSlugs
  .map((slug) => artists.find((artist) => artist.slug === slug))
  .filter((artist): artist is NonNullable<typeof artist> => Boolean(artist));
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
            title="works"
            description="Images, artist names, materials, and inquiry stay quiet, with the work kept at the center."
            action={{ href: "/products", label: "View products" }}
          />
          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      <section className="section-space fine-rule">
        <div className="editorial-shell">
          <SectionHeading
            eyebrow="Featured Artists"
            title="Artist"
            description="Each profile gathers practice, works, and related encounters with room for individual voice."
            action={{ href: "/artists", label: "Browse artists" }}
          />
          <ArtistList artists={featuredArtists} />
        </div>
      </section>

      <section className="section-space bg-[var(--inverse)] text-[var(--surface)]">
        <div className="editorial-shell">
          <SectionHeading
            eyebrow="Events / Program"
            title="Events"
            description="Events connect artists, works, images, and audiences through a calm editorial sequence."
            action={{ href: "/events", label: "View events", inverse: true }}
            inverse
          />
        </div>
      </section>

      <section className="section-space fine-rule">
        <div className="editorial-shell grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="section-kicker">Contact</p>
            <h2 className="section-title mt-4 max-w-3xl text-[2rem] md:text-[3.15rem]">
              Contact us
            </h2>
          </div>
          <Link
            href="/contact"
            className="body-copy max-w-md border-b border-[var(--ink)] pb-1 text-left transition-colors hover:text-[var(--muted)]"
          >
            For visits, collaborations, and artwork inquiries.
          </Link>
        </div>
      </section>
    </main>
  );
}
