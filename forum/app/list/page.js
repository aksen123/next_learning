
import { connectDB } from "@/util/database";
import Link from "next/link";
import ListItem from "./ListItem";

export const dynamic = 'force-dynamic' 

export default async function List() {
  let db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  // console.log(result,11)
  result = result.map((a)=>{
    a._id = a._id.toString()
    return a
  })
  return (
    <div className="list-bg">
      <ListItem result={result}/>
    </div>
  );
}
