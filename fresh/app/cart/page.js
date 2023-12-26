'use client'

import { listSelector,listState } from "../atoms/list-atom"
import { useRecoilValue,useRecoilState } from "recoil"
export default function Cart() {
  const 장바구니 = useRecoilValue(listState).filter(it => it.count > 0)
  
  console.log(장바구니)
  return (
    <div>
      <h4 className="title">Cart</h4>
      {장바구니.length > 0 ?장바구니.map((item,i) => {
        return  <CartItem key={item.id} {...item} index={i}/>
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
  const [장바구니2, set장바구니2] = useRecoilState(listState)
  let count = props.count
  // console.log(props.count)
  const onClick = (num,i) => {
    let arr = [...장바구니2];
    arr[i] = {...arr[i], count: props.count + num}
    set장바구니2(arr)
  }
  return (
    <div className="cart-item">
    <p>{props.food}</p>
    <p>{props.price}</p>
    <p>
    <button onClick={()=>onClick(1,props.index)}>+</button>
      {props.count}
    <button onClick={()=>onClick(-1,props.index)}>-</button>
    </p>
  </div>
  )
}