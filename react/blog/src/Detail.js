import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
export default function Detail({shoes}){
  const params = +useParams().id
  console.log(shoes,params)
  return (
<div className="container">
  <div className="row">
    <div className="col-md-6">
      <img src={`https://codingapple1.github.io/shop/shoes${params+1}.jpg`} width="100%" />
    </div>
    <div className="col-md-6">
      <h4 className="pt-5">{shoes[params].title}</h4>
      <p>{shoes[params].content}</p>
      <p>{shoes[params].price}</p>
      <button className="btn btn-danger">주문하기</button> 
    </div>
  </div>
</div> 
  )
}