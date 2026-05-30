import { Suspense } from "react";
import { ArtistsPageClient } from "./artists-page-client";

export default function ArtistsPage() {
  return (
    <Suspense fallback={null}>
      <ArtistsPageClient />
    </Suspense>
  );
}
