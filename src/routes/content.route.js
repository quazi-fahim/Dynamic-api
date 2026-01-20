const express=require('express');
const { allContent } = require('../controller/content.controller');
const router=express.Router();
const {Protect}=require('../middleware/authmiddleware')
const {CheckAccess}=require('../middleware/access');

router.get('/content',Protect,allContent)

module.exports=router