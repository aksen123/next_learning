'use client'

import { useState } from "react"

export default function Image() {
  const change = (e)=>{
    let test = e.target.files
    // let aa = window.URL.createObjectURL(test)
    let a = Object.entries(test).map(el => {return URL.createObjectURL(el[1])})
    setImg(a)
    console.log(test,'=====',a)
  }
  let [img,setImg] = useState([])

  return (
    <>
    <input type="file" accept="image/*" multiple onChange={change}/>
    { img.length > 0 && img.map(el =>{
      return <img src={el} width={100}/>
    })
      }
    </>
  )
}