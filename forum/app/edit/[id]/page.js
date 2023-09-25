import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";
const Edit = async (props) => {

  let db = (await connectDB).db('forum');
  let result = await db.collection('post').findOne({_id : new ObjectId(props.params.id)});

  return (
    <div className="p-20">
    <h4>글 수정 페이지</h4>
    <h4></h4>
    {result ? <form action="/api/post/editor" method="POST">
      <input type="text" name="title"  defaultValue={result.title}/>
      <input type="text" name="content" defaultValue={result.content}/>
      <input style={{display : 'none'}}  type="text" name="_id" value={props.params.id}/>
      <button type="submit">수정하기</button>
    </form> : <h1>해당 글이 없습니다</h1>}
  </div>
  )
}

export default Edit