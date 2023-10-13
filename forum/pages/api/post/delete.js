import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청, 응답) {
  let session = await getServerSession(요청, 응답, authOptions);
  console.log(요청.query)
  if (session) {
    let db = (await connectDB).db("forum");
    
    let test = await db
      .collection("post")
      .findOne({ _id: new ObjectId(요청.query.id) });

      let test2 =  await db
      .collection("user_cred")
      .findOne({email : session.user.email}); 
      // console.log(test2,'user');

      if (test.author == session.user.email || test2.admin == "admin") {
      let result = await db.collection("post").deleteOne(test);
      return 응답.status(200).json("삭제완료");
    } else {
      return 응답.status(500).json("삭제권한 없음");
    }
  } else {
    return 응답.status(500).json("로그인하셈");
  }
}
