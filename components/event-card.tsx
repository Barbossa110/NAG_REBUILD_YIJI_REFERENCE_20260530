import Link from "next/link";
import { artists } from "@/data/artists";
import { MediaTile } from "@/components/media-tile";
import { getEventStageLabel } from "@/lib/event-stage";
import { publicMetadata, publicOptionalText } from "@/lib/public-display";
import type { EventItem } from "@/lib/types";

export function EventCard({
  event,
  inverse = false,
  index,
}: {
  event: EventItem;
  inverse?: boolean;
  index: number;
}) {
  const relatedArtistNames = event.artists
    .map((slug) => artists.find((artist) => artist.slug === slug)?.nameZh ?? slug)
    .join(" / ");
  const indexLabel = String(index).padStart(2, "0");
  const dateRange = publicMetadata(event.dateRange);
  const city = publicMetadata(event.city);
  const summary = publicOptionalText(event.summary);
  const metadata = [dateRange, city].filter(Boolean).join(" / ");
  const stageLabel = getEventStageLabel(event.status);

  return (
    <Link href={`/events/${event.slug}`} className="archive-link group block">
      <div
        className={`grid gap-6 border-t py-7 transition-colors duration-[var(--motion-ui)] ease-[var(--motion)] md:grid-cols-[0.72fr_1.28fr] md:py-9 ${
          inverse
            ? "border-[rgba(255,255,255,0.18)]"
            : "border-[var(--line)] group-hover:border-[var(--accent-line)]"
        }`}
      >
        <div className="md:col-span-2 flex items-start justify-between gap-4">
          <span className={`index-mark ${inverse ? "inverse" : ""}`}>{indexLabel}</span>
          <span className="metadata">{stageLabel}</span>
        </div>
        <MediaTile
          src={event.images[0]}
          alt={event.title}
          label="Event image"
          tone={inverse ? "dark" : "light"}
        />
        <div className="space-y-4">
          <h3 className="font-display-cn text-[1.75rem] leading-[1.08] transition-colors duration-[var(--motion-ui)] ease-[var(--motion)] group-hover:text-[var(--accent)] md:text-[2.35rem]">
            {event.title}
          </h3>
          {summary ? (
            <p className={inverse ? "body-copy text-[rgba(255,255,255,0.72)]" : "body-copy"}>
              {summary}
            </p>
          ) : null}
          {metadata ? (
            <p className={inverse ? "metadata text-[rgba(255,255,255,0.68)]" : "metadata"}>
              {metadata}
            </p>
          ) : null}
          <p className={inverse ? "body-copy text-[rgba(255,255,255,0.66)]" : "body-copy"}>
            Artists: {relatedArtistNames}
          </p>
        </div>
      </div>
    </Link>
  );
}
