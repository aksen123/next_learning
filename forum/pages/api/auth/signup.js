import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  // console.log(req.body);
  let db = (await connectDB).db("forum");
  let users =await db.collection("user_cred").findOne({ email: req.body.email });
  // console.log(users,'??')
  if (req.body.name == "" || req.body.email == "" || req.body.password == "") {
    return res.status(500).json("빈칸입력");
  }
  if(users) {
    return res.status(500).json("이미 가입된 이메일 입니다");
  } else {
    let hash = await bcrypt.hash(req.body.password, 10);
    req.body.password = hash;
    req.body.admin = 'normal'
    await db.collection("user_cred").insertOne(req.body);
    return res.status(200).json('가입완료')
  }
}
