import { useRecoilState, useRecoilValue } from 'recoil';
import { countState, numberSelector, numberState } from '../atom/count-atom';
export default function Counter() {

  const [count, setCount] = useRecoilState(countState)
  const [number, setNumber] = useRecoilState(numberState)
  const [number2, setNumber2] = useRecoilState(numberSelector(100))
  const click = (num) =>{
    setCount(count + num)
  }

  return (
    <div>
      <h1 className='title'>Counter</h1>
      <button onClick={()=>{click(1)}}>
        +
      </button>
      <span style={{margin:'0 10px'}}>{count}</span>
      <button onClick={()=>{click(-1)}}>
        -
      </button>

      <p>Selector Family Test</p>
    <p>number atom : {number}</p>
    <p>selector : {number2}</p>
    <button onClick={()=>{setNumber2(10)}}>set 버튼</button>
    <button onClick={()=>{setNumber(count)}}>number atom  버튼</button>
    </div>
  );
}