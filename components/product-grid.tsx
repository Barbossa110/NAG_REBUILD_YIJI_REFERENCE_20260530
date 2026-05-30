import type { Product } from "@/lib/types";
import { ProductCard } from "@/components/product-card";

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product, index) => (
        <ProductCard key={product.slug} product={product} index={index + 1} />
      ))}
    </div>
  );
}
