const mongoose=require('mongoose');

const CarouselSchema=new mongoose.Schema({

    title:String,
    description:String,
    imageurl:{type:String,required:true},
      order:{type:Number,default:0},
   active:{type:Boolean,default:true}

},{timestamps:true})

module.exports=mongoose.model('Carousel',CarouselSchema)