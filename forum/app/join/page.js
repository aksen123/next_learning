
const Join = ()=>{
  return (
    <div>
      <h1>회원가입 페이지</h1>
      <form action="/api/post/join" method="POST">
        <input type="text" name="id"  placeholder="아이디" required/>
        <input type='password' name="pw" placeholder="비밀번호" required/>
        <button type="submit">회원가입</button>
      </form>
    </div>
  )
}

export default Join