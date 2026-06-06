import Link from "next/link";
import { artists } from "@/data/artists";
import { MediaTile } from "@/components/media-tile";
import { publicMetadata } from "@/lib/public-display";
import type { Product } from "@/lib/types";

export function ProductCard({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  const artist = artists.find((entry) => entry.slug === product.artistSlug);
  const indexLabel = String(index).padStart(2, "0");
  const medium = publicMetadata(product.medium);

  return (
    <div className="quiet-card space-y-5 p-5 md:p-6">
      <Link href={`/products/${product.slug}`} className="group block space-y-5">
        <div className="flex items-start justify-between gap-4">
          <span className="index-mark">{indexLabel}</span>
          <span className="tag-label text-[var(--muted)]">Work</span>
        </div>
        <div className="relative">
          <MediaTile
            src={product.images[0]}
            alt={product.displayTitle}
            label=""
            caption=""
          />
        </div>
        <div className="grid gap-4">
          <div>
            <h3 className="font-display-cn text-[1.7rem] leading-[1.08] md:text-[1.95rem]">
              {product.displayTitle}
            </h3>
            <p className="body-copy mt-3">{artist ? `${artist.nameZh} / ${artist.nameEn}` : "Artist"}</p>
          </div>
        </div>
      </Link>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[var(--line)] pt-4">
        {medium ? (
          <p className="tag-label text-[var(--muted)]">{medium}</p>
        ) : null}
        <Link href="/contact" className="tag-label text-[var(--muted)] underline-offset-2 hover:underline">
          联系询价
        </Link>
      </div>
    </div>
  );
}
