import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Comment from "./Comment";
import Like from "./Like";
export default async function Detail(props) {

  let db = (await connectDB).db("forum");
  let result = await db.collection("post").findOne({_id : new ObjectId(props.params.id)})

  let comments = await db.collection('comment').find({parent : props.params.id}).toArray()
  let user = result.author.split('@')[0];
  return (
    <div>
      <h4>상세페이지</h4>
      <span>{user}</span>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
      <Like parentId={result._id.toString()}/>
      <Comment parentId={result._id.toString()}comments={comments}/>
    </div>
  )
}