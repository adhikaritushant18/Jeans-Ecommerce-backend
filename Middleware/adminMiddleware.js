const LoginModel=require('../Rules/firstSchema');
const adminMiddleware=async (req, res, next)=>{
	// console.log("Access from adminMiddleware ",req.body)
	const {name, email, isAdmin}=req.body;
	const checkAdmin=await LoginModel.find({'isAdmin': isAdmin});
	if(checkAdmin){
		next();
	}

}

module.exports=adminMiddleware;