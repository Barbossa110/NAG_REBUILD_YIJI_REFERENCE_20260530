"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { isActivePath, primaryNavigation, secondaryNavigation } from "@/lib/navigation";

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-10 min-w-14 items-center justify-center border border-[var(--line)] px-3 text-sm"
        aria-expanded={open}
        aria-label="Open mobile navigation"
      >
        {open ? "Close" : "Menu"}
      </button>

      {open ? (
        <div className="absolute inset-x-0 top-full border-b border-[var(--line)] bg-[rgba(243,238,228,0.98)]">
          <nav className="editorial-shell flex flex-col gap-1 py-6">
            {[...primaryNavigation, ...secondaryNavigation].map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`border-b border-[var(--line)] py-4 ${
                    active ? "text-[var(--ink)]" : "text-[var(--muted)]"
                  }`}
                >
                  <span className="block text-[1.35rem] font-medium leading-tight">{item.label}</span>
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
