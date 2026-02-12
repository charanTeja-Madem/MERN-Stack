import exp from 'express'
import UserTypeModel from '../models/userModel.js';
const adminApp=exp.Router();
//read all users
//block users
adminApp.put('/blockUsers',async(req,res)=>{
    let {userId}=req.body
    let user=await UserTypeModel.findByIdAndUpdate(userId,{isActive:false},{new:true})
    if(!user){
        return res.status(404).json({message:"User not found"})
    }
    else{
        return res.json({message:"User blocked successfully",user:user})
    }
})
//unblock users
adminApp.put('/unblockUsers',async(req,res)=>{
    let {userId}=req.body
    let user=await UserTypeModel.findByIdAndUpdate(userId,{isActive:true},{new:true})
    if(!user){
        return res.status(404).json({message:"User not found"})
    }
    else{
        return res.json({message:"User unblocked successfully",user:user})
    }
})
export default adminApp;