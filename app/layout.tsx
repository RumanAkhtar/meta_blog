import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LayoutHeader } from "@/components/layout-header"
import { LayoutFooter } from "@/components/layout-footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MetaBlog - Modern Blog Template",
  description: "A modern blog template built with Next.js and Tailwind CSS",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LayoutHeader />
          {children}
          <LayoutFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'