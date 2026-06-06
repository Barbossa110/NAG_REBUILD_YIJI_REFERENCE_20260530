import { PageShell } from "@/components/page-shell";
import { stores } from "@/data/stores";

export default function StoresPage() {
  return (
    <PageShell
      eyebrow="Stores"
      title="City anchors for future NAG spaces."
      description="Opening addresses and visit hours will be published only after they are ready."
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
              Address / 地址：暂未公布
              <br />
              Hours / 开放时间：暂未公布
              <br />
              Visit access / 到访信息：暂未公布
            </p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
