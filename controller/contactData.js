const contactModel=require('../Rules/secondSchema')
const mongoose=require('mongoose')
const contactData=async (req,res)=>{
	console.log(req.body);


	const connect=await mongoose.connect('mongodb+srv://keshabadhikari4590:X9Z8Bq9Ye9sMIx0Y@cluster0.w9kvft7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
	console.log("connected successfully");
	let {name, email, address, phone}=req.body;

	phone=Number(phone);

	const condata=await contactModel.create({
		name, email, address, phone
	})

	condata.save();

	console.log("Data inserted successfully");

}


module.exports=contactData;