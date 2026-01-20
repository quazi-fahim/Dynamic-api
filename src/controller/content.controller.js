
 const Content=require('../model/content.models')
 
//get

exports.allContent=async(req,res)=>{

    try{

        const query=await Content.find({
            level:{$in:req.accessLevels}
        });
if(req.query.search){
    query.find({
        section:{$regex:req.query.search,$option:"i"}
    })
}
        //
      if(req.query.sort){
        query.sort(req.query.sort);
      }else{
        query.sort("-createdAt")
      }
      //pagination
      const page=parseInt(req.query.page)||1;
      const limit=parseInt(req.query.limit)||10;
      const skip=(page-1)*limit
        const data=await query.skip(skip).limit(limit)
       

            res.status(200).json({data})
    }
    catch(err){
      res.status(500).json({msg:"Content not Found"})
    }
}






