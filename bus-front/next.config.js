/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
const rewrites = async () => {
  return [
    {
      source: "/:path*",
      destination: "http://ws.bus.go.kr/:path*"
    },
  ];
};
module.exports = { rewrites };
