/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/homepage",
  assetPrefix: "/homepage",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: "/homepage",
  },
};

export default nextConfig;
