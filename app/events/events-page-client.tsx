"use client";

import { useSearchParams } from "next/navigation";
import { EventList } from "@/components/event-list";
import { FilterBar } from "@/components/filter-bar";
import { PageShell } from "@/components/page-shell";
import { events } from "@/data/events";
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
      title="Events are treated like project files with room for image, video, and relationship mapping."
      description="Current, upcoming, and past events are gathered in one archive of projects and encounters."
    >
      <div className="quiet-card mb-6 grid gap-4 p-5 md:grid-cols-4">
        <div>
          <p className="section-kicker">Event Status</p>
          <p className="body-copy mt-3">
            Current, upcoming, and past event states are gathered here in one index.
          </p>
        </div>
        <StatCard label="Upcoming" value={String(statusSummary.upcoming).padStart(2, "0")} />
        <StatCard label="Current" value={String(statusSummary.current).padStart(2, "0")} />
        <StatCard label="Past" value={String(statusSummary.past).padStart(2, "0")} />
      </div>
      <FilterBar
        basePath="/events"
        current={current}
        sections={[
          {
            label: "Status",
            param: "status",
            options: options.statuses.map((status) => ({ label: status, value: status })),
          },
        ]}
      />
      <div className="quiet-card body-copy mb-6 grid gap-4 p-5 md:grid-cols-2">
        <p>Showing {filteredEvents.length} event records in the current selection.</p>
        <p>Time, location, and media remain explicitly marked where information is still incomplete.</p>
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
