import UserTypeModel from '../models/userModel.js'
export const checkAutors=async (req,res,next)=>{
    try{
        const user=req.user
        console.log(user)
        console.log(user)
        if(user.role!=="author"){
            return res.status(403).json({message:"Access denied"})
        }
        // check if author exists in database
        let author=await UserTypeModel.findById(user.userId)
        if(!author){
            return res.status(404).json({message:"Author not found"})
        }
        next()
    }catch(err){
        res.status(500).json({message:"Error in checkAuthor middleware", error:err.message})
    }
}
