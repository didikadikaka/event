/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {},
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // appDir: false,
  },
  eslint: {
    dirs: ['app'],
  },
  images: {
    domains: ['static.wixstatic.com'],
    formats: ['image/webp'],
  },
};

module.exports = nextConfig;