import { PageShell } from "@/components/page-shell";
import { stores } from "@/data/stores";

export default function StoresPage() {
  return (
    <PageShell
      eyebrow="Stores"
      title="City anchors for future Nearly Anything Goes spaces."
      description="Opening addresses and visit hours will be published only after they are ready."
    >
      <div className="grid gap-8 md:grid-cols-3">
        {stores.map((store) => (
          <article
            key={store.slug}
            className="border border-[var(--line)] bg-[rgba(122,16,10,0.12)] p-6 md:p-7"
          >
            <p className="text-[0.68rem] leading-[1.45] tracking-[0.08em] text-[var(--muted)] uppercase">
              CITY
            </p>
            <h2 className="mt-3 font-display-cn text-[1.9rem] leading-[1.08] text-[var(--surface)] md:text-[2.2rem]">
              {store.name}
            </h2>
            <p className="mt-4 text-[0.88rem] leading-[1.7] text-[var(--muted)]">
              暂未公布
            </p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
