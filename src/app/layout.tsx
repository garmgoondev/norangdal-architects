import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "노랑달 건축사사무소 | NORANGDAL ARCHITECTS",
  description:
    "서울 송파구 건축사사무소. 양주시 장애인 직업재활시설 설계공모 당선작, 단독주택, 상가주택, 근린생활시설, 대수선 리모델링 설계 전문 아틀리에. 대표 건축사 양인애 직통 상담.",
  keywords: [
    "노랑달건축사사무소",
    "건축사사무소",
    "송파구건축사",
    "잠실건축사",
    "가락동건축사",
    "상가주택설계",
    "단독주택설계",
    "양주시직업재활시설공모",
    "양인애건축사",
  ],
  authors: [{ name: "노랑달 건축사사무소" }],
  openGraph: {
    title: "노랑달 건축사사무소 | NORANGDAL ARCHITECTS",
    description:
      "도시의 결을 읽고, 빛과 온기를 채우는 건축. 서울 송파구 가락동 소재 건축사사무소.",
    url: "https://norangdal-architects.vercel.app",
    siteName: "노랑달 건축사사무소",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
        width: 1600,
        height: 1067,
        alt: "노랑달 건축사사무소 대표작",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}
