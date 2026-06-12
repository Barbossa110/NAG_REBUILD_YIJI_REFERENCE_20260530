import Link from "next/link";

type FilterSection = {
  label: string;
  param: string;
  options: { label: string; value: string }[];
};

type FilterBarProps = {
  basePath: string;
  sections: FilterSection[];
  current: Record<string, string | undefined>;
};

export function FilterBar({ basePath, sections, current }: FilterBarProps) {
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
