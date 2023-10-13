"use client";

export default function NewWrite() {
  function test(e) {
    // e.preventDefault()
    // console.log(e.target);
    fetch("/api/post/new")
      .then((r) => {
        return r.json();
      })
      .then((r) => {
        alert(r);
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <button
      onClick={(e) => {
        e.preventDefault()
        let parent = e.target.parentElement
        let  test = document.getElementsByName('title')[0].value
        let  test1 = document.getElementsByName('content')[0].value
        console.log(test);
        let test12 = {title: test, content : test1}
        fetch("/api/post/new",{method: 'POST' , body: JSON.stringify(test12)})
          .then((r) => {
            return r.json();
          })
          .then((r) => {
            alert(r);
          })
          .catch((err) => {
            alert(err);
          });
      }}
    >
      작성하기?
    </button>
  );
}
