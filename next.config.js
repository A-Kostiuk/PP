/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn2.thecatapi.com'],
  },
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_API_KEY: 'live_ZxSB1wJgAvJtABRdX7NTxwvvT6tl6iPbffkZHbUDtPGeZ6jfeIHOL5IeCij9B0P1',
    NEXT_PUBLIC_API_BASE_URL: 'https://api.thecatapi.com/v1/',
  },
};

module.exports = nextConfig;
