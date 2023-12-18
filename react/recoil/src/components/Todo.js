import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { todoState } from "../atom/todo-atom"

function TodoItem({text,done,index}){
  let [toDos, setToDos] = useRecoilState(todoState);
  const [view, setView] = useState(false);
  const [todoText, setTodoText] = useState('')

  const editText = ()=>{
  let todo = {text: todoText, done}
    setToDos([...toDos.slice(0,index),todo,...toDos.slice(index + 1)])
    setTodoText('')
    setView(false)
  }
  const deleteTodo =()=>{
    setToDos([...toDos.slice(0,index),...toDos.slice(index +1)])
  }
  const check = ()=>{
    let todo = [...toDos];
    todo[index] = {...todo[index], done: !todo[index].done}
    setToDos(todo)
    console.log(todo[index], index)
  }
  return (
    <p>
      <span style={{ marginRight: "20px", display: "inline-block"}}>
        {text}
      </span>
      <button onClick={check}>{done ? "끝" : "해야함"}</button>
      <button onClick={()=>{
        setView(!view)
      }}>수정</button>
      <button onClick={deleteTodo}>삭제</button>
      { view &&
        <>
        <input value={todoText} onChange={(e)=>{
          setTodoText(e.currentTarget.value)
        }}/>
        <button onClick={editText}>수정 하기</button>
        </>
      }
    </p>
  );
}

export default function Todo(){
const [toDos, setToDos] = useRecoilState(todoState);
const [text, setText] = useState('');
// const test = ({target: {value}}) =>{
//   console.log(value)
// }
  return (
    <div>
      <h1>Todo</h1>
      {/* <input onChange={test}/> */}
        <input value={text} onChange={(e)=>{setText(e.currentTarget.value)}}/>
        <button onClick={()=>{
            let newTodo = {text : text, done: false}
            setToDos((todos) => [newTodo, ...todos]);
            setText('')
        }}>Add</button>

      <ul>
        { toDos.map((todo,i)=>
          <TodoItem key={i} {...todo} index={i}  /> 
        ) }
      </ul>
    </div>
  )
}