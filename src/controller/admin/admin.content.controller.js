const Content=require('../../model/content.models')


//get 


exports.getall=async(req,res)=>{

    try{
        const data=await Content.find().sort("-createdAt")
    res.status(200).json({message:"data found",data})
    }catch(err){
            res.status(500).json({message:"data not found"})

    }
}

exports.createData=async(req,res)=>{
    
}