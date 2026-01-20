const express=require('express');
const { heroSection, update } = require('../controller/hero.controller');
const router=express.Router();
const{Protect}=require('../middleware/authmiddleware')
const{CheckAccess}=require('../middleware/access')



router.get('/hero',Protect,heroSection)
router.put('/change',Protect,CheckAccess({roles:["admin"]}),update)

module.exports=router