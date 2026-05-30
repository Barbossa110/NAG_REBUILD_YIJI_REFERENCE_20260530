import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Nearly Anything Goes / NAG",
  description:
    "Nearly Anything Goes / NAG — curated art, artists, events, and editorial archive.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className="h-full antialiased"
    >
      <body className="min-h-full bg-[var(--bg)] text-[var(--ink)]">
        <div className="min-h-full">
          <SiteHeader />
          <div className="pt-20 md:pt-24">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
