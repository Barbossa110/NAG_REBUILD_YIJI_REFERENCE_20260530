import Image from "next/image";
import { withAssetPath } from "@/lib/asset-path";

const heroImage = "/sources/branding/home-hero.png";

export default function Home() {
  return (
    <main className="min-h-svh overflow-hidden bg-[var(--inverse)]">
      <section className="relative min-h-svh overflow-hidden">
        <Image
          src={withAssetPath(heroImage) ?? heroImage}
          alt="Nearly Anything Goes homepage visual"
          fill
          sizes="100vw"
          priority
          className="object-cover object-center"
          unoptimized
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.08)_0%,rgba(87,10,6,0.16)_40%,rgba(87,10,6,0.84)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(87,10,6,0.18)_0%,rgba(87,10,6,0.08)_28%,rgba(87,10,6,0.74)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(87,10,6,0.84)_0%,rgba(87,10,6,0.16)_44%,rgba(87,10,6,0.32)_100%)]" />
        <div className="relative z-10 flex min-h-svh flex-col">
          <div className="editorial-shell flex min-h-svh flex-col pb-[clamp(1.1rem,2.8vw,2.5rem)] pt-[76px] text-[var(--surface)] md:pt-[76px]">
            <div className="max-w-2xl">
              <h1 className="font-display-en max-w-[12ch] text-[clamp(3.05rem,7.4vw,7rem)] font-black leading-[0.9] tracking-[-0.06em] text-white md:max-w-[9.5ch]">
                Nearly Anything
                <br />
                Goes
              </h1>
              <p className="mt-4 max-w-[13rem] text-[clamp(1.05rem,2vw,2rem)] leading-[1.12] text-white md:mt-5 md:max-w-[15rem] md:text-[clamp(1.2rem,2.2vw,2.2rem)]">
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
