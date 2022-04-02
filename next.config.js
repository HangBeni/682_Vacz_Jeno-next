/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  images: {
      domains: ['ik.imagekit.io'],
      deviceSizes: [320,420,768,1024, 1200],
      loader: "default",
  },
}
