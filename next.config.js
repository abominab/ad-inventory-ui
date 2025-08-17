/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  eslint: {
    dirs: ['src', 'app', 'components', 'lib', 'types'],
  },
  async redirects() {
    return [
      {
        destination: '/products',
        permanent: false,
        source: '/',
      },
    ];
  },
};

module.exports = nextConfig;
