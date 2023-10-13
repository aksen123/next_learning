import {connectDB} from "/util/database"
import { ObjectId } from "mongodb";

export default async function handler(res,req){
  console.log(res.query,123123123123123123)
  let db = (await connectDB).db("forum");
  let result = await db.collection('comment').find().toArray()
//쿼리스트링 안됨 찾아보기 

  req.status(200).json(result)
}