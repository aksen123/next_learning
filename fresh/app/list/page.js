'use client'
import { useState } from "react";

export default function List() {  
  
  let 상품 = ['Tomatoes', 'Pasta', 'Coconut'];
  let count = 0;
  let [수량, 수량변경] = useState([...new Array(상품.length).keys()].map(it => it = 0))

  const onClick = (num, i)=>{
    const newArr = [...수량]
    newArr[i] = newArr[i] + num < 0 ? 0 : newArr[i] + num
    수량변경(newArr)
  }
  console.log(수량)
  return (
    <div>
      <h4 className='title'>상품목록</h4>
      {
        상품.map((it,i)=>{
          return (
            <div className="food" key={i}>
              <img src={`/img/food${i}.png`} className="food-img"/>
            <h4>{it} $40</h4>
            <button onClick={()=>onClick(-1,i)}>-</button>
            <span> {수량[i]} </span>
            <button onClick={()=>onClick(1,i)}>+</button>
          </div>
          )
        })
      }
    </div>
  )
}