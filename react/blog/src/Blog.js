import { useState } from "react";

export default function Blog() {
  const [title, setTitle] = useState([
    "남자 코트 추천",
    "여자 코트 추천",
    "아동복 추천",
  ]);
  const [like, setLike] = useState(new Array(title.length).fill(0));
  const [modal, setModal] = useState(false);
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('')
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
      {title.map((el, i) => {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setIndex(i);
                setModal(!modal);
              }}
            >
              {el}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let arr = [...like];
                  arr[i] += 1;
                  setLike(arr);
                }}
              >
                👍
              </span>
              {like[i]}
            </h4>
            <p>2월 17일 발행</p>
            <button onClick={()=>{
              let arr = [...title];
              arr.splice(i,1);
              setTitle(arr)
            }}>삭제</button>
          </div>
        );
      })}
      <input
      value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if(text !== '') {
            setTitle([ text,...title]);
            setText('');
            setLike([0,...like])
          }else {
            alert('내용을 입력해주세요')
          }
        }}
      >
        입력
      </button>
      {modal && title.length > 0 ? <Modal onClick={onClick} title={title} index={index} /> : null}
    </div>
  );
}



 export function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.title[props.index]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=>{props.onClick()}}>글수정</button>
    </div>
  );
}