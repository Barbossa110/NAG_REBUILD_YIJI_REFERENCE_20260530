import { PageShell } from "@/components/page-shell";
import { stores } from "@/data/stores";

export default function StoresPage() {
  return (
    <PageShell
      eyebrow="Stores"
      title="Store information stays factual and restrained."
      description="Current space information, city references, and future visit details."
    >
      <div className="grid gap-8 md:grid-cols-3">
        {stores.map((store) => (
          <article
            key={store.slug}
            className="border border-[var(--line)] bg-[var(--surface)] p-8"
          >
            <p className="eyebrow">City</p>
            <h2 className="mt-4 font-display-cn text-3xl leading-tight">
              {store.name}
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              {store.addressRaw}
            </p>
            <p className="mt-6 text-sm leading-7 text-[var(--muted)]">
              {store.notes}
            </p>
            <p className="mt-6 text-sm leading-7 text-[var(--muted)]">
              Map: needs confirmation
              <br />
              Opening hours: needs confirmation
              <br />
              Accessibility info: source missing
            </p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
