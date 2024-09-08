/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/digitallypurple.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/digitallypurple.github.io/' : '',
}

module.exports = nextConfig