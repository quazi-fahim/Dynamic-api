

const Hero=require('../model/hero.model')

//get hero image
 
exports.heroSection=async(req,res)=>{

    try{
        const hero=await Hero.find({active:true}).sort("-createdAt")
        if(!hero)return res.send("not found hero image")
    res.status(200).json({hero,msg:"data found"})
    }
    catch(err){
       res.status(500).json({msg:err.message}) 
    }
}

///admin create hero

exports.update=async(req,res)=>{
    try{
        await Hero.updateMany({},{active:false});
      const hero=await  Hero.create({...req.body,active:true});
      res.status(201).json({hero,
        msg:"updated"})

    }catch(err){
              res.status(201).json({msg:err.message})

    }
}
