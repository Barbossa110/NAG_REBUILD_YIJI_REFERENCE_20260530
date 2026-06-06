"use client";

import { useSearchParams } from "next/navigation";
import { FilterBar } from "@/components/filter-bar";
import { PageShell } from "@/components/page-shell";
import { ProductGrid } from "@/components/product-grid";
import { artists } from "@/data/artists";
import { products } from "@/data/products";
import {
  filterProducts,
  productFilterOptions,
  sortProductsForDisplay,
} from "@/lib/filters";
import { publicMetadata } from "@/lib/public-display";

export function ProductsPageClient() {
  const params = useSearchParams();
  const current = {
    artist: params.get("artist") ?? undefined,
    medium: params.get("medium") ?? undefined,
  };

  const filteredProducts = sortProductsForDisplay(filterProducts(current));
  const options = productFilterOptions(products);

  return (
    <PageShell
      eyebrow="Products"
      title="Works and objects are presented with the pace of a gallery index."
      description="Browse by artist or medium, with images, names, and material notes kept at the center."
    >
      <FilterBar
        basePath="/products"
        current={current}
        sections={[
          {
            label: "Artist",
            param: "artist",
            options: options.artists.map((slug) => {
              const artist = artists.find((entry) => entry.slug === slug);
              return {
                label: artist ? `${artist.nameZh} / ${artist.nameEn}` : slug,
                value: slug,
              };
            }),
          },
          {
            label: "Medium",
            param: "medium",
            options: options.mediums
              .map((medium) => ({ label: publicMetadata(medium), value: medium }))
              .filter((option): option is { label: string; value: string } =>
                Boolean(option.label),
              ),
          },
        ]}
      />
      <div className="body-copy mb-6">{filteredProducts.length} works in view.</div>
      <ProductGrid products={filteredProducts} />
    </PageShell>
  );
}
