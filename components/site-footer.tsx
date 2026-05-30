import Link from "next/link";
import { primaryNavigation, secondaryNavigation } from "@/lib/navigation";

export function SiteFooter() {
  return (
    <footer className="fine-rule mt-24">
      <div className="editorial-shell grid gap-10 py-12 md:grid-cols-[1.15fr_0.9fr_0.95fr]">
        <div className="space-y-4">
          <p className="font-display-en text-[1.5rem] tracking-[-0.03em]">
            Nearly Anything Goes
          </p>
          <p className="body-copy max-w-md">
            A curated art limited retail space where artworks, artists, events,
            and cultural life meet.
          </p>
        </div>

        <div>
          <p className="section-kicker">Channels</p>
          <div className="mt-4 flex flex-col gap-4 text-[var(--muted)]">
            {primaryNavigation.map((item) => (
              <Link key={item.href} href={item.href} className="grid gap-1.5">
                <span className="text-[1rem] font-medium leading-none">{item.label}</span>
                <span className="metadata normal-case tracking-[0.03em]">
                  {item.labelEn}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="section-kicker">Editorial / Sources</p>
          <div className="mt-4 flex flex-col gap-4 text-[var(--muted)]">
            {secondaryNavigation.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm leading-7">
                {item.labelEn}
              </Link>
            ))}
            <span className="body-copy">Selected records and contact details appear here as material becomes available.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
