/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  // Interactive stories built outside this app (public/writing/<slug>/index.html)
  // keep their /writing/<slug> address. Listed in articles/ with `standalone: true`.
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/writing/nyc-marathon", destination: "/writing/nyc-marathon/index.html" },
        { source: "/writing/nyc-marathon/", destination: "/writing/nyc-marathon/index.html" },
      ],
    };
  },
  async headers() {
    return [
      {
        // Content-hashed by scripts/build-nyc-data.mjs, so safe to cache forever.
        source: "/nyc/data/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
