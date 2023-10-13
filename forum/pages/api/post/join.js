import { connectDB } from "@/util/database"

const SignUp = async (req, res) => {
  if(req.method == 'POST'){
    let db = (await connectDB).db('members');
    let result = await db.collection('user').findOne({id : req.body.id});
    // let userId = result.find(user => user.id == req.body.id)
    // console.log(result)
    if(result == undefined && req.body.id !== '') {
    let result =  await db.collection('user').insertOne(req.body)
    return  res.redirect(302, '/list')
    }
  }
  return res.status(500).json('이미 존재하는 아이디 입니다')
  // return res.redirect(302, '/join')
}

export default SignUp
