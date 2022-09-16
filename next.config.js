/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['www.google.com', 'assets.hostinger.com', 'www.drupal.org'],
  },
  reactStrictMode: true,
  swcMinify: true,

}

module.exports = nextConfig
