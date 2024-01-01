import { useRecoilState,useRecoilValue } from "recoil"
import { timeState,timeSelector } from "../atom/time-atom"
export default function Time() {
  const [test, setTest] = useRecoilState(timeState);
  const test2 = useRecoilValue(timeSelector)
  return (
    <div>
      <h1 className="title"> 
      Time
      </h1>
      <input onChange={(event)=>{
        console.log(test)
        setTest((test)=>{
          let time = {...test,hour : +event.currentTarget.value}
          return time;
        })
      }}/>시간은 {test2.minute}분 입니다
       {/* 여기입력 하면 분으로 바꾸게 */}
       <br />
       <input onChange={(event)=>{
        console.log(test)
        setTest((test)=>{
          let time = {...test, minute: +event.currentTarget.value}
          return time;
        })
      }}/>분은 {test2.hour}시간 입니다.
       {/* 여기입력 하면 시간으로 바꾸게 */}

       <p>

       </p>
    </div>
  )
}

