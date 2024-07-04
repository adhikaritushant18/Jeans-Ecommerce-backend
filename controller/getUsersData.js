const usersModel=require('../Rules/firstSchema')
const mongoose=require('mongoose')

const getContactsData=async (req,res)=>{
	await mongoose.connect('mongodb+srv://keshabadhikari4590:X9Z8Bq9Ye9sMIx0Y@cluster0.w9kvft7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
	const data=await usersModel.find({});
	console.log(data);
	res.json(data);
}

module.exports=getContactsData;