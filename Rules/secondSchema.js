const mongoose=require('mongoose');

const contactRules=new mongoose.Schema({
	name:{
		type: String,
		require: true
	},
	email:{
		type: String,
		require: true
	},
	address:{
		type: String,
		require: true
	},
	phone:{
		type: Number,
		require: true
	}
})

const contactModel=mongoose.model('contactModel', contactRules);

module.exports=contactModel;