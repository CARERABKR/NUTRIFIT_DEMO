import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NUTRIFIT | 수의사가 설계하는 맞춤 영양제",
  description: "AI 진단과 수의사 검증을 거친 반려동물 헬스케어 구독 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="font-sans text-slate-900 bg-slate-50 antialiased">
        {children}
      </body>
    </html>
  );
}