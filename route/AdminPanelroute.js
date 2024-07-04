const express=require('express');

const router=express.Router();

const getUsersData=require('../controller/getUsersData');
const getContactsData=require('../controller/getContactsData');
// const adminMiddleware=require('../Middleware/adminMiddleware');

router.get('/users', getUsersData);
router.get('/contacts', getContactsData);



module.exports=router;