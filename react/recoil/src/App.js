import { useState } from 'react';
import './App.css';
import { useRecoilState, useRecoilValue } from 'recoil';
import { countState,countSelector } from './atom';

function Counter() {
  const [count, setCount] = useRecoilState(countState)
  const [value,setValue] = useRecoilState(countSelector)
  console.log(value,'???')
  return (
    <div>
      <h1>Counter</h1>
      <button
        onClick={() => {
          setValue()
        }}
      >
        +
      </button>
      {count.age}
      {count.name}
    </div>
  );
}
function DisplayCounter() {
  const [count] = useRecoilState(countState)
  return <div>{`${count.name}의 나이는 ${count.age}입니다`}</div>
}
function App() {
  return (
    <div>
      <Counter  />
      <DisplayCounter />
    </div>
  );
}

export default App;
