import { connectDB } from "@/util/database"

const SignUp = async (req, res) => {
  if(req.method == 'POST'){
    let db = (await connectDB).db('members');
    let result = await db.collection('user').find().toArray();
    let userId = result.find(user => user.id == req.body.id)

    if(userId == undefined && req.body.id !== '') {
    let result =  await db.collection('user').insertOne(req.body)
    return  res.redirect(302, '/list')
    }
  }
  return res.status(500).json('실패')
}

export default SignUp