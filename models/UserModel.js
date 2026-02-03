import {Schema,model} from 'mongoose';
const cartSchema=new Schema({
    product:{
        type:Schema.Types.ObjectId,
        ref:'products'
    }
})
const UserModel= new Schema({
    name:{
        type:String,
        required:[true,'Name is required'],
        minlength:[5,'Minimum 5 characters required'],
        maxlength:[20,'Maximum 20 characters allowed']
    },
    email:{
        type:String,
        required:[true,'Email is required'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'Password is required'],
        minlength:[8,'Minimum 8 characters required']
    },
    cart:{
        type:[cartSchema]
    }
})
const User=model('users',UserModel)
export default User