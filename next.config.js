
const withPWA = require('next-pwa');
const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  nextConfig
})
