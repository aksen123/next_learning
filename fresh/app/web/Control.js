'use client'
import { useParams, useRouter } from 'next/navigation'
import Link from "next/link"

export default function Control(props) {
  const params = useParams();
  const router = useRouter()
  return (
    <ul>
    <li><Link href="/web/create">Create</Link></li>
    {params.id ?
    <>
    <li><Link href={`/web/update/`+params.id}>Update</Link></li>
    <li><button onClick={()=>{
      fetch('http://localhost:9999/topics/'+params.id, {method: 'DELETE' })
      .then(resp => resp.json())
      .then(result =>{
        router.push('/web')
        router.refresh()
      })
    }}>Delete</button></li>
    </>
     : null}
  </ul>
  )
}