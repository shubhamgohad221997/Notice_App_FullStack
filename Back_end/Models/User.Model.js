const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    user:{type:String,required:true}

})

const userModel=mongoose.model("userName",userSchema)

module.exports=userModel
