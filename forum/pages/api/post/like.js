import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
export default async function handler(res,req){
  let db = (await connectDB).db("forum");
  let session = await getServerSession(res,req,authOptions);
  // console.log(session)


  // console.log(res.body,res.query,session)

    if(res.method =='GET'){
      let result = await db.collection('like').find({parent : res.query.id }).toArray();
      if(!session){
        let result_data = {
          data : result,
          check : false
        }
        req.status(200).json(result_data)
      } else {
        let result_data = {
          data : result,
          check : true
        }
        req.status(200).json(result_data)
      }

    } else if(res.method =='POST'){
      if(!session){
        req.status(500).json('로그인이 필요합니다') 
      }else {
        let data = {
          parent: res.body,
          author: session.user.email,
        }
        let check = await db.collection('like').findOne({author: session?.user.email,parent : res.body})
        console.log(check, 123123)
        if (check === null) {
          await db.collection("like").insertOne(data);
          let arr = await db.collection('like').find({parent : res.body }).toArray();
          let result_data = {
            data : arr,
            check : true
          }
          req.status(200).json(result_data);
        } else {
           await db.collection("like").deleteOne(data);
          let arr = await db.collection('like').find({parent : res.body}).toArray();
          let result_data = {
            data : arr,
            check : false
          }
          req.status(200).json(result_data);
        }
      }
    }


}