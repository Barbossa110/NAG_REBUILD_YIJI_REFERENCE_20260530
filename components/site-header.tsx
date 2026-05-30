"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileNav } from "@/components/mobile-nav";
import { isActivePath, primaryNavigation, secondaryNavigation } from "@/lib/navigation";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--line)] bg-[rgba(243,238,228,0.94)] backdrop-blur-[6px]">
      <div className="editorial-shell flex h-[72px] items-center justify-between gap-6">
        <Link href="/" className="leading-none">
          <span className="font-display-en block text-[1.45rem] tracking-[-0.03em]">
            NAG
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {primaryNavigation.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`border-b pb-1.5 transition-colors ${
                  active
                    ? "border-[var(--ink)] text-[var(--ink)]"
                    : "border-transparent text-[var(--muted)] hover:text-[var(--ink)]"
                }`}
              >
                <span className="nav-label block font-medium leading-none">
                  {item.label}
                </span>
                <span className="metadata mt-1 block normal-case tracking-[0.03em]">
                  {item.labelEn}
                </span>
              </Link>
            );
          })}

          {secondaryNavigation.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`ml-2 border-b pb-1.5 text-sm transition-colors ${
                  active
                    ? "border-[var(--ink)] text-[var(--ink)]"
                    : "border-transparent text-[var(--muted)] hover:border-[var(--line-strong)] hover:text-[var(--ink)]"
                }`}
              >
                {item.labelEn}
              </Link>
            );
          })}
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
