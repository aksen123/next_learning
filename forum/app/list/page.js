import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetaileLink";

export default async function List() {
  let db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  // console.log(result)
  return (
    <div className="list-bg">
      {result.map((it, i) => (
        <div className="list-item" key={i}>
          <Link href={`/detail/${it._id}`}>
            <h4>{it.title}</h4>
          </Link>
          <Link href={`/edit/${it._id}`}>✏️</Link>
          <p>1월 1일</p>
        </div>
      ))}
    </div>
  );
}
