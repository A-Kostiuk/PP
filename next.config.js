/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_API_KEY: '5031ea38-7451-4a47-a407-f9255a7a54f6',
    NEXT_PUBLIC_API_BASE_URL: 'https://api.thecatapi.com/v1/',
  },
};

module.exports = nextConfig;
