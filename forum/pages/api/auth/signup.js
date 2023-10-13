import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";

export default async function handler(res, req) {
  // console.log(res.body);
  let db = (await connectDB).db("forum");
  let users =await db.collection("user_cred").findOne({ email: res.body.email });
  // console.log(users,'??')
  if (res.body.name == "" || res.body.email == "" || res.body.password == "") {
    return req.status(500).json("빈칸입력");
  }
  if(users) {
    return req.status(500).json("이미 가입된 이메일 입니다");
  } else {
    let hash = await bcrypt.hash(res.body.password, 10);
    res.body.password = hash;
    res.body.admin = 'normal'
    await db.collection("user_cred").insertOne(res.body);
    return req.status(200).json('가입완료')
  }
}
