import type { ReactNode } from "react";

type PageShellProps = {
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function PageShell({
  eyebrow,
  title,
  description,
  children,
}: PageShellProps) {
  return (
    <main>
      <section className="fine-rule section-space">
        <div className="editorial-shell space-y-5">
          <p className="section-kicker">{eyebrow}</p>
          <h1 className="section-title max-w-5xl">
            <span className="font-display-en block">{title}</span>
          </h1>
          {description ? (
            <p className="body-large max-w-2xl">
              {description}
            </p>
          ) : null}
        </div>
      </section>
      <section className="fine-rule section-space">
        <div className="editorial-shell">{children}</div>
      </section>
    </main>
  );
}
