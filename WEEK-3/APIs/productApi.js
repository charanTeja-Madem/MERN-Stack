import exp from 'express';
export const productApp=exp.Router()
//creating min-express (seperate-Route) app
productApp.use(exp.json())
let products=[]
productApp.get('/products',(req,res)=>{
    res.status(200).json({message:"products",payload:products})
})
productApp.delete('/products/:id',(req,res)=>{
    let pId=Number(req.params.id)
    let key=products.findIndex(p=>p.id==pId)
    if(key==-1){
        res.status(404).json({message:"product not found"})
    }
    else{
        products.splice(key,1)
        res.status(200).json({message:"product deleted"})
    }
})
//post
productApp.post('/products',(req,res)=>{
    let product=req.body;
    let pId=product.id
    let  key=products.findIndex((p)=>p.id==pId)
    if(key==-1){
        products.push(product)
        res.status(200).json({message:"product added",payload:products})
    }
    else{
        res.status(400).json({message:"product already exists"})
    }
})
//put
productApp.put('/products',(req,res)=>{
    let modifiedProduct=req.body
    let key=products.findIndex(p=>p.id==modifiedProduct.id)
    if(key==-1){
        res.status(404).json({message:"product not found"})
    }
    else{
        products[key]=modifiedProduct
        res.status(200).json({message:"product updated",payload:products})
    }
})
//get
productApp.get('/products/:id',(req,res)=>{
    let pId=Number(req.params.id)
    let product=products.find(p=>p.id==pId)
    if(!product){
        res.status(404).json({message:"product not found"})
    }
    else{
        res.status(200).json({message:"product found",payload:product})
    }
})
//get product by name
productApp.get('/products-brand/:brand',(req,res)=>{
    let pbrand=req.params.brand
    console.log("brand",pbrand)
    let brand=products.find(b=>b.brand==pbrand)
    if(brand){
        res.status(200).json({message:"product brand found",payload:brand})
    }
    else{
        res.status(404).json({message:"product brand not found"})
    }
})  