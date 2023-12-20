import Link from "next/link"

export const metadata = {
  title: "Test Web",
  description: '내가만듦'
}


export default function layout({children}) {
  return (
    <div className="web-page">
      <ol>
        <li><Link href="/web">WEB</Link></li>
        <li><Link href="/web/read/1">HTML</Link></li>
        <li><Link href="/web/read/2">CSS</Link></li>
      </ol>
    {children}
      <ul>
        <li><Link href="/web/create">Create</Link></li>
        <li><Link href="/web/update">Update</Link></li>
        <li><button>Delete</button></li>
      </ul>
    </div>
  )
}