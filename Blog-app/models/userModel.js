import { Schema,model } from "mongoose";
const userSchema=new Schema({
    firstName:{
        type:String,
        required:[true,"First name is required"],
    },
    lastName:{
        type:String
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:[true,"email already exists"]
    },
    password:{
        type:String,
        required:[true,"Password is required"],
    },
    profileImageUrl:{
        type:String
    },
    role:{
        type:String,
        enum:["admin","user","author"],
        required:[true,"{value} is not supported" ]
    },
    isActive:{
        type:Boolean,
        default:true
    }
    },{
        timestamps:true,
        versionKey:false,
        strict:'throw'
    });
    const UserTypeModel=model("users",userSchema);
    export default UserTypeModel;