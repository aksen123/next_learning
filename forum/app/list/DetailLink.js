'use client'

import { useRouter,usePathname } from "next/navigation"

export default function DetailLink() {
  let router = useRouter()
  let a = usePathname()
  // console.log(a)
  return (
    <button onClick={()=>{}}>버튼</button>
  )
}