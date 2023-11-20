/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'gateway.ipfscdn.io',
      'bafybeifrkzq3x5zad362adety5c7spf6zv5edmjwbrjic4auyq25bsto5i.ipfs.cf-ipfs.com',
    ],
  },
}

module.exports = nextConfig
