import { PageShell } from "@/components/page-shell";
import { stores } from "@/data/stores";

export default function StoresPage() {
  return (
    <PageShell
      eyebrow="Stores"
      title="Store information stays factual and restrained."
      description="Current city references and publication status."
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
              暂未公布
            </p>
            <p className="mt-6 text-sm leading-7 text-[var(--muted)]">
              {store.notes}
            </p>
            <p className="mt-6 text-sm leading-7 text-[var(--muted)]">
              Map: 暂未公布
              <br />
              Opening hours: 暂未公布
              <br />
              Accessibility info: 暂未公布
            </p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
