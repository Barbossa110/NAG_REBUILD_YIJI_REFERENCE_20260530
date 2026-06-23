"use client";

import { useSearchParams } from "next/navigation";
import { EventList } from "@/components/event-list";
import { FilterBar } from "@/components/filter-bar";
import { PageShell } from "@/components/page-shell";
import { events } from "@/data/events";
import { getEventStageLabel } from "@/lib/event-stage";
import { eventFilterOptions, filterEvents } from "@/lib/filters";

export function EventsPageClient() {
  const params = useSearchParams();
  const current = {
    status: params.get("status") ?? undefined,
  };
  const filteredEvents = filterEvents(current);
  const options = eventFilterOptions(events);

  return (
    <PageShell
      eyebrow="Events"
      title="Programs, conversations, and gatherings around the Nearly Anything Goes platform."
      description="Events are kept as a public rhythm of encounters between artists, works, space, and audience."
    >
      <FilterBar
        basePath="/events"
        current={current}
        sections={[
          {
            label: "Period",
            param: "status",
            options: options.statuses.map((status) => ({
              label: getEventStageLabel(status),
              value: status,
            })),
          },
        ]}
      />
      <div className="archive-panel body-copy mb-6 grid gap-4 p-5 md:grid-cols-2">
        <p>{filteredEvents.length} events in view.</p>
        <p>Dates, locations, and media appear only when the public material is ready.</p>
      </div>
      <EventList events={filteredEvents} />
    </PageShell>
  );
}
