/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lawrensonwalker.com',
        port: '',
        pathname: '/wordpress/wp-content/themes/lw/dist/img/home/ourservices.jpg',
      },
    ],
  },
};

export default nextConfig;
