import type { NextConfig } from "next";
import "reflect-metadata";
const nextConfig: NextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
