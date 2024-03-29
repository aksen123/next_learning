import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tailwind",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="w-full flex justify-center gap-12 p-10">
          <Link href={"/cyworld"}>싸이월드</Link>
          <Link href={"/CustomModal"}>Modal Test</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
