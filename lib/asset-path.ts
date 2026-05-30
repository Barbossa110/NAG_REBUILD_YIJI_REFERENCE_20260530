const repoName = "NAG_REBUILD_YIJI_REFERENCE_20260530";
const pagesBasePath =
  process.env.NODE_ENV === "production" ? `/${repoName}` : "";

export function withAssetPath(src?: null | string) {
  if (!src) return src;
  if (!src.startsWith("/")) return src;
  if (src.startsWith(`${pagesBasePath}/`) && pagesBasePath) return src;
  return `${pagesBasePath}${src}`;
}
