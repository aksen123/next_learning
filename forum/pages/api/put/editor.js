import {connectDB} from "/util/database"
import { ObjectId } from "mongodb";

async function Editor(req, res)  {
    console.log(req.body)
    // res.status(200).json('???')
    const filter = {_id:  new ObjectId(req.body._id) }
    console.log(filter)
    let db = (await connectDB).db("forum");
    let result = await db.collection('post').updateOne(filter,{$set : {title: req.body.title, content:req.body.content}});

    res.redirect(302, '/list')
  }

export default Editor