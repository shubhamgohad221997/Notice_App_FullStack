const express=require('express')
const noticeModel=require("../Models/Notice.Model")
const  Notice=express.Router()

Notice.post("/",async(req,res)=>{
    try {
         let data=await noticeModel.create(req.body)
         res.send(data)
    } catch (error) {
        res.status(500).send(error)
    }
})


Notice.get("/",async(req,res)=>{
    try {
         let data=await noticeModel.find().sort({'createdAt':-1})
         res.send(data)
    } catch (error) {
        res.status(500).send(error)
    }
})


module.exports=Notice