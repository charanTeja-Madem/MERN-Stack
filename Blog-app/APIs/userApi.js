import exp from 'express'
import { register,login, authenticate } from '../services/ourServices.js';
import ArticleTypeModel from '../models/ArticleModel.js'
import { verifyToken } from '../middlewares/verifyToken.js';
const userApp=exp.Router();
//register user
//authinticate user
//read all articles
userApp.post('/users',async(req,res)=>{
    let userObj=req.body
    const newUserObj=await register({...userObj,role:"user"})
    res.status(201).json({message:"user created",payload:newUserObj})
})
//read all articles
userApp.get('/articles',verifyToken,async(req,res)=>{
    let role=req.user.role
    if(role!=="user"){
        return res.status(403).json({message:"Access denied"})
    }
    let articles=await ArticleTypeModel.find({isArticalActive:true})
    if(!articles) return res.status(404).json({message:"Articles not found"})
    res.status(200).json({message:"Articles",articles})

})
//add comment to article

userApp.post('/articles/comments',verifyToken,async(req,res)=>{
    let role=req.user.role
    let articleObj=await ArticleTypeModel.findById(req.body.articleId)
    let articleStatus=articleObj? articleObj.isArticalActive : null
    console.log(articleStatus)
    if(role!=="user" || !articleStatus){
        return res.status(403).json({message:"Access denied"})
    }
    let {articleId,comment}=req.body
    let article=await ArticleTypeModel.findById(articleId)
    if(!article) return res.status(404).json({message:"Article not found"})
    article.comments.push({comment,userId:req.user.userId})
    await article.save()
    res.status(200).json({message:"Comment added",article})
})
export default userApp;