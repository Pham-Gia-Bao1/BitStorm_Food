/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.pexels.com","res.cloudinary.com","via.placeholder.com"],
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/settings',
  //       destination: '/login',
  //       permanent: false,
  //       has: [
  //         {
  //           type: 'cookie',
  //           key: 'token',
  //           value: '',
  //         },
  //       ],
  //     },
  //     {
  //       source: '/home',
  //       destination: '/login',
  //       permanent: false,
  //       has: [
  //         {
  //           type: 'cookie',
  //           key: 'token',
  //           value: '',
  //         },
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig;
