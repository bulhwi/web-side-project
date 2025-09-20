import type { Metadata } from 'next';
import { Noto_Sans_KR, Playfair_Display } from 'next/font/google';
import './globals.css';
import Providers from './providers';

const notoSansKr = Noto_Sans_KR({
  variable: '--font-noto-sans-kr',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair-display',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'BD 한의원 - 서울 강남 한의학 치료 전문',
  description: 'BD 한의원은 침구치료, 한약처방, 추나요법, 체질진단 전문 한의원입니다. 강남역 위치, 온라인 예약 가능.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="ko">
      <body
        className={`${notoSansKr.variable} ${playfairDisplay.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
