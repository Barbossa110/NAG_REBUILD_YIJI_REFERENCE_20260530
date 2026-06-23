import { PageShell } from "@/components/page-shell";
import { BrandLogo } from "@/components/brand-logo";

export default function AboutPage() {
  const principles = [
    {
      number: "01",
      label: "Brand Profile / 品牌简介",
      zh: "Nearly Anything Goes 是一种自然融入城市的策展式艺术限定零售空间，既是公共艺术与城市对话的窗口，也是艺术家品牌发声的中途岛与无限创意的发源地。",
      en: "Nearly Anything Goes is a curated art limited retail space that brings public art, artist expression, and immersive retail experience into one platform.",
    },
    {
      number: "02",
      label: "Brand Philosophy / 品牌理念",
      zh: "关注潮流艺术家的限量单品、设计师玩具、版画、雕塑，以及一切具备精神密度的实体创作。我们不定义风格，不盲从市场，只做一件事：让好的作品，找到该去的地方。",
      en: "We focus on limited-edition items, designer toys, prints, sculptures, and physical creations with strong conceptual or emotional density.",
    },
  ];

  const scope = [
    {
      label: "Brand Positioning / 品牌定位",
      zh: "Nearly Anything Goes 是一个策展式艺术限定零售空间。",
      en: "Nearly Anything Goes: Curated Art Limited Retail Space.",
    },
    {
      label: "Platform Scope / 平台方向",
      zh: "主营业务：独家｜限定艺术品售卖 × 联名艺术品发布 × 艺术家商业化运营",
      en: "Exclusive and limited-edition artworks, collaborative releases, and artist commercial operations.",
    },
  ];

  return (
    <PageShell
      eyebrow="About"
      title="About Nearly Anything Goes"
      description="A concise introduction to Nearly Anything Goes' position, philosophy, and scope."
    >
      <div className="grid gap-10 xl:grid-cols-[0.32fr_0.68fr]">
        <aside className="border-y border-[var(--line)] py-6 xl:sticky xl:top-32 xl:self-start">
          <p className="eyebrow">About / 关于</p>
          <BrandLogo
            priority
            className="mt-10 max-w-[20rem]"
            sizes="(min-width: 1280px) 20rem, 88vw"
          />
        </aside>

        <section className="min-w-0">
          <div className="border-t border-[var(--line)] pt-6">
            <p className="eyebrow">Position / 品牌定位</p>
            <h1 className="mt-8 max-w-5xl font-display-cn text-[clamp(2.2rem,10.8vw,3.4rem)] leading-[0.98] tracking-[-0.03em] text-[var(--surface)] md:text-[clamp(3.8rem,6.9vw,7.2rem)] md:leading-[0.96] md:tracking-[-0.045em]">
              <span className="block md:inline">策展式艺术</span>
              <span className="block md:inline">限定零售</span>
              <span className="block md:inline">空间</span>
            </h1>
            <p className="mt-8 max-w-[18rem] pb-10 text-[1rem] leading-[1.78] text-[var(--muted)] md:max-w-2xl md:pb-0 md:text-[clamp(1.05rem,1.8vw,1.55rem)] md:leading-[1.75]">
              Nearly Anything Goes is a curated art limited retail space that brings public art, artist expression, and immersive retail experience into one platform.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {principles.map((item) => (
              <article
                key={item.label}
                className="grid min-h-[28rem] content-between border border-[var(--line)] bg-[rgba(122,16,10,0.12)] p-6 transition-colors duration-300 ease-[var(--motion)] hover:border-[var(--accent-line)] md:p-8"
              >
                <div className="flex items-start justify-between gap-6 border-b border-[var(--line)] pb-5">
                  <p className="eyebrow">{item.label}</p>
                  <span className="index-mark">{item.number}</span>
                </div>
                <div className="mt-10 grid gap-8">
                  <p className="font-display-cn text-[clamp(1.45rem,2.25vw,2.25rem)] leading-[1.38] text-[var(--surface)] text-pretty">
                    {item.zh}
                  </p>
                  <p className="body-copy max-w-[36rem]">
                    {item.en}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 border-y border-[var(--line)]">
            {scope.map((item) => (
              <article
                key={item.label}
                className="grid gap-6 border-b border-[var(--line)] py-8 last:border-b-0 md:grid-cols-[0.38fr_0.62fr] md:items-start"
              >
                <p className="eyebrow">{item.label}</p>
                <div className="grid gap-5">
                  <p className="font-display-cn text-[clamp(1.55rem,3vw,3rem)] leading-[1.08] text-[var(--surface)]">
                    {item.zh}
                  </p>
                  <p className="body-copy max-w-[44rem]">
                    {item.en}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
}
