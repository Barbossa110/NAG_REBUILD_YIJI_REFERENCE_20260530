import type { SourceStatus } from "@/lib/types";

export function getSourceStatusLabel(status: SourceStatus) {
  switch (status) {
    case "confirmed":
      return "Confirmed";
    case "needs confirmation":
      return "Needs confirmation";
    case "source missing":
      return "Source missing";
  }
}

export function getSourceStatusTone(status: SourceStatus) {
  switch (status) {
    case "confirmed":
      return "border-[var(--line-strong)] text-[var(--ink)]";
    case "needs confirmation":
      return "border-[rgba(138,119,98,0.42)] text-[var(--muted)]";
    case "source missing":
      return "border-[rgba(110,102,93,0.28)] text-[var(--muted)]";
  }
}
