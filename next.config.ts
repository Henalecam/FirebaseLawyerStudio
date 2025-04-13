import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '6000-idx-studio-1744492661192.cluster-m7tpz3bmgjgoqrktlvd4ykrc2m.cloudworkstations.dev',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
