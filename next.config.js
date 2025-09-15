/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Fix for hydration issues
  reactStrictMode: true,
  swcMinify: true,
  // Disable static optimization for error pages to prevent build issues
  trailingSlash: false,
  poweredByHeader: false,
}

module.exports = nextConfig
