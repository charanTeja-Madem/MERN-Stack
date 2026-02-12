import jwt from 'jsonwebtoken'
import { config } from 'dotenv'

config()

export const verifyToken = (req, res, next) => {
    let token=req.cookies.token
    if(!token){
        return res.status(401).json({message:"invalid credentials"})
    }
    console.log("Token from cookie:", token)
   //verify token decoding 
    try{
        let decoded=jwt.verify(token,process.env.JWT_SECRET)
        req.user=decoded
        next()
    }catch(err){
        return res.status(401).json({message:"Invalid token",error:err.message})
    }
}
