"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Navi() {
  const router = useRouter()
  const onClick = (e :React.ChangeEvent<HTMLInputElement>) => {
    const link = e.currentTarget.id
    router.push(link)
  }
  return (
    <ul className='absolute -right-16 top-6'>
    <li className='text-center w-16 h-8 text-sm  leading-8 '>
    <input defaultChecked={true}  className='hidden peer' type="radio" name="menu" id="/cyworld" onChange={onClick}/>
    <label htmlFor="/cyworld" className='w-full h-full block  border-black border-[1px] mt-1 rounded-r-xl bg-sky-600 text-white peer-checked:text-sky-600 peer-checked:bg-white' >
      홈
    </label>
    </li>
    <li className='text-center w-16 h-8 text-sm  leading-8 '>
    <input  className='hidden peer' type="radio" name="menu" id="/cyworld/game" onChange={onClick}/>
    <label htmlFor="/cyworld/game" className='w-full h-full block  border-black border-[1px] mt-1 rounded-r-xl bg-sky-600 text-white peer-checked:text-sky-600 peer-checked:bg-white'>
      게임
    </label>
    </li>
    <li className='text-center w-16 h-8 text-sm  leading-8 '>
    <input  className='hidden peer' type="radio" name="menu" id="/cyworld/jukebox" onChange={onClick}/>
    <label htmlFor="/cyworld/jukebox" className='w-full h-full block  border-black border-[1px] mt-1 rounded-r-xl bg-sky-600 text-white peer-checked:text-sky-600 peer-checked:bg-white'>
      쥬크박스
    </label>
    </li>

  </ul>
  )
}