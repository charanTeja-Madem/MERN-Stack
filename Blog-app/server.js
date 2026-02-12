import exp from 'express';
import {connect} from 'mongoose';
import {config} from 'dotenv';
import cookieParser from 'cookie-parser';
import adminApp from './APIs/adminApi.js';
import authorApp from './APIs/authorApi.js';
import userApp from './APIs/userApi.js';
import { verifyToken } from './middlewares/verifyToken.js';
import commonApp from './APIs/commonApi.js';
config()   //process.env
const app = exp();
const connectDB=async()=>{
    try{
     await connect(process.env.DB_URL)
     console.log("DB connected");
     app.listen(process.env.PORT,()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
     });
    }
    catch(err){
        console.log("DB connection error",err);
    }
}
connectDB();

//dealing with invalid path

//body parser middleware
app.use(exp.json());
app.use(cookieParser());
app.use('/user-api',userApp);
app.use('/admin-api',adminApp);
app.use('/author-api',authorApp);
app.use('/common-api',commonApp);

app.use((req,res,next)=>{
    console.log(req.url)
    res.status(404).json({message:`${req.url} is not a valid path`})
})
//error handling middleware
//app logout
app.use((err,req,res,next)=>{
    //here next() is used to pass the control to next middleware
    console.log("err :",err)
    res.json({message:"Something went wrong",error:err.message});
})