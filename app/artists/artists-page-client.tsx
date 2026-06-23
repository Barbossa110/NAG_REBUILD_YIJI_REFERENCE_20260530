"use client";

import { useSearchParams } from "next/navigation";
import { ArtistList } from "@/components/artist-list";
import { FilterBar } from "@/components/filter-bar";
import { PageShell } from "@/components/page-shell";
import { artists } from "@/data/artists";
import {
  artistFilterOptions,
  filterArtists,
  sortArtistsForDisplay,
} from "@/lib/filters";
import { publicMetadata } from "@/lib/public-display";

export function ArtistsPageClient() {
  const params = useSearchParams();
  const current = {
    medium: params.get("medium") ?? undefined,
    city: params.get("city") ?? undefined,
  };

  const filteredArtists = sortArtistsForDisplay(filterArtists(current));
  const options = artistFilterOptions(artists);

  return (
    <PageShell
      eyebrow="Artists"
      title="Artists are introduced as distinct voices within the Nearly Anything Goes platform."
      description="Names, portraits, cities, and practices are arranged with restraint so each profile can unfold."
    >
      <FilterBar
        basePath="/artists"
        current={current}
        sections={[
          {
            label: "Medium",
            param: "medium",
            options: options.mediums
              .map((medium) => ({ label: publicMetadata(medium), value: medium }))
              .filter((option): option is { label: string; value: string } =>
                Boolean(option.label),
              ),
          },
          {
            label: "City",
            param: "city",
            options: options.cities
              .map((city) => ({ label: publicMetadata(city), value: city }))
              .filter((option): option is { label: string; value: string } =>
                Boolean(option.label),
              ),
          },
        ]}
      />
      <ArtistList artists={filteredArtists} />
    </PageShell>
  );
}
