/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.google.com"],
  },
  env: {
    API_KEY: "AIzaSyCvrcyDTfOW8ALl-OVttozPHV2s6VrKi28",
    CONTEXT_KEY: "44d5a58766e444126",
  },
};

module.exports = nextConfig;
