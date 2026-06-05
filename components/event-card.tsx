import Link from "next/link";
import { artists } from "@/data/artists";
import { MediaTile } from "@/components/media-tile";
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

  return (
    <Link href={`/events/${event.slug}`} className="group block">
      <div
        className={`grid gap-7 border p-5 md:grid-cols-[0.88fr_1.12fr] md:p-7 ${
          inverse
            ? "border-[rgba(255,255,255,0.18)]"
            : "border-[var(--line)] bg-[var(--surface)]"
        }`}
      >
        <div className="md:col-span-2 flex items-start justify-between gap-4">
          <span className={`index-mark ${inverse ? "inverse" : ""}`}>{indexLabel}</span>
          <span className="metadata">{event.status}</span>
        </div>
        <MediaTile
          src={event.images[0]}
          alt={event.title}
          label="Event media"
          tone={inverse ? "dark" : "light"}
        />
        <div className="space-y-4">
          <h3 className="font-display-cn text-[1.95rem] leading-[1.06] md:text-[2.7rem]">
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
            Related artists: {relatedArtistNames}
          </p>
        </div>
      </div>
    </Link>
  );
}
