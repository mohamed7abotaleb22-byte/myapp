import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cairo = Cairo({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: "سيوة الطبيعي",
  description: "منتجات أصيلة من واحة سيوة",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
