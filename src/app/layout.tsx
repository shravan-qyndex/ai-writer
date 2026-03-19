import React from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "AI Writing Tool — Write Smarter, Faster",
  description: "Transform your writing process with AI-powered tools for editing, brainstorming, and content creation.",
  openGraph: {
    title: "AI Writing Tool — Write Smarter, Faster",
    description: "Transform your writing process with AI-powered tools for editing, brainstorming, and content creation.",
    type: "website"
  }
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