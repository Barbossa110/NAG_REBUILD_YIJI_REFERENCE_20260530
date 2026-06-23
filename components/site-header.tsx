"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/brand-logo";
import { MobileNav } from "@/components/mobile-nav";
import { isActivePath, primaryNavigation, secondaryNavigation } from "@/lib/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-[12px] transition-colors ${
        isHome
          ? "border-[rgba(255,246,234,0.16)] bg-[rgba(56,6,4,0.34)] text-[var(--surface)]"
          : "border-[var(--line)] bg-[rgba(213,48,33,0.94)] text-[var(--surface)]"
      }`}
    >
      <div className="editorial-shell flex h-[72px] items-center justify-between gap-5">
        <Link href="/" aria-label="Nearly Anything Goes" className="flex shrink-0 items-center">
          <BrandLogo
            priority
            className="w-[6.5rem] md:w-[7.2rem] lg:w-[7.8rem]"
            sizes="(min-width: 1024px) 7.8rem, (min-width: 768px) 7.2rem, 6.5rem"
          />
        </Link>

        <nav className="hidden items-center gap-4 md:flex xl:gap-6">
          {primaryNavigation.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`archive-link border-b pb-1.5 ${
                  active
                    ? isHome
                      ? "border-white text-white"
                      : "border-[var(--surface)] text-[var(--surface)]"
                    : isHome
                      ? "border-transparent text-white/72 hover:border-white/42 hover:text-white"
                      : "border-transparent text-[var(--muted)] hover:border-[var(--accent-line)] hover:text-[var(--accent-strong)]"
                }`}
              >
                <span className="block text-[0.84rem] font-medium leading-none md:text-[0.88rem]">
                  {item.label}
                </span>
                <span className={`mt-1 block text-[0.66rem] leading-[1.3] tracking-[0.12em] uppercase ${isHome ? "text-white/70" : "text-[var(--muted)]"}`}>
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
                className={`archive-link ml-1 border-b pb-1.5 text-sm ${
                  active
                    ? isHome
                      ? "border-white text-white"
                      : "border-[var(--surface)] text-[var(--surface)]"
                    : isHome
                      ? "border-transparent text-white/72 hover:border-white/42 hover:text-white"
                      : "border-transparent text-[var(--muted)] hover:border-[var(--accent-line)] hover:text-[var(--accent-strong)]"
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
