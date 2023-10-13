'use client'

import { useEffect, useState } from "react"
// import { getServerSession } from "next-auth";
// import { authOptions } from "../auth/[...nextauth]";
export default  function Like({parentId}) {
  let [like, setLike] = useState([])
  let [check, setCheck] = useState(false)
  // let session = await getServerSession(authOptions)
  useEffect(()=>{
    fetch('/api/post/like?id='+parentId)
    .then((r)=>{return r.json()})
    .then((r)=>{
      if(Array.isArray(r.data)){
        setLike(r.data)
        setCheck(r.check)
      } else {
        alert(r)
      }
    })
  },[])

  return (
    <div>
    <span onClick={()=>{
      fetch('/api/post/like', {method: 'POST', body: parentId})
      .then(r=>{
        return  r.json()})
      .then(r=> {
        if(Array.isArray(r.data)){
          setLike(r.data)
          setCheck(r.check)
        } else {
          alert(r)
        }
      })
    }}>{check ? "❤️" : '🤍'}</span>
    <span> 좋아요 {like.length} 개</span>
  </div>
  )
}