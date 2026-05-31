/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ronda-game',
  assetPrefix: '/ronda-game/',
  images: { unoptimized: true },
  trailingSlash: true,
}

module.exports = nextConfig
