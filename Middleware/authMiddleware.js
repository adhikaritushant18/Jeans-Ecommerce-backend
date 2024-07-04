
const LoginModel=require('../Rules/firstSchema');

const authMiddleware=async (req, res)=>{
	const {name, email}=req.body;

	const data=await LoginModel.find({'name': name});

	if(data){
		res.json({msg: "User already available"})
	}else{
		next();
	}


}

module.exports=authMiddleware;