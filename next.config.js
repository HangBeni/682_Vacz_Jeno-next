/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  images: {
      domains: ['ik.imagekit.io'],
      deviceSizes: [420,768,1024, 1200, 1920],
      loader: "default",
      imageSizes: [16,32,48,64,96,128,256,384],
      formats: ['image/webp'], 
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  } 
}
