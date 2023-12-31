'use client'

import { useRouter } from "next/navigation";

export default function Create(){
  const router = useRouter()
  return (
    <form onSubmit={(event)=>{
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      const options ={
        method : 'POST',
        headers: {
          'Content-Type' : 'application/json' 
        },
        body : JSON.stringify({title,body}) 
      }
      fetch(`http://localhost:9999/topics`,options )
      .then(res =>res.json())
      .then(result =>{
        console.log(result)
       const lastId = result.id;
       router.push(`/web/read/${lastId}`)
       router.refresh()
      })
    }}>
      <p>
        <input type="text" name="title" placeholder="title"/>
      </p>
      <p>
        <textarea name="body" placeholder="body" />
      </p>
      <button type="submit">create</button>
    </form>
  )
}