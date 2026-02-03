import exp from 'express';
import {userApp} from './APIs/userApi.js'
import {productApp} from './APIs/productApi.js'
const app = exp();

app.listen(3000,()=>{
    console.log("HTTP server is listening in port 3000.....")
})
app.use(exp.json())


//for user
app.use('/user-api',userApp)
//for product
app.use('/product-api',productApp)