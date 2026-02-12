import exp from 'express'
import { authenticate } from '../services/ourServices.js';
import { verifyToken } from '../middlewares/verifyToken.js';
import UserTypeModel from '../models/userModel.js';
import bcrypt from 'bcrypt';
const commonApp=exp.Router()


commonApp.post('/login',async(req,res)=>{
    let usercred=req.body;
        let {token,user}=await authenticate(usercred)
        res.cookie("token",token,{
             httpOnly: true,     
          secure: false,      
          sameSite: "lax"
        })
        res.status(201).json({message:"login success",payload:user})
})
commonApp.post('/logout',verifyToken,(req,res)=>{
    res.clearCookie('token',
        {
            httpOnly: true,
            secure: false,
            sameSite:'lax'
        }
    )
    let role =req.user.role
    res.status(200).json({message:"Logout successful",role})
})
///change password
commonApp.post('/changePassword',verifyToken,async(req,res)=>{
    let {oldPassword,newPassword}=req.body;
    let userId=req.user.userId;
    //find user by id
    let user=await UserTypeModel.findById(userId);
    
    //check old password
    const isMatch=await bcrypt.compare(oldPassword,user.password)
    if(!isMatch){
        return res.status(401).json({message:"Invalid old password"})
    }
    //check if new password is same as old password
    if(oldPassword===newPassword){
        return res.status(400).json({message:"New password cannot be same as old password"})
    }
    //hash new password
    user.password=await bcrypt.hash(newPassword,12)
    await user.save();
    res.json({message:"Password changed successfully"})
})
export default commonApp