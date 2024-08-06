const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/bmi_cal")
var db=mongoose.connection
db.on("error",console.error.bind("error"))
db.once("open",function(){
    console.log("Database connection successful");
})


module.exports=db