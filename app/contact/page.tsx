import Image from "next/image";
import { PageShell } from "@/components/page-shell";
import { withAssetPath } from "@/lib/asset-path";

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Contact"
      description="For artwork inquiries, visits, collaborations, and direct contact."
    >
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="border border-[var(--line)] bg-[var(--surface)] p-6 md:p-8">
          <p className="eyebrow">Contact Pathways</p>
          <div className="mt-8 grid gap-6 text-sm leading-7 text-[var(--muted)]">
            <div>
              <p className="section-kicker">Email</p>
              <p className="mt-2 text-[1rem] text-[var(--ink)]">narture@vip.163.com</p>
            </div>
            <div>
              <p className="section-kicker">Official mailbox</p>
              <p className="mt-2 break-words text-[1rem] text-[var(--ink)]">
                nearlyanythinggoesofficial@gmail.com
              </p>
            </div>
            <p className="body-copy max-w-md">
              Scan the QR code for WeChat contact, or use the email above for artwork inquiries and visits.
            </p>
          </div>
        </div>
        <div className="border border-[var(--line)] bg-[var(--surface)] p-6 md:p-8">
          <div className="flex min-h-full flex-col justify-between gap-10">
            <div>
              <p className="eyebrow">WeChat</p>
              <p className="body-copy mt-4 max-w-sm">
                A compact scan point for direct contact.
              </p>
            </div>
            <Image
              src={withAssetPath("/sources/branding/contact-qr.jpg") ?? "/sources/branding/contact-qr.jpg"}
              alt="WeChat contact QR"
              width={924}
              height={924}
              className="mx-auto h-auto border border-[var(--line)] bg-white p-3 md:mx-0"
              style={{ width: "min(58vw, 220px)" }}
              unoptimized
            />
          </div>
        </div>
      </div>
    </PageShell>
  );
}
