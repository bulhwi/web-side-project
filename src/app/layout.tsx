import type { Metadata } from 'next'
import './globals.css'
import Providers from './providers'

export const metadata: Metadata = {
  title: 'BD 한의원 - 서울 강남 한의학 치료 전문',
  description: 'BD 한의원은 침구치료, 한약처방, 추나요법, 체질진단 전문 한의원입니다. 강남역 위치, 온라인 예약 가능.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning lang="ko" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
