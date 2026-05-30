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
      title="A textual index with image reservations keeps the artist channel closer to an institution directory."
      description="Filtering is present, but the presentation avoids turning artists into a brand grid."
    >
      <div className="quiet-card mb-6 grid gap-4 p-5 md:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="section-kicker">Artist Index</p>
          <p className="body-copy mt-3">
            Showing {filteredArtists.length} artist profiles in the current selection.
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
            options: options.mediums.map((medium) => ({ label: medium, value: medium })),
          },
          {
            label: "City",
            param: "city",
            options: options.cities.map((city) => ({ label: city, value: city })),
          },
        ]}
      />
      <ArtistList artists={filteredArtists} />
    </PageShell>
  );
}
