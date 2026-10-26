/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;
const basePath = isGithubActions ? '/urbanstyles' : '';

const nextConfig = {
  output: 'export',
  basePath: basePath,
  assetPrefix: isGithubActions ? '/urbanstyles/' : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  trailingSlash: true,
};

export default nextConfig;
