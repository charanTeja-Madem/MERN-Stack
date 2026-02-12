import ex from 'express'
import UserTypeModel from '../models/userModel.js'
import ArticleTypeModel from '../models/ArticleModel.js'
import {register,authenticate} from '../services/ourServices.js'
import { checkAutors } from '../middlewares/checkAuthor.js'
import { verifyToken } from '../middlewares/verifyToken.js'
import {ObjectId} from 'mongodb'
const authorApp=ex.Router()
//DRY principle-Don't Repeat Yourself
//Register author
authorApp.post('/users',async(req,res)=>{
    const authorObj=req.body
    const author=await register({...authorObj,role:'author'})
    res.status(201).json({message:"Author created",payload:author})
})
//authenticate author
// authorApp.post('/login',async(req,res)=>{
//     //get user credentials from request body
//     const userObj=req.body
//     //authenticate user
//     let {user,token}=await authenticate(userObj)
//     //save token in cookie
//     res.cookie('token',token,{httpOnly:true,sameSite:'lax',secure:false})
//     //send response
//     res.status(200).json({message:"User authenticated",user})
// })
//create article
authorApp.post('/articles',verifyToken,checkAutors,async(req,res)=>{
   //get article details from request body
   const ArticleObj=req.body
  //validate author id
  if(!ArticleObj.author||!ObjectId.isValid(ArticleObj.author)){
    return res.status(400).json({message:"Invalid author ID"})
  }
  //check for the author id
  const author=await UserTypeModel.findById(new ObjectId(ArticleObj.author))
  if(!author||author.role!="author"){
    return res.status(404).json({message:"Author not found"})
  }
  //create article with valid ObjectId
  const article=new ArticleTypeModel({...ArticleObj,author:new ObjectId(ArticleObj.author)})
  let createdArticle=await article.save()
  //send response
  res.status(201).json({message:"Article created",createdArticle})
})
//edit article
authorApp.put('/articles/:id/author/:authorid',async(req,res)=>{
    const {id,authorid}=req.params
    const articleUpdate=req.body
    const article=await ArticleTypeModel.findByIdAndUpdate(id,articleUpdate,{new:true})
    if(!article) return res.status(404).json({message:"Article not found"})
    res.status(200).json({message:"Article updated",article})
})
//read articles of author
authorApp.get('/articles/:authorid',verifyToken,checkAutors,async(req,res)=>{   
        let authorid=req.params.authorid
        //validate author id
        if(!authorid||!ObjectId.isValid(authorid)){
            return res.status(400).json({message:"Invalid author ID"})
        }
        //check for the author id
        const author=await UserTypeModel.findById(new ObjectId(authorid))
        if(!author||author.role!="author"){
            return res.status(404).json({message:"Author not found"})
        }
        //find articles of the author
        const articles=await ArticleTypeModel.find({author:new ObjectId(authorid),isArticalActive:true})
        res.status(200).json({message:"Articles found",articles})

})
authorApp.put('/articles',async(req,res)=>{
    //get modified article from req
    let articleObj=req.body
    let authorid=articleObj.author
    //validate author id
    if(!authorid||!ObjectId.isValid(authorid)){
        return res.status(400).json({message:"Invalid author ID"})
    }
    //find article in database
    let article=await ArticleTypeModel.findById(articleObj.articleId)
    if(!article) return res.status(404).json({message:"Article not found"})
    //update article - exclude articleId from update object
    const {articleId,...updateData}=articleObj
    let updatedArticle=await ArticleTypeModel.findByIdAndUpdate(articleId,updateData,{new:true})
    //send response
    res.status(200).json({message:"Article updated",updatedArticle})

})

//soft delete article
authorApp.delete('/articles/:id',async(req,res)=>{
    let articleId=req.params.id
    let article=await ArticleTypeModel.findByIdAndUpdate(articleId,{isArticalActive:false},{new:true})
    if(!article) return res.status(404).json({message:"Article not found"})
    res.status(200).json({message:"Article deleted",article})
})
export default authorApp