import { connectDB } from "/util/database";

export default async function handler(res, req) {
  let db = (await connectDB).db("forum");
  let data = await db
    .collection("comment")
    .find({ parent: res.body })
    .toArray();
  req.status(300).json(data);
}
