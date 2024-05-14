/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  images: {
      domains: ['viiudujcvsyrgxwatpxm.supabase.co'],
      deviceSizes: [420,768,1024, 1200, 1920],
      loader: "default",
      imageSizes: [16,32,48,64,96,128,256,384],
      remotePatterns:[
        {
          protocol: 'https',
          hostname: 'viiudujcvsyrgxwatpxm.supabase.co',
          pathname: '**',
        }
      ]
  },
    }
  
