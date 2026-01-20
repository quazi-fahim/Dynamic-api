const express=require('express');
const { allContent } = require('../controller/content.controller');
const router=express.Router();
const {Protect}=require('../middleware/authmiddleware')
const {CheckAccess}=require('../middleware/access');
const { createData, update, deleteData } = require('../controller/admin/admin.content.controller');

router.get('/content',Protect,allContent)
router.post('/create',Protect,CheckAccess({roles:['admin']}),createData)
router.put('/:id',Protect,CheckAccess({roles:['admin']}),update)
router.delete('/:id',Protect,CheckAccess({roles:['admin']}),deleteData)

module.exports=router