/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
      },
      images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "i.ibb.co",
            port: "",
            pathname: "/**",
          },
        ],
      },
};

export default nextConfig;
