import exp from 'express';
export const userApp=exp.Router()
//creating min-express (seperate-Route) app
userApp.use(exp.json())
let users=[]
 userApp.get('/users',(req,res)=>{
   res.json({message:"users",payload:users})
    })
 userApp.post('/user',(req,res)=>{
    let newUser=req.body
    users.push(newUser)
    //console.log("new User",newUser)
    res.status(201).json({message:"user created"})
 })
 userApp.put('/users/:id',(req,res)=>{
    let modifiedUser=req.body;
    let key=users.findIndex((user)=>user.id===modifiedUser.id)
    if(key==-1){
        return res.status(404).json({message:"user not found"})
    }
    else{
        users[key]=modifiedUser
        res.status(200).json({message:"user updated"})
    }
 })
 userApp.delete('/users/:id',(req,res)=>{
    let userId=Number(req.params.id)
    let user=users.find(user=>user.id==userId)
    if(!user){
       return res.json({ message: "user not found" })
    }
    else{
        let deletedUser=users.splice(users.indexOf(user),1)
        res.json({message:"user deleted", payload:deletedUser})
    }
 })
 userApp.get('/users/:id',(req,res)=>{
   let userId=Number(req.params.id)
   let user=users.find(user=>user.id==userId)
   if(!user){
    return res.json({message:"user not found"})
   }
   else{
    res.json({message:"user",payload:user})
   }
    })
