import exp from "express";
import mongoose from "mongoose";
import { userApp } from "./APIs/userApi.js";
import { productApp } from "./APIs/productApi.js";

const app = exp();
const PORT = 3000;

app.use(exp.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/E-commerce")
  .then(() => {
    console.log("DB connected");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("DB connection failed", err);
  });

// mount routers
app.use("/user-api", userApp);
app.use("/product-api", productApp);
