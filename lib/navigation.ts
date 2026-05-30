import type { NavigationItem } from "@/lib/types";

export const primaryNavigation: NavigationItem[] = [
  {
    label: "产品",
    labelEn: "Products",
    href: "/products",
    summary: "Product archive and detail views",
  },
  {
    label: "艺术家",
    labelEn: "Artists",
    href: "/artists",
    summary: "Artist index and profile pages",
  },
  {
    label: "店铺地址",
    labelEn: "Stores",
    href: "/stores",
    summary: "Space status and visit information",
  },
  {
    label: "艺术事件",
    labelEn: "Events",
    href: "/events",
    summary: "Current, upcoming, and past projects",
  },
  {
    label: "关于",
    labelEn: "About",
    href: "/about",
    summary: "Editorial brand reading experience",
  },
  {
    label: "联系我们",
    labelEn: "Contact",
    href: "/contact",
    summary: "Contact facts only",
  },
];

export const secondaryNavigation: NavigationItem[] = [
  {
    label: "Stories",
    labelEn: "Stories",
    href: "/stories",
    summary: "Interviews, press, video, and editorial material",
  },
];

export function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
