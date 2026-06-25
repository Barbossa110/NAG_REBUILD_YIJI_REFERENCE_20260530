import Image from "next/image";
import { withAssetPath } from "@/lib/asset-path";

const heroImage = "/sources/branding/home-hero.png";

export default function Home() {
  return (
    <main className="min-h-svh overflow-hidden bg-[var(--inverse)]">
      <section className="relative min-h-svh overflow-hidden bg-[var(--inverse)]">
        <Image
          src={withAssetPath(heroImage) ?? heroImage}
          alt="Nearly Anything Goes homepage visual"
          fill
          sizes="100vw"
          priority
          className="object-cover object-center"
          unoptimized
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_44%,rgba(255,28,12,0.16)_0%,rgba(255,28,12,0.24)_22%,rgba(87,10,6,0.68)_62%,rgba(26,2,0,0.94)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(87,10,6,0.28)_0%,rgba(87,10,6,0.08)_24%,rgba(87,10,6,0.66)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(26,2,0,0.88)_0%,rgba(87,10,6,0.7)_20%,rgba(255,24,8,0.12)_46%,rgba(87,10,6,0.16)_74%,rgba(26,2,0,0.72)_100%)]" />
        <div className="relative z-10 flex min-h-svh flex-col">
          <div className="editorial-shell flex min-h-svh flex-col pb-[clamp(1rem,2vw,1.8rem)] pt-[104px] text-[var(--surface)] md:pt-[104px]">
            <div className="mt-[clamp(7rem,18vh,12rem)] max-w-3xl md:mt-[clamp(11rem,26vh,16rem)]">
              <h1 className="font-display-en max-w-[7.3ch] text-[clamp(3.65rem,7.5vw,9.5rem)] font-black leading-[0.88] tracking-[-0.07em] text-white">
                <span className="block">Nearly</span>
                <span className="block">Anything</span>
                <span className="block">Goes</span>
              </h1>
              <p className="mt-7 max-w-[24rem] text-[clamp(1.55rem,2.15vw,2.45rem)] leading-[1.08] tracking-[-0.02em] text-white/96 md:mt-8 md:max-w-[22rem] md:text-[clamp(1.65rem,2vw,2.35rem)]">
                策展式艺术限定零售平台
              </p>
            </div>
            <div className="mt-auto border-t border-white/24 pt-4 md:pt-5">
              <div className="grid gap-4 text-[0.74rem] leading-[1.72] text-white/78 md:grid-cols-[0.92fr_1.12fr_0.92fr] md:gap-8 md:text-[0.82rem]">
                <p className="max-w-[18rem]">
                  Curated art limited retail space.
                </p>
                <p className="max-w-[26rem]">
                  Art, objects, artists, and events are presented with a restrained editorial rhythm.
                </p>
                <p className="max-w-[18rem]">
                  首店筹备中 / 快闪店即将公布
                  <br />
                  成都 / 武汉 / 深圳
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
