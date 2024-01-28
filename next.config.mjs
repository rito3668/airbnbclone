/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  env:{
    mapbox_key:'pk.eyJ1Ijoicml0bzM2NjgiLCJhIjoiY2xyeGlodG9hMWQ4YjJrbXV5Z3M4czYyaSJ9.85uahp26jJBtbpC_G-p6kA'
  }
};

export default nextConfig;
