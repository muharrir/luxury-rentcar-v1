/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/map-tiles/:z/:x/:y",
        destination: process.env.MAPS_STYLE_URL,
      },
    ];
  },
};

module.exports = nextConfig;
