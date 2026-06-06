"use client";

import Link from "next/link";
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
      title="Artists are introduced as distinct voices within the NAG platform."
      description="Names, portraits, cities, and practices are arranged with restraint so each profile can unfold."
    >
      <div className="quiet-card mb-6 grid gap-4 p-5 md:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="section-kicker">Artists In View</p>
          <p className="body-copy mt-3">
            {filteredArtists.length} artists in view.
          </p>
        </div>
        <div className="grid gap-2 md:grid-cols-3">
          {filteredArtists.map((artist) => (
            <Link
              key={artist.slug}
              href={`/artists/${artist.slug}`}
              className="border-b border-[var(--line)] pb-2 text-sm leading-6"
            >
              <span className="block font-display-cn text-[1.1rem] leading-tight md:text-xl">
                {artist.nameZh}
              </span>
              <span className="metadata block normal-case tracking-[0.03em]">
                {artist.nameEn}
              </span>
            </Link>
          ))}
        </div>
      </div>
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
