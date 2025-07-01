import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      new URL(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6GNu9Yz19Rb0vc3tIfL-mqpls4wVDGTz5Wg&s"
      ),
    ],
  },

  /* config options here */
};

export default nextConfig;
