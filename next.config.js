/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['www.google.com', 'assets.hostinger.com', 'www.drupal.org', '1000logos.net', 'image.ibb.co'],
  },
  reactStrictMode: true,
  swcMinify: true,

}

module.exports = nextConfig
