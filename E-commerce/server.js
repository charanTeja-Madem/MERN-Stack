import exp from 'express'
import mongoose from 'mongoose'
import userApp from './APIs/userApi.js'
import productApp from './APIs/productApi.js'
const app=exp()
const PORT=3000
mongoose.connect('mongodb://localhost:27017/ecommerce').
then(()=>{
    console.log("Connected to MongoDB");
    app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
})
.catch((err)=>{
    console.log("Error connecting to MongoDB:", err);
})
app.use(exp.json())
app.use('/users-api',userApp)
app.use('/products-api',productApp)