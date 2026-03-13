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
  title: "Dustin DeLisle | Logistics Sales Leader",
  description:
    "Professional portfolio of Dustin DeLisle — Carrier Sales Zone Manager with 6+ years of experience in logistics brokerage, team leadership, and business development.",
  openGraph: {
    title: "Dustin DeLisle | Logistics Sales Leader",
    description:
      "Carrier Sales Zone Manager · 6+ years in logistics brokerage · Chicago, IL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dustin DeLisle | Logistics Sales Leader",
    description:
      "Carrier Sales Zone Manager · 6+ years in logistics brokerage · Chicago, IL",
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
