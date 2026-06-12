import Image from "next/image";
import { withAssetPath } from "@/lib/asset-path";

const heroImage = "/sources/branding/home-hero.png";

export default function Home() {
  return (
    <main className="min-h-svh overflow-hidden bg-[var(--inverse)]">
      <section className="relative min-h-svh">
        <Image
          src={withAssetPath(heroImage) ?? heroImage}
          alt="Nearly Anything Goes homepage visual"
          fill
          sizes="100vw"
          priority
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.52)_0%,rgba(0,0,0,0.22)_48%,rgba(0,0,0,0.06)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 top-0 flex items-end">
          <div className="editorial-shell pb-7 pt-28 text-[var(--surface)] md:pb-10 md:pt-32 lg:pb-12">
            <div className="max-w-6xl">
              <h1 className="font-display-en max-w-5xl text-[clamp(3rem,8.2vw,8rem)] leading-[0.9] tracking-[-0.055em]">
                Nearly Anything Goes
              </h1>
              <p className="font-display-cn mt-5 max-w-3xl text-[clamp(1.25rem,2.55vw,2.35rem)] leading-[1.35] tracking-[-0.02em] text-white/84">
                策展式艺术限定零售平台
              </p>
            </div>
            <div className="mt-7 grid max-w-6xl gap-4 border-t border-white/28 pt-5 md:grid-cols-3">
              <p className="text-[0.84rem] leading-[1.72] text-white/74">
                Curated art limited retail space.
              </p>
              <p className="text-[0.84rem] leading-[1.72] text-white/74">
                Art, objects, artists, and events are presented with a restrained editorial rhythm.
              </p>
              <p className="text-[0.84rem] leading-[1.72] text-white/74">
                首店筹备中 / 快闪店即将公布
                <br />
                成都 / 武汉 / 深圳
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
