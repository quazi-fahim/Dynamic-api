  
 const mongoose=require('mongoose')
  const URL=process.env.MONGO_DB

  const ConnectDb=async()=>{
    try{
        await mongoose.connect(URL)
        console.log("MONGODB connected")
    }
    catch(err){
 console.log("MONGODB not connected")
    }
  }

  module.exports=ConnectDb