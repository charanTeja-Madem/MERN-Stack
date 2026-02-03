import {Schema,model} from 'mongoose'
const ProductModel= new Schema({
    ProductName:{
        type:String,
        required:[true,'Product Name is required'],
        minlength:[3,'Minimum 3 characters required'],
        maxlength:[50,'Maximum 50 characters allowed']
    },
    Price:{
        type:Number,
        required:[true,'Price is required'],
        min:[0,'Price cannot be negative']
    },
    brand:{
        type:String,
        required:[true,'Brand is required']
    }
},
{
    timestamps:true,
    versionKey:false,
    strict:'throw'
})
const Product=model('products',ProductModel)
export default Product