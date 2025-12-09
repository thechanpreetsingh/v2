/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  // Trailing slashes for consistency
  trailingSlash: true,
  // Disable x-powered-by header
  poweredByHeader: false,
  // Optimize production build
  compress: true,
  productionBrowserSourceMaps: false,
  // React strict mode
  reactStrictMode: true,
};

module.exports = nextConfig;
