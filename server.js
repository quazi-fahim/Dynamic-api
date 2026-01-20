require('dotenv').config();

const express=require('express')
const app=express();
const ConnectDb=require('./src/config/db/db')
const PORT=process.env.PORT
// const cors=require('cors')
const AuthRouter=require('./src/routes/auth.routes')
const ContentRouter=require('./src/routes/content.route')
const HeroRouter=require('./src/routes/Hero.route')
const CarouselRouter=require('./src/routes/carousel.routes')
app.use(express.json());
// app.use(cors);
app.get('/',(req,res)=>{
 res.send({message:"server is running"})
})
app.use('/api',AuthRouter)
app.use('/api',ContentRouter)
app.use('/api',HeroRouter)
app.use('/api',CarouselRouter)

app.listen(PORT,async()=>{
    ConnectDb()
console.log(`port is running on ${PORT}`)
})