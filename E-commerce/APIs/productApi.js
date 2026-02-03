import exp from 'express'
import Product from '../models/ProductModel.js'
const productApp=exp.Router()
productApp.get('/products',async(req,res)=>{
    let products=await Product.find()
    res.status(200).json({message:'Products fetched',payload:products})
})
productApp.post('/products', async (req, res) => {
  try {
    const productObj = req.body;

    // basic validation
    if (!productObj.ProductName || !productObj.Price || !productObj.brand) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const existingProduct = await Product.findOne({
      ProductName: productObj.ProductName
    });

    if (existingProduct) {
      return res.status(400).json({ message: 'Product already exists' });
    }

    const newProduct = new Product(productObj);
    await newProduct.save();

    res.status(201).json({
      message: 'Product created',
      payload: newProduct
    });

  } catch (error) {
    res.status(500).json({
      message: 'Error creating product',
      error: error.message
    });
  }
});

export default productApp