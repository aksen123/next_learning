import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function ShopMain({ shoes }) {
  const [shoesData, setShoesData] = useState(shoes);
  return (
    <>
      <div className="main-bg"></div>
      <div className="container">
        <div className="row">
          {shoesData.map((it, i) => {
            return <Card key={it.id} {...it} />;
          })}
        </div>
        <button
          onClick={() => {
            axios
              .get("https://codingapple1.github.io/shop/data2.json")
              .then((res) => setShoesData([...shoesData, ...res.data]))
              .catch(() => {
                alert("실패");
              });
          }}
          className="w-1/2 block"
        >
          버튼
        </button>
      </div>
    </>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={`https://codingapple1.github.io/shop/shoes${props.id + 1}.jpg`}
        width="80%"
      />
      <h4>{props.title}</h4>
      <p>{props.content}</p>
      <Link to={`/shop/detail/${props.id}`}>
        <button>상세 보기</button>
      </Link>
    </div>
  );
}
