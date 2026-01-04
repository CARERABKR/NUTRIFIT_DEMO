import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // src 폴더 내 모든 파일 적용 (가장 중요)
  ],
  theme: {
    extend: {
      colors: {
        // [NutriFit Brand Identity]
        // 메인: 신뢰감을 주는 딥 네이비 & 청록
        brand: {
          50: '#F0F7FF',   // 아주 연한 배경
          100: '#E0F0FE',
          500: '#00C7AE',  // 포인트 (민트/청록) - 활력, 케어
          600: '#00A896',
          700: '#0288D1',  // 메인 블루 (의료/전문성)
          800: '#01579B',  // 깊은 네이비 (강조 텍스트)
          900: '#002F55',  // 헤더/로고 (무게감)
        },
        // 상태 색상 (의료 차트용)
        status: {
          safe: '#2E7D32',    // 정상
          caution: '#ED6C02', // 주의
          danger: '#D32F2F',  // 위험/금기
          neutral: '#64748B', // 미정
        }
      },
      fontFamily: {
        sans: ['Pretendard', 'system-ui', 'sans-serif'], // 가독성 최우선
      },
      boxShadow: {
        'card': '0 2px 12px rgba(0, 0, 0, 0.04)', // 깔끔하고 얕은 그림자
        'floating': '0 8px 30px rgba(0, 0, 0, 0.08)', // 떠있는 느낌
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem', // 부드러운 곡선
      }
    },
  },
  plugins: [],
};
export default config;