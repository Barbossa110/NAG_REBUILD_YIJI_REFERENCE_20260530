"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { isActivePath, primaryNavigation, secondaryNavigation } from "@/lib/navigation";

export function MobileNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className={`inline-flex h-10 min-w-14 items-center justify-center border px-3 text-sm transition-all duration-300 ease-[var(--motion)] active:scale-[0.98] ${
          isHome
            ? "border-[var(--line-strong)] bg-[rgba(122,16,10,0.18)] text-[var(--surface)] hover:bg-[rgba(122,16,10,0.28)]"
            : "border-[var(--line-strong)] bg-[rgba(122,16,10,0.18)] text-[var(--surface)] hover:border-[var(--accent-line)] hover:bg-[var(--accent-soft)]"
        }`}
        aria-expanded={open}
        aria-label="Open mobile navigation"
      >
        {open ? "Close" : "Menu"}
      </button>

      {open ? (
        <div className="absolute inset-x-0 top-full border-b border-[var(--line)] bg-[rgba(213,48,33,0.98)] text-[var(--surface)] backdrop-blur-[12px]">
          <nav className="editorial-shell flex flex-col gap-0 py-5">
            {[...primaryNavigation, ...secondaryNavigation].map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`archive-link border-b border-[var(--line)] py-3.5 ${
                    active ? "text-[var(--accent-strong)]" : "text-[var(--muted)]"
                  }`}
                >
                  <span className="block text-[1.2rem] font-medium leading-tight">{item.label}</span>
                  <span className="metadata mt-1 block normal-case tracking-[0.03em]">
                    {item.labelEn}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
