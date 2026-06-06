import Link from "next/link";

export default function NotFound() {
  return (
    <main className="fine-rule section-space">
      <div className="editorial-shell max-w-3xl">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-display-en text-5xl leading-none tracking-[-0.04em] md:text-7xl">
          This page is not in the archive.
        </h1>
        <p className="mt-6 text-base leading-8 text-[var(--muted)]">
          The page may have moved, or it may not be public yet.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex border border-[var(--ink)] px-6 py-3 text-sm uppercase tracking-[0.14em]"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}
