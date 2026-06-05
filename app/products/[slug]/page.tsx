import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/breadcrumb";
import { MediaTile } from "@/components/media-tile";
import { ProductGrid } from "@/components/product-grid";
import { artists } from "@/data/artists";
import { products } from "@/data/products";
import { getPrevNextProducts, getProductBySlug, getRelatedProducts } from "@/lib/filters";
import { publicMetadata, publicOptionalText, publicText } from "@/lib/public-display";

type ProductDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const product = getProductBySlug(decodedSlug);

  if (!product) {
    notFound();
  }

  const artist = artists.find((entry) => entry.slug === product.artistSlug);
  const { previous, next } = getPrevNextProducts(product.slug);
  const relatedProducts = getRelatedProducts(product.slug, product.artistSlug);
  const descriptionZh = publicOptionalText(product.descriptionZh);
  const descriptionEn = publicOptionalText(product.descriptionEn);

  return (
    <main className="fine-rule section-space">
      <div className="editorial-shell">
        <Breadcrumb
          items={[
            { label: "Products", href: "/products" },
            { label: product.displayTitle },
          ]}
        />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <MediaTile
            src={product.images[0]}
            alt={product.displayTitle}
            label=""
            caption=""
          />
          <div className="space-y-8 lg:pt-2">
            <div>
              <p className="section-kicker">Product Detail</p>
              <h1 className="mt-4 font-display-cn text-[2.3rem] leading-[1.02] md:text-[3.8rem]">
                {product.displayTitle}
              </h1>
              <p className="body-copy mt-4">
                {artist ? `${artist.nameZh} / ${artist.nameEn}` : "Artist"}
              </p>
            </div>

            <dl className="quiet-card grid gap-4 p-5 md:p-6">
              <MetaRow label="Year" value={publicText(product.year)} />
              <MetaRow label="Medium" value={publicMetadata(product.medium) ?? "暂未公布"} />
              <MetaRow label="Dimensions" value={publicText(product.dimensions)} />
              <MetaRow
                label="Price"
                value={
                  <Link href="/contact" className="underline-offset-2 hover:underline">
                    联系询价
                  </Link>
                }
              />
            </dl>

            {descriptionZh || descriptionEn ? (
              <div className="space-y-4">
                <p className="section-kicker">Description</p>
                {descriptionZh ? <p className="body-copy">{descriptionZh}</p> : null}
                {descriptionEn ? <p className="body-copy">{descriptionEn}</p> : null}
              </div>
            ) : null}

            {artist ? (
              <Link
                href={`/artists/${artist.slug}`}
                className="inline-flex border-b border-[var(--ink)] pb-1 text-sm"
              >
                Open artist profile
              </Link>
            ) : null}
          </div>
        </div>

        <div className="mt-16 grid gap-10 border-t border-[var(--line)] pt-10 md:grid-cols-2">
          <NavBlock
            eyebrow="Previous"
            title={previous?.displayTitle ?? "No previous product"}
            href={previous ? `/products/${previous.slug}` : undefined}
          />
          <NavBlock
            eyebrow="Next"
            title={next?.displayTitle ?? "No next product"}
            href={next ? `/products/${next.slug}` : undefined}
          />
        </div>

        <div className="mt-16 border-t border-[var(--line)] pt-10">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Related Products</p>
              <h2 className="mt-3 text-3xl leading-tight tracking-[-0.03em]">
                More from the same artist
              </h2>
            </div>
          </div>
          <ProductGrid products={relatedProducts.length ? relatedProducts.slice(0, 6) : [product]} />
        </div>
      </div>
    </main>
  );
}

function MetaRow({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="grid grid-cols-[92px_1fr] gap-4 border-b border-[var(--line)] pb-4 last:border-b-0 last:pb-0 md:grid-cols-[110px_1fr]">
      <dt className="metadata">{label}</dt>
      <dd className="body-copy text-[var(--ink)]">{value}</dd>
    </div>
  );
}

function NavBlock({
  eyebrow,
  title,
  href,
}: {
  eyebrow: string;
  title: string;
  href?: string;
}) {
  const content = (
    <div className="quiet-card space-y-3 p-6">
      <p className="section-kicker">{eyebrow}</p>
      <p className="font-display-cn text-[1.5rem] leading-[1.12]">{title}</p>
    </div>
  );

  if (!href) return content;
  return <Link href={href}>{content}</Link>;
}
