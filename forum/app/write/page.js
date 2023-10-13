import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";


export default async function Write() {
  let session = await getServerSession(authOptions);
  if(session) {
    return (
      <div className="p-20">
        <h4>글작성</h4>
        <form action="/api/post/new" method="POST">
          <input type="text" name="title"  placeholder="글 제목" autoFocus/>
          <input type="text" name="content" placeholder="내용"/>
          <button type="submit">작성하기</button>
        </form>
      </div>
    )
  }else {
    return ( <h1>로그인 해주세요</h1>)
  }
}