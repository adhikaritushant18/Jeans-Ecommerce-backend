
const mongoose=require('mongoose')
const jwt=require('jsonwebtoken')
const dotenv=require('dotenv')

const LoginrRules=new mongoose.Schema({
	name:
	{
		type: String,
		require: true
	},
	email:
	{
		type: String,
		require: true
	},
	isAdmin:{
		type: Boolean,
		default: false
	}
})

LoginrRules.methods.generateToken= function (){
	try{
		return jwt.sign({
			name: this.name,
			email: this.email,
		},
		process.env.JWT_SECRET_KEY,
		{
			expiresIn: "30d",
		}
		);
	}catch(error){
		return({msg: "something wrong"})
	}
}

const LoginModel=mongoose.model('LoginModel', LoginrRules);


module.exports=LoginModel;