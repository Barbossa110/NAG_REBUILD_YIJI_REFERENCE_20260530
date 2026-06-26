import { artists } from "@/data/artists";
import { events } from "@/data/events";
import { products } from "@/data/products";
import { stories } from "@/data/stories";
import type { Artist, EventItem, EventStatus, Product } from "@/lib/types";

const curatedProductSlugs = [
  "panacea-122",
  "hu-po-liu",
  "giant-ginger",
  "hai-yan-yao",
  "mobius-ring-lamp-1",
];

const curatedArtistSlugs = [
  "liu-zhenchen",
  "kong-yu",
  "jeremie-thircuir",
  "xie-zhenlin",
  "dabeiyuzhou",
];

export function pickFirstParam(
  value: string | string[] | undefined,
): string | undefined {
  if (!value) return undefined;
  return Array.isArray(value) ? value[0] : value;
}

export function toSlug(value: string) {
  return value
    .toLowerCase()
    .replace(/[《》()（）]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\u4e00-\u9fa5-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function toRouteSegment(value: string) {
  return encodeURIComponent(value);
}

export function uniqueValues(values: string[]) {
  return [...new Set(values.filter(Boolean))].sort((a, b) =>
    a.localeCompare(b, "zh-Hans-CN"),
  );
}

export function getArtistBySlug(slug: string) {
  return artists.find((artist) => artist.slug === slug);
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getEventBySlug(slug: string) {
  return events.find((event) => event.slug === slug);
}

export function getStoryBySlug(slug: string) {
  return stories.find((story) => story.slug === slug);
}

export function getArtistsBySlugs(slugs: string[]) {
  return slugs
    .map((slug) => getArtistBySlug(slug))
    .filter((artist): artist is Artist => Boolean(artist));
}

export function getProductsBySlugs(slugs: string[]) {
  return slugs
    .map((slug) => getProductBySlug(slug))
    .filter((product): product is Product => Boolean(product));
}

export function getEventsBySlugs(slugs: string[]) {
  return slugs
    .map((slug) => getEventBySlug(slug))
    .filter((event): event is EventItem => Boolean(event));
}

export function filterProducts(params: {
  artist?: string;
  series?: string;
  medium?: string;
}) {
  return products.filter((product) => {
    if (params.artist && product.artistSlug !== params.artist) return false;
    if (params.series && product.series !== params.series) return false;
    if (params.medium && product.medium !== params.medium) return false;
    return true;
  });
}

export function sortProductsForDisplay(collection: Product[]) {
  return [...collection].sort((a, b) => {
    const aIndex = curatedProductSlugs.indexOf(a.slug);
    const bIndex = curatedProductSlugs.indexOf(b.slug);
    if (aIndex !== -1 || bIndex !== -1) {
      if (aIndex === -1) return 1;
      if (bIndex === -1) return -1;
      return aIndex - bIndex;
    }
    return a.displayTitle.localeCompare(b.displayTitle, "zh-Hans-CN");
  });
}

export function filterArtists(params: { medium?: string; city?: string }) {
  return artists.filter((artist) => {
    if (params.medium && !artist.mediums.includes(params.medium)) return false;
    if (params.city && artist.city !== params.city) return false;
    return true;
  });
}

export function sortArtistsForDisplay(collection: Artist[]) {
  return [...collection].sort((a, b) => {
    const aIndex = curatedArtistSlugs.indexOf(a.slug);
    const bIndex = curatedArtistSlugs.indexOf(b.slug);
    if (aIndex !== -1 || bIndex !== -1) {
      if (aIndex === -1) return 1;
      if (bIndex === -1) return -1;
      return aIndex - bIndex;
    }
    return a.nameZh.localeCompare(b.nameZh, "zh-Hans-CN");
  });
}

export function filterEvents(params: { status?: string }) {
  return events.filter((event) => {
    if (params.status && event.status !== params.status) return false;
    return true;
  });
}

export function getProductsByArtist(artistSlug: string) {
  return products.filter((product) => product.artistSlug === artistSlug);
}

export function getEventsByArtist(artistSlug: string) {
  return events.filter((event) => event.artists.includes(artistSlug));
}

export function getRelatedProducts(currentSlug: string, artistSlug: string) {
  return products.filter(
    (product) => product.artistSlug === artistSlug && product.slug !== currentSlug,
  );
}

export function getPrevNextProducts(currentSlug: string) {
  const index = products.findIndex((product) => product.slug === currentSlug);
  return {
    previous: index > 0 ? products[index - 1] : null,
    next: index >= 0 && index < products.length - 1 ? products[index + 1] : null,
  };
}

export function artistFilterOptions(collection: Artist[]) {
  return {
    mediums: uniqueValues(collection.flatMap((artist) => artist.mediums)),
    cities: uniqueValues(collection.map((artist) => artist.city)),
  };
}

export function productFilterOptions(collection: Product[]) {
  return {
    artists: uniqueValues(collection.map((product) => product.artistSlug)),
    series: uniqueValues(collection.map((product) => product.series)),
    mediums: uniqueValues(collection.map((product) => product.medium)),
  };
}

export function eventFilterOptions(collection: EventItem[]) {
  return {
    statuses: uniqueValues(collection.map((event) => event.status)) as EventStatus[],
  };
}
