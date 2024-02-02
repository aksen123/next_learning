import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Detail({ shoes }) {
  const { id } = useParams();
  const item = shoes.find((el) => el.id == id);
  const [alert11, setAlert] = useState(false);
  const [text, setText] = useState("");
  useEffect(() => {
    // setTimeout(() => {
    //   setAlert(false);
    if (isNaN(text)) alert("숫자만 입력");
  }, [text]);

  if (item) {
    return (
      <div className="container">
        {alert11 && <div className="alert-box">2초후 사라짐</div>}
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <div className="row">
          <div className="col-md-6">
            <img
              src={`https://codingapple1.github.io/shop/shoes${
                item.id + 1
              }.jpg`}
              width="100%"
            />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{item.title}</h4>
            <p>{item.content}</p>
            <p>{item.price}</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
    );
  }
  return <h1>없는 페이지입니다</h1>;
}
