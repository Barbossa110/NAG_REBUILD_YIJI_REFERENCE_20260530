export type SourceStatus = "confirmed" | "needs confirmation" | "source missing";
export type ReviewStatus = "verified" | "needs review" | "placeholder";

export type NavigationItem = {
  label: string;
  labelEn: string;
  href: string;
  summary: string;
};

export type Artist = {
  slug: string;
  nameZh: string;
  nameEn: string;
  bioZh: string;
  bioEn: string;
  portrait: string | null;
  gallery: string[];
  mediums: string[];
  city: string;
  sourceStatus: SourceStatus;
  reviewStatus: ReviewStatus;
};

export type Product = {
  slug: string;
  titleRaw: string;
  displayTitle: string;
  artistSlug: string;
  images: string[];
  series: string;
  medium: string;
  dimensions: string;
  year: string;
  pricePlaceholder: string;
  descriptionZh: string;
  descriptionEn: string;
  sourceStatus: SourceStatus;
  reviewStatus: ReviewStatus;
};

export type EventStatus = "upcoming" | "current" | "past";

export type EventItem = {
  slug: string;
  title: string;
  status: EventStatus;
  dateRange: string;
  city: string;
  location: string;
  artists: string[];
  products: string[];
  images: string[];
  videos: string[];
  summary: string;
  sourceStatus: SourceStatus;
  reviewStatus: ReviewStatus;
};

export type StoreItem = {
  slug: string;
  name: string;
  status: string;
  addressRaw: string;
  notes: string;
  sourceStatus: SourceStatus;
  reviewStatus: ReviewStatus;
};

export type StoryType = "interview" | "press" | "video" | "editorial";

export type Story = {
  slug: string;
  title: string;
  type: StoryType;
  date: string;
  summary: string;
  body: string;
  relatedArtists: string[];
  relatedProducts: string[];
  relatedEvents: string[];
  sourceStatus: SourceStatus;
  reviewStatus: ReviewStatus;
};

export type SiteSettings = {
  name: string;
  shortName: string;
  visualDirection: string;
  missionZh: string;
  missionEn: string;
  storeStatus: string;
};
