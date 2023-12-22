import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import RecoilWrapper from "./RecoilWrapper";

export const metadata = {
  title: "Learn page - park",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RecoilWrapper>
        <div className="navbar">
          <Link href={"/"}>홈</Link>
          <Link href={"/list"}>list</Link>
          <Link href={"/cart"}>cart</Link>
          <Link href={"/web"}>web</Link>
        </div>
        {children}
        </RecoilWrapper>
      </body>
    </html>
  );
}
