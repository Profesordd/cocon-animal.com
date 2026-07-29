/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "monra-france.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
