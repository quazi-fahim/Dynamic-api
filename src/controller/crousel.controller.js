const Carousel=require('../model/crousel.modle')


//get carousel

exports.getCarousel=async(req,res)=>{
    try{
        const slides= await Carousel.find({active:true}).sort("title")
    res.status(200).json({slides})
    }catch(err){
        res.status(500).json({msg:err.msg})
    }
}

//add slides

exports.addCarousel=async(req,res)=>{
    try{
        const slide=await Carousel.create(req.body);
        res.status(201).json(slide)
    }catch(err){
        res.status(500).json({msg:err.msg})
    }
}


///update slide

exports.change=async(req,res)=>{
    try{
        const slides=await Carousel.findByIdAndUpdate(req.params.id,req.body,{
         new:true,runValidators:true})
         res.status(200).json(slides)
    }catch(err){
        res.status(500).json({msg:err.msg})
    }

}


