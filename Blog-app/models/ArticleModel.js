import { Schema,model } from "mongoose";
import users from "./userModel.js";
const userCommentSchema=new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:users
    }
    })
const articleSchema=new Schema({
    author:{
        type:Schema.Types.ObjectId,
        ref:"users",
        required:[true,"Author is required"]
    },
    title:{
        type:String,
        required:[true,"Title is required"]
    },
    category:{
        type:String,
        required:[true,"Category is required"]
    },
    content:{
        type:String,
        required:[true,"Content is required"]   
    },
    comments:[userCommentSchema],
    isArticalActive:{   
        type:Boolean,
        default:true
    }
},
{
    timestamps:true,
    versionKey:false,
    strict:'throw'
});
//create article model
const ArticleModel=model("articles",articleSchema);
export default ArticleModel;