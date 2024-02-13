import { connectDB } from "/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
export default async function handler(res, req) {
  let session = await getServerSession(res, req, authOptions);
  let db = (await connectDB).db("forum");
  let body = JSON.parse(res.body);
  if (res.method == "POST") {
    if (body.content == "") {
      req.status(500).json("내용을 입력해주세요");
    } else if (!session) {
      req.status(500).json("입력 권한이 없습니다");
    } else {
      let update = {
        content: body.content,
        author: session.user.email,
        parent: body.parent,
      };
      let result = await db.collection("comment").insertOne(update);
      let data = await db
        .collection("comment")
        .find({ parent: body.parent })
        .toArray();
      req.status(300).json(data);
    }
  }
}
