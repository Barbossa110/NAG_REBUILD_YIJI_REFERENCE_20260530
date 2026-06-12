"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileNav } from "@/components/mobile-nav";
import { isActivePath, primaryNavigation, secondaryNavigation } from "@/lib/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-[12px] transition-colors ${
        isHome
          ? "border-white/16 bg-[rgba(18,8,6,0.16)] text-white"
          : "border-[var(--line)] bg-[rgba(241,235,223,0.88)] text-[var(--ink)]"
      }`}
    >
      <div className="editorial-shell flex h-[76px] items-center justify-between gap-6">
        <Link href="/" className="group leading-none">
          <span className={`font-display-en block max-w-[13rem] text-[1rem] leading-[1] md:max-w-none ${isHome ? "text-white" : "text-[var(--ink)]"}`}>
            Nearly Anything Goes
          </span>
          <span className={`mt-2 block h-px w-0 transition-all duration-300 ease-[var(--motion)] group-hover:w-full ${isHome ? "bg-white" : "bg-[var(--ink)]"}`} />
        </Link>

        <nav className="hidden items-center gap-5 md:flex xl:gap-7">
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
                      : "border-[var(--ink)] text-[var(--ink)]"
                    : isHome
                      ? "border-transparent text-white/72 hover:border-white/42 hover:text-white"
                      : "border-transparent text-[var(--muted)] hover:border-[var(--line-strong)] hover:text-[var(--ink)]"
                }`}
              >
                <span className="nav-label block font-medium leading-none">
                  {item.label}
                </span>
                <span className={`metadata mt-1 block normal-case tracking-[0.03em] ${isHome ? "text-white/70" : ""}`}>
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
                      : "border-[var(--ink)] text-[var(--ink)]"
                    : isHome
                      ? "border-transparent text-white/72 hover:border-white/42 hover:text-white"
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
