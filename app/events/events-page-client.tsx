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
  const statusSummary = {
    upcoming: events.filter((event) => event.status === "upcoming").length,
    current: events.filter((event) => event.status === "current").length,
    past: events.filter((event) => event.status === "past").length,
  };

  return (
    <PageShell
      eyebrow="Events"
      title="Programs, conversations, and gatherings around the NAG platform."
      description="Events are kept as a public rhythm of encounters between artists, works, space, and audience."
    >
      <div className="quiet-card mb-6 grid gap-4 p-5 md:grid-cols-4">
        <div>
          <p className="section-kicker">Program Rhythm</p>
          <p className="body-copy mt-3">
            Upcoming, ongoing, and past moments are gathered as one public program.
          </p>
        </div>
        <StatCard label="Upcoming" value={String(statusSummary.upcoming).padStart(2, "0")} />
        <StatCard label="Now" value={String(statusSummary.current).padStart(2, "0")} />
        <StatCard label="Past" value={String(statusSummary.past).padStart(2, "0")} />
      </div>
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
      <div className="quiet-card body-copy mb-6 grid gap-4 p-5 md:grid-cols-2">
        <p>{filteredEvents.length} events in view.</p>
        <p>Dates, locations, and media appear only when the public material is ready.</p>
      </div>
      <EventList events={filteredEvents} />
    </PageShell>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-[var(--line)] p-4">
      <p className="section-kicker">{label}</p>
      <p className="mt-3 index-mark">{value}</p>
    </div>
  );
}
