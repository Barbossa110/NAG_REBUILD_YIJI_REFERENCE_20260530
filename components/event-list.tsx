import type { EventItem } from "@/lib/types";
import { EventCard } from "@/components/event-card";

export function EventList({
  events,
  inverse = false,
}: {
  events: EventItem[];
  inverse?: boolean;
}) {
  return (
    <div className="grid gap-8">
      {events.map((event, index) => (
        <EventCard key={event.slug} event={event} inverse={inverse} index={index + 1} />
      ))}
    </div>
  );
}
