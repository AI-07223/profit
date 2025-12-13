import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Profitplus Gaming | White Label Casino & Sports Betting Software",
  description: "The most reliable White Label Online Casino & Sports Betting Software provider. Start your B2C brand with Profitplus Gaming today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-white selection:bg-[#D4AF37] selection:text-black">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
