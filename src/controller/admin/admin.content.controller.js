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
    try{
        const content=await Content.create(req.body)
     res.status(200).json({content})
    }catch(err){
            res.status(500).json({message:"data not found"})

    }
}


//update 
exports.update=async(req,res)=>{

    try{
        const content=await Content.findByIdAndUpdate(req,params.id,req.body,{new:true,runValidators:true})
        res.status(200).json(content)
    }catch(err){
            res.status(500).json({message:"data not found"})

    }
}
 

//delete 
exports.deleteData=async(req,res)=>{
    try{
        const content=await Content.findByIdAndDelete(req.params.id,{new:true})
    res.status(200).json(content)
    }
    catch(err){
            res.status(500).json({message:"data not found"})

    }
}