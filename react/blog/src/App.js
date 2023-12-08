
import { useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle]=useState(['남자 코트 추천','여자 코트 추천', '아동복 추천'])
  const [like, setLike] = useState(0)
  const onClick = () =>{
    let arr = [...title];
    arr[0] = '여자 코트 추천'
    setTitle(arr)
  }
  return (
    <div className="App">
      <div className='black-nav'>
        <h4>블로그 글</h4>
      </div>
        <button onClick={()=>{
          let arr = [...title].sort()
          setTitle(arr)
        }}>가나다순</button>
        <button onClick={onClick}>클릭</button>
      <div className="list">
        <h4>{title[0]} <span>👍</span>{like}</h4>
        <p>2월 17일 발행</p>
        <h4>{title[1]} </h4>
        <p>2월 17일 발행</p>
        <h4>{title[2]} </h4>
        <p>2월 17일 발행</p>

      </div>
    </div>
  );
}

export default App;
