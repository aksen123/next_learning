"use client";

import { useEffect, useState } from "react";

export default function Comment({ parentId, session, comments }) {
  let [comment, setComment] = useState("");
  let [data, setData] = useState([]);
  let obj = { parent: parentId, content: comment };
  let test = parentId;
  console.log(session);
  useEffect(() => {
    fetch("/api/post/commentList", { method: "POST", body: parentId })
      .then((r) => r.json())
      .then((result) => {
        // console.log(result,parentId);
        // console.log('????',result);
        let arr = result.map((a) => {
          a._id = a._id.toString();
          return a;
        });
        // console.log(arr,'새로고침 했을때')
        setData(arr);
      });
  }, []);
  // console.log(parentId,'????')
  return (
    <div>
      <div>
        <hr></hr>
        {data.length > 0 ? (
          data.map((el, i) => {
            return (
              <p key={i}>
                {el.content}
                <span> - {el.author.split("@")[0]}</span>
              </p>
            );
          })
        ) : (
          <h1>댓글 없음</h1>
        )}
      </div>

      <input
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
        // {session && disabled}
        disabled={`${session ? false : true}`}
      />
      <button
        onClick={() => {
          fetch("/api/post/comment", {
            method: "POST",
            body: JSON.stringify(obj),
          })
            .then((r) => {
              console.log(r);
              return r.json();
            })
            .then((r) => {
              if (Array.isArray(r)) {
                let arr = r.map((a) => {
                  a._id = a._id.toString();
                  return a;
                });
                setData(arr);
                setComment("");
              } else {
                alert(r);
              }
            });
        }}
        disabled={`${session ? false : true}`}
      >
        {`${session ? "댓글 전송" : "로그인 필요"}`}
      </button>
    </div>
  );
}
