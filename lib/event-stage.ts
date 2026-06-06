import type { EventStatus } from "@/lib/types";

export function getEventStageLabel(status: EventStatus) {
  switch (status) {
    case "upcoming":
      return "Upcoming / 即将呈现";
    case "current":
      return "Now / 进行中";
    case "past":
      return "Past / 过往";
  }
}
