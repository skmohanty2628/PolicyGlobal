const legacy = require('./lib/legacy-redirects.json');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
      { protocol: 'https', hostname: 'cdn.pixabay.com' },
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = { fs: false, path: false };
    }
    return config;
  },
  async redirects() {
    // Old article URLs whose slug changed when an archive article was upgraded: 308 to the new URL.
    return Object.entries(legacy).map(([source, destination]) => ({ source, destination, permanent: true }));
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
