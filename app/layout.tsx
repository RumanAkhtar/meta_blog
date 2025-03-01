import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LayoutHeader } from "@/components/layout-header";
import { LayoutFooter } from "@/components/layout-footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MetaBlog - Modern Blog Template",
  description: "A modern blog template built with Next.js and Tailwind CSS",
  generator: "v0.dev",
  icons: {
    icon: "/favicon.ico", // Standard Favicon
    apple: "/favicon.png", // Apple Touch Icon (Optional)
  },
  openGraph: {
    title: "MetaBlog - Modern Blog Template",
    description: "A modern blog template built with Next.js and Tailwind CSS",
    url: "https://yourwebsite.com",
    siteName: "MetaBlog",
    images: [
      {
        url: "/og-image.jpg", // Open Graph image for social sharing (Optional)
        width: 1200,
        height: 630,
        alt: "MetaBlog Banner",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LayoutHeader />
          {children}
          <LayoutFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
