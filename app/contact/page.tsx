import Image from "next/image";
import { PageShell } from "@/components/page-shell";
import { withAssetPath } from "@/lib/asset-path";

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Contact"
      description="Current contact details and QR access."
    >
      <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
        <div className="border border-[var(--line)] bg-[var(--surface)] p-8">
          <p className="eyebrow">General Contact</p>
          <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--muted)]">
            <p>Email: narture@vip.163.com</p>
            <p>Official mailbox: nearlyanythinggoesofficial@gmail.com</p>
            <p>WeChat contact available via QR code.</p>
          </div>
        </div>
        <div className="border border-[var(--line)] bg-[var(--surface)] p-8">
          <p className="eyebrow">WeChat QR</p>
          <div className="mt-6 space-y-4">
            <Image
              src={withAssetPath("/sources/branding/contact-qr.jpg") ?? "/sources/branding/contact-qr.jpg"}
              alt="WeChat contact QR"
              width={924}
              height={924}
              className="h-auto w-full max-w-[360px]"
              unoptimized
            />
          </div>
        </div>
      </div>
    </PageShell>
  );
}
