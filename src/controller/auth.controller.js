const User = require("../model/user.model");
 const bcrypt=require('bcrypt')
 const jwt=require('jsonwebtoken')
exports.register = async (req, res) => {
  try {
    const { name, email, password, subscription,role} = req.body;
const hashPassword = await bcrypt.hash(password, 10);
    
    
    const user = await User.create({
      name,
      email,
      password: hashPassword,
      subscription,
      role
    })
    const token=jwt.sign({
            id:user._id,
            role:user.role,
            subscription:user.subscription
        },process.env.SECRET_KEY)
        res.status(200).json({token,msg:"Register & Login Successfully"})
    
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};


exports.login=async(req,res)=>{
    try{
        const {email,password}=req.body;
         const match=await User.findOne({email})
        if (!match) return res.status(401).json({ msg: "User not found" });
        const user=await bcrypt.compare(password,match.password);
        const token=jwt.sign({
            id:user._id,
            role:user.role,
            subscription:user.subscription
        },process.env.SECRET_KEY)
        res.status(200).json({token,msg:"Login Successfully"})
    }catch (err) {
    res.status(500).json({ msg: err.message });
  }
}