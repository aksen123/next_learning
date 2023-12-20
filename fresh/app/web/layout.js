import Link from "next/link"
import Control from "./Control";

export const metadata = {
  title: "Test Web",
  description: '내가만듦'
}


export default async function layout({children}) {

  const resp = await fetch('http://localhost:9999/topics/',{cache:'no-cache'}) 
  const topics = await resp.json();
  console.log(topics)
  return (
    <div className="web-page">
      <ol>
        <li><Link href="/web">WEB</Link></li>
        {topics.map(topic=>{
  return (
    <li key={topic.id}>
      <Link href={`/web/read/${topic.id}`}>{topic.title}</Link>
    </li>
  );
})}
      </ol>
    {children}
    <Control />
    </div>
  )
}