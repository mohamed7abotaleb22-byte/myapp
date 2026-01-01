import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "@/styles/globals.css";  // أو "../styles/globals.css" إذا كنت تفضلimport Header from "@/components/Header";
import Footer from "@/components/Footer";

const cairo = Cairo({ subsets: ["arabic", "latin"] });

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
      <body className={`${cairo.className} bg-sand-light`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

