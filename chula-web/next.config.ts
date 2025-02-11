import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http', // Use 'http' since Strapi is running on localhost with no SSL.
        hostname: 'localhost',
        port: '1337', // Strapi's default port.
        pathname: '/uploads/**', // Match files under /uploads.
      },
    ],
  },
};

export default nextConfig;
