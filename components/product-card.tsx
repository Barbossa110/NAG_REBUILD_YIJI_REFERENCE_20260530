import Link from "next/link";
import { artists } from "@/data/artists";
import { MediaTile } from "@/components/media-tile";
import { publicMetadata } from "@/lib/public-display";
import { toRouteSegment } from "@/lib/filters";
import type { Product } from "@/lib/types";

export function ProductCard({
  product,
}: {
  product: Product;
}) {
  const artist = artists.find((entry) => entry.slug === product.artistSlug);
  const medium = publicMetadata(product.medium);
  const year = publicMetadata(product.year);
  const metadata = [medium, year].filter(Boolean).join(" / ");
  const artistLabel = artist ? `${artist.nameZh} / ${artist.nameEn}` : null;

  return (
    <article className="group grid h-full grid-rows-[auto_1fr] border-t border-[var(--line)] pt-4 transition-colors duration-[var(--motion-ui)] ease-[var(--motion)] hover:border-[var(--accent-line)] focus-within:border-[var(--accent-line)] md:pt-5">
      <Link href={`/products/${toRouteSegment(product.slug)}`} className="archive-link grid content-start gap-4">
        <div className="relative overflow-hidden">
          <MediaTile
            src={product.images[0]}
            alt={product.displayTitle}
            label=""
            caption=""
            fit="contain"
          />
        </div>
        <div className="grid gap-2.5 pt-4 md:pt-5">
          <h3 className="font-display-cn text-[1.18rem] leading-[1.18] text-[var(--surface)] transition-colors duration-300 ease-[var(--motion)] group-hover:text-[var(--surface)] md:text-[1.34rem]">
            {product.displayTitle}
          </h3>
          {artistLabel ? (
            <p className="text-[0.88rem] leading-[1.58] text-[var(--muted)]">
              {artistLabel}
            </p>
          ) : null}
          {metadata ? (
            <p className="text-[0.72rem] leading-[1.5] tracking-[0.035em] text-[var(--muted-soft)]">
              {metadata}
            </p>
          ) : null}
        </div>
      </Link>
      <div className="pt-4 md:pt-5">
        <Link
          href="/contact"
          className="archive-link inline-flex min-h-8 w-fit items-center border-b border-[rgba(255,246,234,0.34)] pb-0.5 text-[0.78rem] leading-[1.5] tracking-[0.035em] text-[var(--muted)] hover:border-[var(--surface)] hover:text-[var(--surface)]"
        >
          联系询价
        </Link>
      </div>
    </article>
  );
}
