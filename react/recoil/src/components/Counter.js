import { useRecoilState } from 'recoil';
import { countState } from '../atom/count-atom';
export default function Counter() {

  const [count, setCount] = useRecoilState(countState)
  const click = (num) =>{
    setCount(count + num)
  }
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={()=>{click(1)}}>
        +
      </button>
      <span style={{margin:'0 10px'}}>{count}</span>
      <button onClick={()=>{click(-1)}}>
        -
      </button>
    </div>
  );
}