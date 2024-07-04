
const express=require('express')

const router=express.Router();

const loginData=require('../controller/loginData');

const contactData=require('../controller/contactData');

// const adminMiddleware=require('../Middleware/adminMiddleware');

// const authMiddleware=require('../Middleware/authMiddleware');

router.post('/login', loginData);
// router.post('/logout', logoutData);
router.post('/contact', contactData);


module.exports=router;