import Link from "next/link";
import type { ReactNode } from "react";

type FilterSection = {
  label: string;
  param: string;
  options: { label: string; value: string }[];
};

type FilterBarProps = {
  basePath: string;
  sections: FilterSection[];
  current: Record<string, string | undefined>;
  variant?: "default" | "index";
  allLabel?: string;
};

export function FilterBar({
  basePath,
  sections,
  current,
  variant = "default",
  allLabel = "All",
}: FilterBarProps) {
  if (variant === "index") {
    return (
      <section className="mb-8 border-b border-[var(--line)] pb-6 md:mb-10 md:pb-7">
        <div className="grid gap-5 md:grid-cols-[0.32fr_0.68fr] md:gap-10">
          <p className="text-[0.68rem] leading-[1.45] tracking-[0.08em] text-[var(--muted)] uppercase">
            筛选 / Filter
          </p>
          <div className="grid gap-5">
            {sections.map((section) => (
              <div key={section.param} className="grid gap-3 md:grid-cols-[7rem_1fr] md:items-start">
                <p className="pt-1 text-[0.72rem] leading-[1.45] tracking-[0.08em] text-[var(--muted)] uppercase">
                  {section.label}
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-2 overflow-hidden">
                  <FilterLink
                    href={buildHref(basePath, current, section.param, undefined)}
                    active={!current[section.param]}
                  >
                    {allLabel}
                  </FilterLink>
                  {section.options.map((option) => {
                    const active = current[section.param] === option.value;
                    return (
                      <FilterLink
                        key={option.value}
                        href={buildHref(basePath, current, section.param, option.value)}
                        active={active}
                      >
                        {option.label}
                      </FilterLink>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="filter-panel mb-10 md:grid-cols-3">
      {sections.map((section) => (
        <div key={section.param}>
          <p className="section-kicker">{section.label}</p>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
            <Link
              href={buildHref(basePath, current, section.param, undefined)}
              className={`archive-link filter-link ${
                !current[section.param]
                  ? "active"
                  : ""
              }`}
            >
              All
            </Link>
            {section.options.map((option) => {
              const active = current[section.param] === option.value;
              return (
                <Link
                  key={option.value}
                  href={buildHref(basePath, current, section.param, option.value)}
                  className={`archive-link filter-link ${active ? "active" : ""}`}
                >
                  {option.label}
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

function FilterLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-7 items-center border-b pb-0.5 text-[0.78rem] leading-[1.45] transition-colors duration-200 ease-[var(--motion)] ${
        active
          ? "border-[var(--surface)] text-[var(--surface)]"
          : "border-transparent text-[var(--muted)] hover:border-[var(--accent-line)] hover:text-[var(--surface)]"
      }`}
    >
      {children}
    </Link>
  );
}

function buildHref(
  basePath: string,
  current: Record<string, string | undefined>,
  key: string,
  value: string | undefined,
) {
  const params = new URLSearchParams();
  Object.entries(current).forEach(([entryKey, entryValue]) => {
    if (entryKey === key || !entryValue) return;
    params.set(entryKey, entryValue);
  });
  if (value) params.set(key, value);
  const query = params.toString();
  return query ? `${basePath}?${query}` : basePath;
}
