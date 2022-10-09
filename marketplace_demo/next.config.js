/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'pyxis.nymag.com',
      'i.ebayimg.com"',
      'cdn.shopify.com',
      'i.linio.com',
      'm.media-amazon.com',
      'lh3.googleusercontent.com',
    ],
  }
}

module.exports = nextConfig
