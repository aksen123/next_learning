import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import LoginBtn from "./LoginBtn";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { cookies } from "next/headers";
import DarkButton from "./Dark";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  let session = await getServerSession(authOptions);
  // console.log(session);
  let res = cookies().get('mode')
  console.log(res)
  return (
    <html lang="en">
      <body className={res != undefined && res.value =='dark' ? 'dark' : ''} >
        <div className="navbar">
          <Link href="/" className="logo">
            forum
          </Link>
          <Link href="/list">List</Link>
          <Link href="/write">write</Link>
          {session ? <span><img width={30} src={session.user.image} />{session.user.name}님 안녕하세요</span> : null}
          <LoginBtn login={session}/>
          <DarkButton modeValue={res?.value} />
        </div>
        {children}
      </body>
    </html>
  );
}
