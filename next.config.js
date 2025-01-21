/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'], // If fetching from an external domain
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "http",
        // hostname: "firebasestorage.googleapis.com",
        hostname: "localhost",
        port: "3000",
        // pathname: '/_next/static/',
      },
    ],
  },
};

module.exports = nextConfig;
