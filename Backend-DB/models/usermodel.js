import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 30
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 20
    },
    age: {
      type: Number,
      required: true,
      min: 18,
      max: 40
    }
  },
  {
    timestamps: true,
    strict: "throw"
  }
);

export const UserModel = model("users", userSchema);
