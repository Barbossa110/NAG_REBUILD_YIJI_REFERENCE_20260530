import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-7">
      <ol className="metadata flex flex-wrap items-center gap-2 normal-case tracking-[0.03em] text-[var(--muted)]">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {item.href ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
            {index < items.length - 1 ? <span className="opacity-55">/</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
