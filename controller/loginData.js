const LoginModel=require('../Rules/firstSchema')
const mongoose=require('mongoose')
const loginData=async (req,res)=>{
	console.log(req.body);
	const {name, email}=req.body;

	const connect=await mongoose.connect('mongodb+srv://keshabadhikari4590:X9Z8Bq9Ye9sMIx0Y@cluster0.w9kvft7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
	console.log("connected successfully");

	const data=await LoginModel.create({
		name, email
	})

	data.save();

	res.status(201).json({
		msg: data, 
		token: await data.generateToken() });

	console.log("data inserted successfully");

}



module.exports=loginData;