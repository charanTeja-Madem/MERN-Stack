import exp from 'express';
import { UserModel } from '../models/usermodel.js'; 
export const userApp=exp.Router()
//creating min-express (seperate-Route) app
userApp.use(exp.json())
 userApp.get('/users',async(req,res)=>{
   const users=await UserModel.find()
   res.status(200).json({message:"users fetched",payload:users })
 })
 userApp.post('/users',async(req,res)=>{
   let newUser=req.body
   let username=await UserModel.findOne({username:newUser.username})
   if(username)
   {
    return res.status(400).json({message:"username already exists"})
   } 
   //create a new user model object
   let newUserDoc=new UserModel(newUser)
   //saving to db
   await newUserDoc.save()
   res.status(201).json({message:"new user created"})
 })
 userApp.get("/users/:id", async(req, res) => {
    //get objectid from req
    let objectid=req.params.id //params for objectid
    //get user from DB
    let user=await UserModel.findById(objectid) //find by id
    res.status(200).json({
        message:"user fetched successfully",
        data:user
    })
})
userApp.put('/users/:id', async(req, res) => {
   //get objectid from uri params
   let objectid=req.params.id
   //get modified user from req
   let modifiedUser=req.body
   //update user in DB
   let updatedUser=await UserModel.findByIdAndUpdate(
    objectid,
    {$set:{...modifiedUser}},//set will update the user 
    {new:true,runValidators:true}) //runValidators:true will run the validators during update
   //new:true will return the updated user document
   //send response to client
   res.status(200).json({
       message:"user updated successfully",
       payload:updatedUser
   })
})
userApp.delete('/users/',async(req,res)=>{
      //delete all users from DB
      let result=await UserModel.deleteMany({})
      //send response to client
      res.status(200).json({
          message:"all users deleted successfully",
          payload:result
      })
})
//delete user
userApp.delete('/users/:id',async(req,res)=>
{   
    //get objectid from uri params
    let objectid=req.params.id
    //delete user from DB
    let deletedUser=await UserModel.findByIdAndDelete(objectid)
    //send response to client
    res.status(200).json({
        message:"user deleted successfully",
        payload:deletedUser
    })
})
export default userApp