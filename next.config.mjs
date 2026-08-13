/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/how-it-was-made',
        destination: '/research-architecture',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
