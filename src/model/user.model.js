
const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
    name:String,
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        unique:true,
        required:true,
        min:4,
        max:10
    },role:{
 type:String,
 enum:["user","admin"],
 default:"user",
    },
    subscription:{
        type:String,
        enum:["normal","premium"],
        default:"normal"
    }

},{timestamps:true})

module.exports=mongoose.model("User",UserSchema)