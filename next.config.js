/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true, // Required for static export
  },
  // Enable static export for GitHub Pages
  output: process.env.NODE_ENV === 'production' && process.env.GITHUB_PAGES === 'true' ? 'export' : undefined,
  // Set basePath if deploying to GitHub Pages (not username.github.io)
  // Update this to match your repository name if needed
  basePath: process.env.GITHUB_PAGES === 'true' && process.env.BASE_PATH ? process.env.BASE_PATH : '',
  trailingSlash: true,
}

module.exports = nextConfig

