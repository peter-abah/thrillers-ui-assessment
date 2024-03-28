import NavBar from "@/components/nav_bar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Flight Dashboard",
  description: "Flight Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-main-bg text-primary flex flex-col sm:flex-row">
        <NavBar />
        <main className="px-4 md:px-8 2xl:px-12.5 py-2 sm:py-8 xl:py-10 xl:ml-[315px] 2xl:ml-[350px] w-full">
          <div className="max-w-[1250px] mx-auto">{children}</div>
        </main>
      </body>
    </html>
  );
}
