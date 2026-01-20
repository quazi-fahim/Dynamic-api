 const mongoose=require('mongoose')

 const ContentSchema=new mongoose.Schema({
      section:String,
      level:{
          type:String,
          enum:["normal","premium"]
      },//normal or premium 
      image:String,
 })

module.exports=mongoose.model("Content",ContentSchema)
