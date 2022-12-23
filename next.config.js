const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})
const withPlugins = require('next-compose-plugins')

const withCss = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withPurgeCss = require('next-purgecss')
const bundler=withBundleAnalyzer({
  
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ["res.cloudinary.com"],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  compress: true,
})
const compressCss=withCss(withPurgeCss({
  // Only enable PurgeCSS for client-side production builds
  purgeCssEnabled: ({ dev, isServer }) => (!dev && !isServer) 
}));
const compressSass=withSass(withPurgeCss({
  // Only enable PurgeCSS for client-side production builds
  purgeCssEnabled: ({ dev, isServer }) => (!dev && !isServer) 
}));

module.exports = withPlugins([compressCss,compressSass,bundler])

