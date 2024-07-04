const express=require('express')

const app=express()
const dotenv=require('dotenv')
const cors=require('cors')
const routeData=require('./route/apiroute.js');
const routeAdmin=require('./route/AdminPanelroute');


dotenv.config()

const PORT=process.env.PORT || 3000
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({extended: true}))

app.use('/api', routeData);
app.use('/admin', routeAdmin);

app.listen(PORT, ()=>{
	console.log(`The Server is listening at PORT ${PORT}`)
})


