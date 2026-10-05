import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import { MainLayout } from "@/components/layout/MainLayout";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "TechPulse Store",
  description: "Professional E-commerce Task built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html  >
      <body className={`${cairo.variable} font-sans antialiased`}>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}