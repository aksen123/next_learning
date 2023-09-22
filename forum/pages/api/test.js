import { connectDB } from "@/util/database"

export default async function handler(요청, 응답) {
  let date = new Date()
  
  let db = (await connectDB).db('forum');
  let result = await db.collection('post').find().toArray();
  if (요청.method == 'GET'){
    응답.status(200).json(result)
  }
}