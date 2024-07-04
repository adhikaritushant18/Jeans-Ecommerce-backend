
const mongoose=require('mongoose');

const connectdb=async ()=>{
	await mongoose.connect('mongodb+srv://keshabadhikari4590:X9Z8Bq9Ye9sMIx0Y@cluster0.w9kvft7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
	console.log("connected successfully");
}


connectdb();