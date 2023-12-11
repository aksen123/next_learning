import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState([
    "남자 코트 추천",
    "여자 코트 추천",
    "아동복 추천",
  ]);
  const [like, setLike] = useState(new Array(title.length).fill(0));
  let [modal, setModal] = useState(false);
  const onClick = () => {
    let arr = [...title];
    arr[0] = "여자 코트 추천";
    setTitle(arr);
  };
  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그 글</h4>
      </div>
      <button
        onClick={() => {
          let arr = [...title].sort();
          setTitle(arr);
        }}
      >
        가나다순
      </button>
      <button onClick={onClick}>클릭</button>
      {title.map((el,i) => {
        return (
          <div className="list">
            <h4
              onClick={() => {
                setModal(!modal);
              }}
            >
              {el} <span onClick={(e)=>{
                e.stopPropagation()
                let arr = [...like];
                arr[i] +=  1
                setLike(arr)
                }}>👍</span>
              {like[i]}
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}
      {modal ? <Modal /> : null}
    </div>
  );
}
function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}
export default App;
