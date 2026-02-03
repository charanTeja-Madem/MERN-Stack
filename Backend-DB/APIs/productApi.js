import express from "express";
import { ProductModel } from "../models/productmodel.js";

export const productApp = express.Router();

// CREATE product
productApp.post("/products", async (req, res) => {
  const product = await ProductModel.create(req.body);
  res.status(201).json({
    message: "product created successfully",
    payload: product
  });
});

// READ all products
productApp.get("/products", async (req, res) => {
  const products = await ProductModel.find();
  res.status(200).json({
    message: "products fetched",
    payload: products
  });
});

// READ product by MongoDB _id
productApp.get("/products/:id", async (req, res) => {
  const product = await ProductModel.findById(req.params.id);
  res.status(200).json({
    message: "product fetched",
    payload: product
  });
});

// READ product by pid
productApp.get("/products/pid/:pid", async (req, res) => {
  const product = await ProductModel.find({ pid: req.params.pid });
  res.status(200).json({
    message: "product by pid",
    payload: product
  });
});

// UPDATE product
productApp.put("/products/:id", async (req, res) => {
  const updatedProduct = await ProductModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  );

  res.status(200).json({
    message: "product updated",
    payload: updatedProduct
  });
});

// DELETE product
productApp.delete("/products/:id", async (req, res) => {
  const deletedProduct = await ProductModel.findByIdAndDelete(req.params.id);
  res.status(200).json({
    message: "product deleted",
    payload: deletedProduct
  });
});
