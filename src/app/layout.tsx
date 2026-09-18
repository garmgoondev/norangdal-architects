import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "노랑달 건축사사무소 | NORANGDAL ARCHITECTS",
  description:
    "단독주택, 다가구주택, 다세대, 상가주택, 주상복합, 근생 전문 서울 송파구 노랑달 건축사사무소. 사업성 검토 기획설계부터 건축 인허가, 감리, 준공까지 건축 전반 업무 수행. 대표 건축사 이슬기 (norangdal50@naver.com).",
  keywords: [
    "노랑달건축사사무소",
    "이슬기건축사",
    "단독주택설계",
    "상가주택설계",
    "다가구주택설계",
    "주상복합설계",
    "송파구건축사",
    "방이동건축사",
    "사업성검토기획설계",
    "건축인허가",
    "건축공사감리",
  ],
  authors: [{ name: "노랑달 건축사사무소 (대표 이슬기)" }],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "노랑달 건축사사무소 | NORANGDAL ARCHITECTS",
    description:
      "도시의 결을 읽고, 빛과 온기를 채우는 건축. 서울 송파구 방이동 소재 건축사사무소.",
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
