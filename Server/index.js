const express=require("express")
const bodyParser=require('body-parser')
const app=express()
const cors=require('cors')
const db=require('./dbConnection')


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static(`${__dirname}/upload`));
app.use(cors())

const route=require('./router')
app.use('/bmi_cal_api',route)
app.listen(3003,()=>{
    console.log("Server created sucessfully at 3003");
})