export function withAssetPath(src?: null | string) {
  if (!src) return src;
  if (!src.startsWith("/")) return src;
  return src;
}
