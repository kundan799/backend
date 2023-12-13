//import 
const mongoose=require("mongoose");

// connect
const connect=()=>{
   return  mongoose.connect("mongodb+srv://dkinfoway:dk1234@crud.xyoswne.mongodb.net/crud")
.then((res)=>console.log("Database Connected"))
.catch((err)=>console.log("Database Failed"))

}
module.exports=connect;