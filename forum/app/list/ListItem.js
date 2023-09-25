"use client";
import Link from "next/link";
export default function ListItem({ result }) {
  const deleteList = (id) => {
    fetch("/api/post/delete?id="+id)
      .then(() => {
        // e.target.parentElement.style.opacity = 0;
        // setTimeout(() => {
        //   e.target.parentElement.style.display = "none";
        // }, 1000);
        alert('완료')
      })
      .catch(() => alert("안됨"));
  };
  return (
    <div>
      {result &&
        result.map((it, i) => (
          <div className="list-item" key={i}>
            <Link href={`/detail/${it._id}`}>
              <h4>{it.title}</h4>
            </Link>
            <Link href={`/edit/${it._id}`}>✏️</Link>
            <button
              onClick={(e) => {
                // fetch("/api/delete/delete", { method: "DELETE", body: it._id })
                // .then(() => {
                //   e.target.parentElement.style.opacity = 0;
                //   setTimeout(() => {
                //     e.target.parentElement.style.display = "none";
                //   }, 1000);
                // })
                // .catch(() => alert("안됨"));
                deleteList(it._id)
              }}
            >
              🗑️
            </button>
            <p>1월 1일</p>
          </div>
        ))}
    </div>
  );
}
