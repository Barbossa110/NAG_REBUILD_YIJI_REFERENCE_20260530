import Link from "next/link";
import { PageShell } from "@/components/page-shell";

export function EventsPageClient() {
  return (
    <PageShell eyebrow="Events" title="Nearly Anything Goes" description="Coming Soon">
      <div className="grid min-h-[calc(100dvh-10rem)] items-start gap-10 pb-16 pt-3 md:min-h-[calc(100dvh-11rem)] md:gap-12 md:pb-20 md:pt-6 xl:grid-cols-[1.35fr_0.65fr] xl:items-end">
        <div className="max-w-5xl">
          <h1 className="font-display-en text-[clamp(3.6rem,8.6vw,9rem)] font-black leading-[0.9] tracking-[-0.07em] text-[var(--surface)] md:max-w-[12ch]">
            Nearly Anything Goes
          </h1>
          <p className="mt-8 max-w-[18rem] font-display-cn text-[clamp(1.7rem,3vw,3rem)] leading-[1.06] tracking-[-0.03em] text-[var(--surface)] md:mt-10 md:max-w-[22rem]">
            即将呈现
            <span className="block text-[0.96em] font-medium tracking-[-0.01em] text-white/82 md:mt-1">
              Coming Soon
            </span>
          </p>
        </div>

        <aside className="xl:justify-self-end">
          <div className="grid gap-4 border-t border-[var(--line)] pt-5 md:min-w-[18rem] md:gap-5 md:pt-6">
            <Link
              href="/"
              className="archive-link group block border-b border-[var(--line)] pb-4 transition-colors hover:border-[var(--accent-line)]"
            >
              <span className="section-kicker block">Explore</span>
              <span className="mt-3 block text-[1rem] font-medium leading-none text-[var(--surface)] md:text-[1.05rem]">
                Nearly Anything Goes
              </span>
              <span className="mt-1.5 block text-[0.74rem] leading-[1.35] text-[var(--muted)]">
                产品 / 艺术家 / 店铺地址 / 艺术事件
              </span>
            </Link>
            <Link
              href="/contact"
              className="archive-link group block border-b border-[var(--line)] pb-4 transition-colors hover:border-[var(--accent-line)]"
            >
              <span className="section-kicker block">Contact</span>
              <span className="mt-3 block text-[1rem] font-medium leading-none text-[var(--surface)] md:text-[1.05rem]">
                Contact Nearly Anything Goes
              </span>
              <span className="mt-1.5 block text-[0.74rem] leading-[1.35] text-[var(--muted)]">
                For visits, collaborations, and artwork inquiries.
              </span>
            </Link>
          </div>
        </aside>
      </div>
    </PageShell>
  );
}
