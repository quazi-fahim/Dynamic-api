const express=require('express');
const { getCarousel, addCarousel, change } = require('../controller/crousel.controller');
const {Protect}=require('../middleware/authmiddleware')
const {CheckAccess}=require('../middleware/access')
const router=express.Router();



router.get('/',Protect,getCarousel)
router.post('/add',Protect,CheckAccess({roles:['admin']}),addCarousel)
router.put('/:id',Protect,CheckAccess({roles:['admin']}),change)


module.exports=router