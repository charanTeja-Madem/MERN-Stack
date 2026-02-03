import exp from 'express';
const app=exp()
app.listen(3000,()=>{
    console.log("HTTP server is listening in port 3000.....")
})
app.use(exp.json())
let products=[]
app.get('/products',(req,res)=>{
    res.status(200).json({message:"products",payload:products})
})
app.delete('/products/:id',(req,res)=>{
    let pId=Number(req.params.id)
    console.log("pId",pId)
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
app.post('/products',(req,res)=>{
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
app.put('/products',(req,res)=>{
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
app.get('/products/:id',(req,res)=>{
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
app.get('/products/:brand',(req,res)=>{
    let pbrand=req.params.brand
    let brand=products.find(b=>b.brand==pbrand)
    console.log("brand",pbrand)
    if(brand){
        res.status(200).json({message:"product brand found",payload:brand})
    }
    else{
        res.status(404).json({message:"product brand not found"})
    }
})