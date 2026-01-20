  const jwt=require('jsonwebtoken')
  const SECRET_KEY=process.env.SECRET_KEY
  exports.Protect=async(req,res,next)=>{
     try{
        const token=req.headers.authorization?.split(" ")[1];
        if(!token)return res.status(400).json({message:"NOT Authorized"})
        const decode=jwt.verify(token,"SECRET_KEY")
        req.body.user=decode.user,
        req.body.user_id=decode.userId
        next();
     }
     catch(err){
        res.status(500).json({message:err.message})
     }
  }