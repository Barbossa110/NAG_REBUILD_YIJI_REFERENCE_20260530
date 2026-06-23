import Image from "next/image";
import { withAssetPath } from "@/lib/asset-path";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  sizes?: string;
};

const logoSrc = "/sources/branding/brand-logo.png";

export function BrandLogo({
  className = "",
  priority = false,
  sizes = "360px",
}: BrandLogoProps) {
  return (
    <Image
      src={withAssetPath(logoSrc) ?? logoSrc}
      alt="Nearly Anything Goes"
      width={1191}
      height={713}
      className={`block h-auto w-full object-contain ${className}`}
      sizes={sizes}
      priority={priority}
      unoptimized
    />
  );
}
