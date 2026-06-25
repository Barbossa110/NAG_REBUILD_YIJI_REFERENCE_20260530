"use client";

import { useSearchParams } from "next/navigation";
import { ArtistList } from "@/components/artist-list";
import { PageShell } from "@/components/page-shell";
import { filterArtists, sortArtistsForDisplay } from "@/lib/filters";

export function ArtistsPageClient() {
  const params = useSearchParams();
  const current = {
    medium: params.get("medium") ?? undefined,
    city: params.get("city") ?? undefined,
  };

  const filteredArtists = sortArtistsForDisplay(filterArtists(current));

  return (
    <PageShell
      eyebrow="Artists"
      title="Artists are introduced as distinct voices within the Nearly Anything Goes platform."
      description="Names, portraits, cities, and practices are arranged with restraint so each profile can unfold."
    >
      <ArtistList artists={filteredArtists} />
    </PageShell>
  );
}
