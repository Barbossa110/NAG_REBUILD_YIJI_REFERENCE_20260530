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

export function ProductsPageClient() {
  const params = useSearchParams();
  const current = {
    artist: params.get("artist") ?? undefined,
    series: params.get("series") ?? undefined,
    medium: params.get("medium") ?? undefined,
  };

  const filteredProducts = sortProductsForDisplay(filterProducts(current));
  const options = productFilterOptions(products);

  return (
    <PageShell
      eyebrow="Products"
      title="The product channel behaves like a collection view with quiet pricing."
      description="Works are presented through a calm index with filtering by artist, series, and medium."
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
              return { label: artist?.nameZh ?? slug, value: slug };
            }),
          },
          {
            label: "Series",
            param: "series",
            options: options.series.map((series) => ({ label: series, value: series })),
          },
          {
            label: "Medium",
            param: "medium",
            options: options.mediums.map((medium) => ({ label: medium, value: medium })),
          },
        ]}
      />
      <div className="body-copy mb-6">Showing {filteredProducts.length} works in the current product selection.</div>
      <ProductGrid products={filteredProducts} />
    </PageShell>
  );
}
