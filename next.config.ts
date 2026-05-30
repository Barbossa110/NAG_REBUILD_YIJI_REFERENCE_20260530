import type { NextConfig } from "next";
import path from "node:path";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isGitHubPagesBuild =
  process.env.GITHUB_ACTIONS === "true" && Boolean(repoName);
const basePath = isGitHubPagesBuild && repoName ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
