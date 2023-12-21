'use client'

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Update(){
  const params = useParams();
  const router = useRouter();
  const id = params.id;
  const [text, setText] = useState({title:'', body:''})
  useEffect(()=>{
    fetch('http://localhost:9999/topics/'+id)
    .then(resp =>resp.json())
    .then(result =>{
      let {title, body} = result
      setText({title, body})
    })
  },[])
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        const options = {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, body }),
        };
        fetch(`http://localhost:9999/topics/` + id, options)
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            const lastId = result.id;
            router.push(`/web/read/${lastId}`);
            router.refresh();
          });
      }}
    >
      <h1>{text.title}글 수정 페이지</h1>
      <p>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={text.title}
          onChange={(e) => {
            setText({ ...text, title: e.target.value });
          }}
        />
      </p>
      <p>
        <textarea
          name="body"
          placeholder="body"
          value={text.body}
          onChange={(e) => {
            setText({ ...text, body: e.target.value });
          }}
        />
      </p>
      <button type="submit">update</button>
    </form>
  );
}