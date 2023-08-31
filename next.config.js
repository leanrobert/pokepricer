/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.pokemontcg.io',
      'mp-assets.tcgplayer.com',
      'static.cardmarket.com'
    ],
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
