import type { ReactNode } from "react";

type PageShellProps = {
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function PageShell({
  children,
}: PageShellProps) {
  return (
    <main className="pt-20 md:pt-24">
      <section className="fine-rule page-content">
        <div className="editorial-shell">{children}</div>
      </section>
    </main>
  );
}
