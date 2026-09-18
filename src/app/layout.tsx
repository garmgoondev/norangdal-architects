import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://norangdal-architects.vercel.app"),
  title: "노랑달건축사사무소 | NORANGDAL ARCHITECTS",
  description:
    "옐로우페이퍼 위에 소원을 그리는 남매 건축가(이슬기 대표, 이대호 이사). 안동 복합커뮤니티센터, 금곡동 공공도서관, 창업혁신 코워킹스페이스, 단독·상가주택 전문 서울 송파구 노랑달건축사사무소. 사업성 검토 기획설계부터 인허가, 감리, 준공까지 건축 전반 수행.",
  keywords: [
    "노랑달건축사사무소",
    "노랑달건축",
    "이슬기건축사",
    "이대호이사",
    "안동복합커뮤니티센터",
    "금곡동공공도서관",
    "구덕민속예술관",
    "단독주택설계",
    "상가주택설계",
    "다가구주택설계",
    "주상복합설계",
    "송파구건축사",
    "방이동건축사사무소",
    "사업성검토기획설계",
    "건축인허가",
    "공사감리",
  ],
  authors: [{ name: "노랑달건축사사무소 (대표 이슬기)" }],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "노랑달건축사사무소 | NORANGDAL ARCHITECTS",
    description:
      "옐로우페이퍼 위에 소원을 그리는 남매 건축가의 아틀리에. 안동 복합커뮤니티센터, 금곡동 공공도서관 등 주요 건축 프로젝트 아카이브.",
    url: "https://norangdal-architects.vercel.app",
    siteName: "노랑달건축사사무소",
    images: [
      {
        url: "/images/projects/andong_community_center.jpg",
        width: 1200,
        height: 800,
        alt: "노랑달건축사사무소 안동 복합커뮤니티센터",
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
