'use client'

import { listSelector,listState } from "../atoms/list-atom"
import { useRecoilValue } from "recoil"
export default function Cart() {
  const 장바구니 = useRecoilValue(listState).filter(it => it.count > 0)
  console.log(장바구니)
  return (
    <div>
      <h4 className="title">Cart</h4>
      {장바구니.length > 0 ?장바구니.map((item) => {
        return  <CartItem key={item.id} {...item} />
      }) : <h3 style={{textAlign:'center'}}>추가안했음</h3>}
      <Button color='red'/>
    </div>
  )
} 



function Button({color}) {
  return (
    <button style={{backgroundColor: `${color}`}}>버튼</button>
  )
}

function CartItem(props) {
  let count = props.count
  console.log(props.count)
  const onClick = (num) => {
    count += num;
    console.log(count)
  }
  return (
    <div className="cart-item">
    <p>{props.food}</p>
    <p>{props.price}</p>
    <p>
    <button onClick={()=>onClick(1)}>+</button>
      {count}
    <button>-</button>
    </p>
  </div>
  )
}