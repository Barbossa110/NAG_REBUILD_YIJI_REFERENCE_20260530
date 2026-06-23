import Image from "next/image";
import { PageShell } from "@/components/page-shell";
import { withAssetPath } from "@/lib/asset-path";

export default function ContactPage() {
  return (
    <PageShell
      eyebrow=""
      title="联系我们 / Contact"
      description="作品咨询、到访预约、合作沟通与直接联系。For artwork inquiries, visits, collaborations, and direct contact."
    >
      <div className="grid min-w-0 gap-8 overflow-hidden lg:grid-cols-[1.05fr_0.95fr]">
        <section className="archive-panel min-w-0 overflow-hidden p-6 md:p-8 lg:p-9">
          <p className="eyebrow">Contact Pathways / 联系方式</p>
          <div className="mt-8 grid gap-6 text-sm leading-7 text-[var(--muted)]">
            <div>
              <p className="section-kicker">Email / 邮箱</p>
              <p className="mt-2 text-[1rem] text-[var(--ink)]">narture@vip.163.com</p>
            </div>
            <div>
              <p className="section-kicker">Official Mailbox / 官方邮箱</p>
              <p className="mt-2 break-words text-[1rem] text-[var(--ink)]">
                nearlyanythinggoesofficial@gmail.com
              </p>
            </div>
            <div className="grid max-w-[17.5rem] gap-2 sm:max-w-md">
              <p className="body-copy">
                扫描右侧二维码添加微信，或使用以上邮箱进行作品咨询、到访预约与合作沟通。
              </p>
              <p className="body-copy">
                Scan the QR code for WeChat contact, or use the email above for artwork inquiries, visits, and collaborations.
              </p>
            </div>
          </div>
        </section>
        <section className="archive-panel min-w-0 overflow-hidden p-6 md:p-8 lg:p-9">
          <div className="flex min-h-full flex-col justify-between gap-10">
            <div>
              <p className="eyebrow">WeChat / 微信</p>
              <p className="body-copy mt-4 max-w-sm">
                微信扫码可直接联系 Nearly Anything Goes。
                <br />
                Scan to contact Nearly Anything Goes directly on WeChat.
              </p>
            </div>
            <Image
              src={withAssetPath("/sources/branding/contact-qr.jpg") ?? "/sources/branding/contact-qr.jpg"}
              alt="WeChat contact QR"
              width={924}
              height={924}
              className="mx-auto h-auto border border-[var(--accent-line)] bg-[var(--surface)] p-3 transition-transform duration-500 ease-[var(--motion)] hover:scale-[1.015] md:mx-0"
              style={{ width: "min(58vw, 220px)" }}
              unoptimized
            />
          </div>
        </section>
      </div>
    </PageShell>
  );
}
