"use client";
import Link from "next/link";
export default function ListItem({ result }) {
  // const deleteList = (id) => {
  //   fetch("/api/post/delete?id="+id)
  //     .then(() => {
  //       e.target.parentElement.style.opacity = 0;
  //       setTimeout(() => {
  //         e.target.parentElement.style.display = "none";
  //       }, 1000);
  //       alert('완료')
  //     })
  //     .catch(() => alert("안됨"));
  // };
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
                fetch(`/api/post/delete?id=${it._id}`)
                  .then((r) => {
                    return r.json();
                  })
                  .then((r) => {
                    if (r == "삭제완료") {
                      e.target.parentElement.style.opacity = 0;
                      setTimeout(() => {
                        e.target.parentElement.style.display = "none";
                      }, 1000);
                    }
                    alert(r);
                  })
                  .catch((err) => alert('11'));
                // deleteList(it._id)
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
