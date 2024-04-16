/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lawrensonwalker.com',
        port: '',
        pathname: '/wordpress/wp-content/themes/lw/dist/img/home/ourservices.jpg',
      },      {
        protocol: 'https',
        hostname: 'mceastcourt.com',
        port: '',
        pathname: '/wp-content/uploads/2021/09/WhatsApp-Image-2021-09-15-at-3.27.48-PM.jpeg',
      }, {
        protocol: 'https',
        hostname: 'mceastcourt.com',
        port: '',
        pathname: '/wp-content/uploads/2021/09/esvarbon.png',
      }, {
        protocol: 'https',
        hostname: 'mceastcourt.com',
        port: '',
        pathname: '/wp-content/uploads/2021/09/CASLE.jpeg',
      }, {
        protocol: 'https',
        hostname: 'mceastcourt.com',
        port: '',
        pathname: '/wp-content/uploads/2021/09/NIESV.png',
      },{
        protocol: 'https',
        hostname: 'mceastcourt.com',
        port: '',
        pathname: '/wp-content/uploads/2021/09/IDRPN.jpeg',
      },{
        protocol: 'https',
        hostname: 'mceastcourt.com',
        port: '',
        pathname: '/wp-content/uploads/2021/09/FIABCI.png',
      },
    ],
  },
};

export default nextConfig;
