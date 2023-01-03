
const mongoose = require("mongoose");

const noticeSchema = new mongoose.Schema({

    Notice:{type:String, required:true },
     UserName:{type:String, required:true},



},{ timestamps: true })

const noticeModel = mongoose.model("Notice", noticeSchema)

module.exports = noticeModel