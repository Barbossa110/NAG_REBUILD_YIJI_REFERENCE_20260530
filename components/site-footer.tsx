"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/brand-logo";
import { primaryNavigation } from "@/lib/navigation";

export function SiteFooter() {
  const pathname = usePathname();
  const normalizedPathname = pathname.replace(/\/+$/, "") || "/";
  const hideBrandBand = normalizedPathname === "/about";

  if (normalizedPathname === "/" || normalizedPathname === "/events") return null;

  return (
    <footer className="fine-rule mt-20">
      <div className="editorial-shell py-12 md:py-14">
        {hideBrandBand ? null : (
          <div className="grid gap-8 border-b border-[var(--line)] pb-8 lg:grid-cols-[0.9fr_1.1fr]">
            <BrandLogo className="max-w-[15rem]" sizes="15rem" />
            <p className="body-copy max-w-3xl lg:justify-self-end">
              A curated art limited retail platform where works, artists, events, and cultural life meet.
            </p>
          </div>
        )}

        <div className={`grid gap-8 ${hideBrandBand ? "" : "pt-8"} lg:grid-cols-[1.45fr_0.75fr]`}>
          <nav aria-label="Footer primary navigation">
            <p className="section-kicker">Explore</p>
            <div className="mt-5 grid gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
              {primaryNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="archive-link group border-t border-[var(--line)] pt-3"
                >
                  <span className="block text-[1rem] font-medium leading-none text-[var(--ink)]">
                    {item.label}
                  </span>
                  <span className="metadata mt-1.5 block normal-case tracking-[0.04em] transition-colors group-hover:text-[var(--accent-strong)]">
                    {item.labelEn}
                  </span>
                </Link>
              ))}
            </div>
          </nav>
          <div className="border-t border-[var(--line)] pt-5 lg:border-t-0 lg:pt-0">
            <p className="section-kicker">Contact</p>
            <Link href="/contact" className="archive-link body-copy mt-4 block max-w-sm border-b border-transparent pb-1 hover:text-[var(--accent-strong)]">
              For visits, collaborations, and artwork inquiries, contact Nearly Anything Goes directly.
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
