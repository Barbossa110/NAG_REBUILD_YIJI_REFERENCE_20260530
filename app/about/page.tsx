import Image from "next/image";
import { PageShell } from "@/components/page-shell";
import { siteSettings } from "@/data/site-settings";
import { withAssetPath } from "@/lib/asset-path";

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="About Nearly Anything Goes"
      description="A concise introduction to NAG's position, philosophy, and scope."
    >
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="border border-[var(--line)] bg-[var(--surface)] p-8 space-y-6">
          <Image
            src={withAssetPath("/sources/branding/about-image.jpg") ?? "/sources/branding/about-image.jpg"}
            alt="Nearly Anything Goes logo"
            width={1080}
            height={1080}
            className="h-auto w-full"
            unoptimized
          />
          <div className="space-y-3">
            <p className="eyebrow">Brand Line / 品牌主张</p>
            <p className="mt-4 font-display-cn text-3xl leading-tight">
              {siteSettings.missionZh}
            </p>
            <p className="body-copy">{siteSettings.missionEn}</p>
          </div>
        </div>
        <div className="space-y-8">
          <section className="border-t border-[var(--line)] pt-6">
            <p className="eyebrow">Brand Profile / 品牌简介</p>
            <p className="mt-4 text-sm leading-8 text-[var(--muted)]">
              Nearly Anything Goes 简称 NAG，是一种自然融入城市的策展式艺术限定零售空间，既是公共艺术与城市对话的窗口，也是艺术家品牌发声的中途岛与无限创意的发源地。
            </p>
            <p className="mt-4 text-sm leading-8 text-[var(--muted)]">
              Nearly Anything Goes is a curated art limited retail space that brings public art, artist expression, and immersive retail experience into one platform.
            </p>
          </section>
          <section className="border-t border-[var(--line)] pt-6">
            <p className="eyebrow">Brand Philosophy / 品牌理念</p>
            <p className="mt-4 text-sm leading-8 text-[var(--muted)]">
              关注潮流艺术家的限量单品、设计师玩具、版画、雕塑，以及一切具备精神密度的实体创作。我们不定义风格，不盲从市场，只做一件事：让好的作品，找到该去的地方。
            </p>
            <p className="mt-4 text-sm leading-8 text-[var(--muted)]">
              We focus on limited-edition items, designer toys, prints, sculptures, and physical creations with strong conceptual or emotional density.
            </p>
          </section>
          <section className="border-t border-[var(--line)] pt-6">
            <p className="eyebrow">Brand Positioning / 品牌定位</p>
            <p className="mt-4 text-sm leading-8 text-[var(--muted)]">
              Nearly Anything Goes：Curated Art Limited Retail Space
            </p>
            <p className="mt-4 text-sm leading-8 text-[var(--muted)]">
              Nearly Anything Goes: Curated Art Limited Retail Space.
            </p>
          </section>
          <section className="border-t border-[var(--line)] pt-6">
            <p className="eyebrow">Platform Scope / 平台方向</p>
            <p className="mt-4 text-sm leading-8 text-[var(--muted)]">
              主营业务：独家｜限定艺术品售卖 × 联名艺术品发布 × 艺术家商业化运营
            </p>
            <p className="mt-4 text-sm leading-8 text-[var(--muted)]">
              Exclusive and limited-edition artworks, collaborative releases, and artist commercial operations.
            </p>
          </section>
        </div>
      </div>
    </PageShell>
  );
}
