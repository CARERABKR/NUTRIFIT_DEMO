/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // 빌드 시 타입 오류가 있어도 배포를 강행합니다.
    ignoreBuildErrors: true,
  },
  eslint: {
    // 빌드 시 린트 오류가 있어도 배포를 강행합니다.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;