"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileNav } from "@/components/mobile-nav";
import { isActivePath, primaryNavigation, secondaryNavigation } from "@/lib/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const shellClass = isHome
    ? "mx-auto flex min-h-[104px] w-full max-w-none items-start justify-between gap-5 px-[clamp(1.5rem,5vw,6.75rem)] pt-[1.2rem] pb-[0.95rem]"
    : "editorial-shell flex h-[72px] items-center justify-between gap-5";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-[12px] transition-colors duration-[var(--motion-ui)] ease-[var(--motion)] ${
        isHome
          ? "border-[rgba(255,246,234,0.16)] bg-[rgba(56,6,4,0.34)] text-[var(--surface)]"
          : "border-[var(--line)] bg-[rgba(213,48,33,0.94)] text-[var(--surface)]"
      }`}
    >
      <div className={shellClass}>
        <Link href="/" aria-label="Nearly Anything Goes" className="archive-link group block shrink-0 leading-none">
          <span className="font-display-en block whitespace-nowrap text-[clamp(1.05rem,1.45vw,1.9rem)] font-semibold normal-case leading-none tracking-[-0.03em] text-[var(--surface)] md:text-[clamp(1.15rem,1.25vw,1.8rem)]">
            Nearly Anything Goes
          </span>
          <span className="mt-2 block h-px w-0 bg-[var(--surface)] transition-all duration-[var(--motion-ui)] ease-[var(--motion)] group-hover:w-full group-focus-visible:w-full" />
        </Link>

        <nav className="hidden items-start gap-5 md:flex xl:gap-8">
          {primaryNavigation.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`archive-link inline-flex flex-col border-b pb-1.5 ${
                  active
                    ? isHome
                      ? "border-white text-white"
                      : "border-[var(--surface)] text-[var(--surface)]"
                  : isHome
                      ? "border-transparent text-white/72 hover:border-white/42 hover:text-white"
                      : "border-transparent text-[var(--muted)] hover:border-[var(--accent-line)] hover:text-[var(--accent-strong)]"
                }`}
              >
                <span className="block text-[0.96rem] font-semibold leading-none md:text-[1rem]">
                  {item.label}
                </span>
                <span className={`mt-1 block text-[0.74rem] leading-[1.25] tracking-[0.11em] uppercase transition-colors duration-[var(--motion-ui)] ease-[var(--motion)] ${isHome ? "text-white/70" : "text-[var(--muted)]"}`}>
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
                className={`archive-link ml-1 inline-flex border-b pb-1.5 text-sm ${
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
