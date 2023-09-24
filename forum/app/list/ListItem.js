"use client";
import Link from "next/link";
export default function ListItem( {result} ) {
  const deleteList = (id) => {
    fetch("/api/delete/delete",{method:"DELETE", body : id }).then(() => {
      alert('삭제완료')
    }).catch(()=>alert("안됨"));
    
  }
  return (
    <div>
      {result.map((it, i) => (
        <div className="list-item" key={i}>
          <Link href={`/detail/${it._id}`}>
            <h4>{it.title}</h4>
          </Link>
          <Link href={`/edit/${it._id}`}>✏️</Link>
          <button
            onClick={() => {
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
};

