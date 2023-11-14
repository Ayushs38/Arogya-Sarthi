/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {};

module.exports = {
  // other configurations...
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  },
  nextConfig
};
