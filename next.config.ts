import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/politica-de-cookies',
        destination: '/politica-de-privacidade#cookies',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
