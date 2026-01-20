const mongoose=require('mongoose')

const HeroSchema=new mongoose.Schema({

    title:String,
    subtitle:String,
    imageurl:{
        type:String,
        required:true,

    },
    active:{
        type:Boolean,
        default:true
        
    }

},{timestamps:true})

module.exports=mongoose.model("Hero",HeroSchema)