/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  experimental: {
    scrollRestoration: true,
  },
  output: 'export',
};

export default nextConfig;
