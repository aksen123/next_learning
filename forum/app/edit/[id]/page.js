import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";
const Edit = async (props) => {

  let db = (await connectDB).db('forum');
  let result = await db.collection('post').findOne({_id : new ObjectId(props.params.id)});
  return (
    <div className="p-20">
    <h4>글 수정 페이지</h4>
    <h4></h4>
    <form action="/api/put/editor" method="POST">
    {/* <input type="hidden" name="_method" value="PUT"/> */}
      <input type="text" name="title"  defaultValue={result.title}/>
      <input type="text" name="content" defaultValue={result.content}/>
      <input  type="hidden" name="_id" value={props.params.id}/>
      <button type="submit">수정하기</button>
    </form>
  </div>
  )
}

export default Edit