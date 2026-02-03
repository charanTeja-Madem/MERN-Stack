import exp from 'express'
import User from '../models/UserModel.js'
import Product from '../models/ProductModel.js'
import {hash,compare} from 'bcryptjs'
const userApp=exp.Router()
userApp.get('/users',async(req,res)=>{
    let users=await User.find({},{name:1,email:1,_id:0,cart:1})
    res.status(200).json({message:'Users fetched',payload:users})
})
userApp.post('/users',async(req,res)=>{
    let userObj=req.body
    await new User(userObj).validate()
    let user=new User(userObj)
    let existingUser=await User.findOne({email:userObj.email})
    if(existingUser){
        res.status(400).json({message:'User already exists'})
        return
    }
    let password=userObj.password
    let hashesPassword= await hash(password,10)
    user.password=hashesPassword
    await user.save()
    res.status(201).json({message:'User created'})
})
userApp.delete('/users',async(req,res)=>{
    //delete all users
    await User.deleteMany({})
    res.status(200).json({message:'All users deleted'})
  })
userApp.put('/user-cart/userid/:userId/product-id/:productId', async (req, res) => {
  const [userId,productId] = [req.params.userId, req.params.productId]
  const user = await User.findById(userId)
  if (!user) {
    return res.status(404).json({ message: 'User not found' })
  }
    const product = await Product.findById(productId)
    if (!product) {
      return res.status(404).json({ message: 'Product not found' })
    }
    let productInCart = user.cart.find(item => item.product.toString() === productId)
    if (productInCart) {
      productInCart.quantity += 1
      return res.status(200).json({
        message: 'Product quantity updated in cart',
        cart: user.cart
      })
    }
  user.cart.push({ product: productId ,quantity:1})
  await user.save()
  const updatedUser = await User.findById(userId).populate('cart.product')
  res.status(200).json({
    message: 'Product added to cart',
    cart: updatedUser.cart
  })
})
userApp.get('/user/:userId',async(req,res)=>{
    let userId=req.params.userId
    let user=await User.findById(userId)
    if(!user){
        res.status(404).json({message:'User not found'})
        return
    }
    const display=await User.findById(userId).populate('cart.product')
    console.log(display);
    res.status(200).json({message:'User fetched',payload:display})
})
export default userApp