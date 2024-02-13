import { connectDB } from "@/util/database"
import {getServerSession} from 'next-auth'
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(요청,응답) {
  let session = await getServerSession(요청,응답, authOptions)
  // let test = JSON.parse(요청.body)
  // console.log(session)
  if (session) {
    if(요청.body.title == '') {
      return 응답.status(500).json('제목을 입력해주세요')
    }
    요청.body.author = session.user.email;
    // console.log(요청.body)
      let db = (await connectDB).db('forum');
      let result = await db.collection('post').insertOne(요청.body);
      return 응답.redirect(302, '/list')
 
  } else {
    return 응답.status(300).json('로그인이 필요합니다')
    // return 응답.redirect(502, '/list')
  }
}