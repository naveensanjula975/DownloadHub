import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "File Download Center - Secure & Fast Downloads",
  description:
    "Modern file download center with search, filters, and secure downloads. Access PDFs, documents, and resources with a beautiful, responsive interface.",
  keywords: "file download, secure downloads, document center, file sharing",
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "File Download Center",
    description: "Secure and fast file downloads with modern interface",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
