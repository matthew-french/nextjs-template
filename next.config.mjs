/** @type {import('next').NextConfig} */
const nextConfig = {
  // Doesn't work with turbopack
  experimental: {
    typedRoutes: true,
    // ppr: 'incremental',
  },
}

export default nextConfig
