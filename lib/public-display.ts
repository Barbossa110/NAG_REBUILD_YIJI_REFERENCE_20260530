const INTERNAL_MARKERS = [
  "PLACEHOLDER",
  "needs confirmation",
  "need confirmation",
  "still need confirmation",
  "still needs confirmation",
  "need to be confirmed",
  "to be confirmed",
  "requires confirmation",
  "confirmation required",
  "source missing",
  "confirmed",
  "verified",
  "verified statement",
  "statement exists",
  "statement applies",
  "待确认",
  "未确认",
  "已确认",
  "需确认",
  "仍需确认",
  "待补充",
  "待完善",
  "待整理",
  "占位",
  "协同",
  "内部提示",
  "交付说明",
];

export function hasInternalMarker(value?: string | null) {
  if (!value) return false;
  const normalized = value.toLowerCase();
  return INTERNAL_MARKERS.some((marker) =>
    normalized.includes(marker.toLowerCase()),
  );
}

export function publicText(value?: string | null, fallback = "暂未公布") {
  if (!value) return fallback;
  if (hasInternalMarker(value)) return fallback;
  return value.trim();
}

export function publicOptionalText(value?: string | null) {
  if (!value || hasInternalMarker(value)) return null;
  return value.trim();
}

export function publicMetadata(value?: string | null) {
  if (!value) return null;

  const cleaned = value
    .replace(/\s*\/\s*needs confirmation/gi, "")
    .replace(/\s*\/\s*need confirmation/gi, "")
    .replace(/\s*\/\s*source missing/gi, "")
    .replace(/\s*\/\s*confirmed/gi, "")
    .replace(/\s*\/\s*verified/gi, "")
    .replace(/PLACEHOLDER/gi, "")
    .replace(/needs confirmation/gi, "")
    .replace(/need confirmation/gi, "")
    .replace(/still need confirmation/gi, "")
    .replace(/still needs confirmation/gi, "")
    .replace(/need to be confirmed/gi, "")
    .replace(/to be confirmed/gi, "")
    .replace(/requires confirmation/gi, "")
    .replace(/confirmation required/gi, "")
    .replace(/source missing/gi, "")
    .replace(/confirmed/gi, "")
    .replace(/verified/gi, "")
    .replace(/说明已确认|说明适用于|已确认存在|仍需确认|需确认|待确认|未确认|已确认|待补充|待完善|待整理|占位|内部提示|交付说明|协同/g, "")
    .replace(/\s*\/\s*$/g, "")
    .trim();

  if (hasInternalMarker(cleaned)) return null;
  return cleaned.length ? cleaned : null;
}

export function publicMetadataList(values: string[]) {
  return values
    .map((value) => publicMetadata(value))
    .filter((value): value is string => Boolean(value));
}
