'use client'
import { useEffect, useState } from "react";
import { listSelector,listState } from "../atoms/list-atom";
import { useRecoilValue,useRecoilState } from "recoil";
export default function List() {  
  const 장바구니 = useRecoilValue(listSelector)
  let [상품, set상품] =  useRecoilState(listState)
  let [수량, 수량변경] =  useState([])
  useEffect( ()=>{
    const fetchData = async () => {
      try{
        let response = await fetch('http://localhost:9999/food');
        let data = await response.json();
        set상품(data);
        수량변경([...new Array(data.length).keys()].map(it => it = 0));
      }
      catch(error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  },[])
  console.log(상품,장바구니)
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
            <h4>{it.food} $40</h4>
            <button onClick={()=>onClick(-1,i)}>-</button>
            <span> {수량[i]} </span>
            <button onClick={()=>onClick(1,i)}>+</button>
            <button onClick={()=>{
              let arr = [...상품]
              arr[i] = {...it, count: 수량[i]}

              set상품(arr)
            }}>장바구니 담기</button>
          </div>
          )
        })
      }
    </div>
  )
}