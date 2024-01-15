/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: "https://api.themoviedb.org/3",
    IMAGE_URL: "https://image.tmdb.org/t/p/w500",
    ACCESS_TOKEN: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmI4NmUyYjMxNGM3ZmUzMzA1NzMyOGRjZjM3M2RlNiIsInN1YiI6IjY0ODVlNjA2ZTI3MjYwMDEwNzIyYmExZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JcogfbC7f1ArvP3Z6GLV7_4uof6fZdMNGGclp6AZkPA",
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
      }
    ]
  },  
};

module.exports = nextConfig
