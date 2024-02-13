'use client'

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function DarkButton({modeValue}) {
  const [mode, setMode] = useState(false)
  const router = useRouter()
  const changeMode = ()=>{
    setMode(!mode)
    let cookie = ('; '+document.cookie).split(`; mode=`).pop().split(';')[0]
    if(cookie == 'light'){
      document.cookie = `mode=dark; max-age=3600`
      router.refresh()
    }else {
      document.cookie = `mode=light; max-age=3600`
      router.refresh()

    }
  }  
  useEffect(()=>{
    let cookie = ('; '+document.cookie).split(`; mode=`).pop().split(';')[0]
    if(cookie == ''){
      document.cookie = 'mode=light; max-age=3600'
      setMode(false)
    } else if(cookie =='dark'){
      setMode(true)
    }
  },[])
  return <button onClick={changeMode}>{modeValue =='dark' ? '☀️' : '🌙'}</button>
}