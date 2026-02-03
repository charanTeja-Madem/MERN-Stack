import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    pid: {
      type: Number,
      required: true,
      unique: true,
      min: 100
    },
    productName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50
    },
    price: {
      type: Number,
      required: true,
      min: 200,
      max: 100000
    },
    brand: {
      type: String
    }
  },
  {
    timestamps: true,
    strict: true
  }
);

export const ProductModel = model("products", productSchema);
