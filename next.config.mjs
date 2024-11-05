/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["samcleans.com"],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
};

export default nextConfig;
