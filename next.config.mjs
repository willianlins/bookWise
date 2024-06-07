/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'api.tsx', 'api.ts'],
  compiler: {
    styledComponents: true,
  },
}

export default nextConfig
