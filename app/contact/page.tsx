import { PageShell } from "@/components/page-shell";

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Contact"
      description="General contact details and current communication routes."
    >
      <div className="grid gap-8 md:grid-cols-2">
        <div className="border border-[var(--line)] bg-[var(--surface)] p-8">
          <p className="eyebrow">General Contact</p>
          <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--muted)]">
            <p>Contact person: Ryan</p>
            <p>Phone: 185-8199-9229</p>
            <p>Email: narture@vip.163.com</p>
            <p>Official mailbox: nearlyanythinggoesofficial@gmail.com</p>
          </div>
        </div>
        <div className="border border-[var(--line)] bg-[var(--surface)] p-8">
          <p className="eyebrow">Media / Collaboration</p>
          <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--muted)]">
            <p>Press material: PLACEHOLDER / needs confirmation</p>
            <p>Partnership route: PLACEHOLDER / source missing</p>
            <p>Response hours: PLACEHOLDER / source missing</p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
