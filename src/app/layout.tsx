import React from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "SEO optimised — Your Cleaning Partner in Sydney",
  description: "Discover SEO optimised, the premier cleaning service in Sydney. Reliable, eco-friendly, and tailored to your needs.",
  openGraph: {
    title: "SEO optimised — Your Cleaning Partner in Sydney",
    description: "Discover SEO optimised, the premier cleaning service in Sydney. Reliable, eco-friendly, and tailored to your needs.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
