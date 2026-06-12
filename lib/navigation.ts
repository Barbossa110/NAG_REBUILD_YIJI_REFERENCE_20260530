import type { NavigationItem } from "@/lib/types";

export const primaryNavigation: NavigationItem[] = [
  {
    label: "产品",
    labelEn: "Products",
    href: "/products",
    summary: "Works and limited objects",
  },
  {
    label: "艺术家",
    labelEn: "Artists",
    href: "/artists",
    summary: "Artists and practices",
  },
  {
    label: "店铺地址",
    labelEn: "Stores",
    href: "/stores",
    summary: "City anchors and visit notes",
  },
  {
    label: "艺术事件",
    labelEn: "Events",
    href: "/events",
    summary: "Programs, conversations, and gatherings",
  },
  {
    label: "关于",
    labelEn: "About",
    href: "/about",
    summary: "Position, philosophy, and scope",
  },
  {
    label: "联系我们",
    labelEn: "Contact",
    href: "/contact",
    summary: "Artwork inquiries and visits",
  },
];

export const secondaryNavigation: NavigationItem[] = [];

export function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
