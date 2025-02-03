import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "OpenAI In a Box",
  description: "Production ready complete OpenAI API Specification implemented on a single H100 GPU or 4xA40 GPU",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#1A1A2E] text-white`}>{children}</body>
    </html>
  )
}

