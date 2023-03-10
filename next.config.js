/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn2.thecatapi.com', '28.media.tumblr.com', '30.media.tumblr.com'],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
