import './globals.css'
import type { Metadata } from 'next'
import { Space_Mono } from 'next/font/google'

const spaceMono = Space_Mono({ weight: ['400', '700'], })

export const metadata: Metadata = {
  title: 'DevFinder',
  description: 'Find developers on GitHub',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={spaceMono.className}>{children}</body>
    </html>
  )
}
