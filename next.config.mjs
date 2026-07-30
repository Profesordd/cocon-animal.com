/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cocon-animal.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
