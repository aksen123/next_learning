'use client'
import { useParams } from 'next/navigation'
import Link from "next/link"

export default function Control(props) {
  const params = useParams();
  console.log(params)
  return (
    <ul>
    <li><Link href="/web/create">Create</Link></li>
    {params.id ?
    <>
    <li><Link href="/web/update">Update</Link></li>
    <li><button>Delete</button></li>
    </>
     : null}
  </ul>
  )
}