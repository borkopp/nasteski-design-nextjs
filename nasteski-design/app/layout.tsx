import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const Inter = localFont({
  src: "./fonts/InterVF.ttf",
  variable: "--font-inter",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "Настески Дизајн - Алуминиумски огради и тенди",
  description: "Професионална изработка на алуминиумски огради и тенди",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mk">
      <body className={`${Inter.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
