'use client'
export default function Error({error,reset}) {
  console.log(error,'?????')
  return (
    <div>
      <h3>에러~~</h3>
      <button onClick={()=>{reset()}}>버튼</button>
    </div>
  )
}