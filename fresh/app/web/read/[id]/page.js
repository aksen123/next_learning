// 'use client'

export default async function Read(props){
  const resp = await fetch(`http://localhost:9999/topics/${props.params.id}`) 
  const topics = await resp.json();
  return(
    <>
    <h1>Read page</h1>
    title : {topics.title}
    <br></br>
    body : {topics.body}
    </>
  )
}