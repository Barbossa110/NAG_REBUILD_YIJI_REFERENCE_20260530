import Link from "next/link";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  inverse?: boolean;
  action?: {
    href: string;
    label: string;
    inverse?: boolean;
  };
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  inverse = false,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 grid gap-7 border-t border-[var(--line)] pt-7 md:grid-cols-[1.28fr_0.72fr] md:items-end">
      <div className="space-y-5">
        <p className={`section-kicker ${inverse ? "text-[rgba(255,255,255,0.62)]" : ""}`}>
          {eyebrow}
        </p>
        <h2 className="section-title max-w-5xl">
          {title}
        </h2>
      </div>

      <div className="space-y-4 md:justify-self-end">
        {description ? (
          <p
            className={`max-w-lg body-copy ${
              inverse ? "text-[rgba(255,255,255,0.72)]" : "text-[var(--muted)]"
            }`}
          >
            {description}
          </p>
        ) : null}
        {action ? (
          <Link
            href={action.href}
            className={`inline-flex border-b pb-1 text-sm ${
              action.inverse ? "border-[var(--surface)]" : "border-[var(--ink)]"
            }`}
          >
            {action.label}
          </Link>
        ) : null}
      </div>
    </div>
  );
}
