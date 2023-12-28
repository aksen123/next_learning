import { Link } from "react-router-dom";


export default function ShopMain({shoes}) {
  console.log(shoes)
  return (
    <>
      <div className="main-bg"></div>
      <div className="container">
        <div className="row">
          {shoes.map((it, i) => {
            return <Card key={it.id} {...it} />;
          })}
        </div>
      </div>
    </>
  );
}

function Card(props){
  return (
    <div className="col-md-4">
    <img src={`https://codingapple1.github.io/shop/shoes${props.id+1}.jpg`} width="80%"/>
    <h4>{props.title}</h4>
    <p>{props.content}</p>
    <Link to={`/shop/detail/${props.id}`}>
    <button>상세 보기</button>
    </Link>
  </div>
  )
}