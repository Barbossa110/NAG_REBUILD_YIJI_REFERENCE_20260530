import type { EventItem } from "@/lib/types";

export const events: EventItem[] = [
  {
    slug: "art-exhibition-placeholder",
    title: "艺术展览",
    status: "upcoming",
    dateRange: "PLACEHOLDER / needs confirmation",
    city: "PLACEHOLDER / needs confirmation",
    location: "PLACEHOLDER / needs confirmation",
    artists: ["liu-zhenchen"],
    products: ["panacea-122"],
    images: [],
    videos: [],
    summary: "二级事件文案已确认存在，但时间、地点、主视觉与完整关联关系仍待确认。",
    sourceStatus: "confirmed",
    reviewStatus: "needs review",
  },
  {
    slug: "artist-interview-placeholder",
    title: "艺术家访谈",
    status: "current",
    dateRange: "PLACEHOLDER / needs confirmation",
    city: "PLACEHOLDER / needs confirmation",
    location: "PLACEHOLDER / needs confirmation",
    artists: ["shen-tianyu", "kong-yu"],
    products: ["hu-po-liu"],
    images: [],
    videos: [],
    summary:
      "已确认的访谈主题包含 Nearly Anything Goes✖️沈天宇、✖️孔宇 等，但时间、地点与媒体文件仍需确认。",
    sourceStatus: "confirmed",
    reviewStatus: "needs review",
  },
];
