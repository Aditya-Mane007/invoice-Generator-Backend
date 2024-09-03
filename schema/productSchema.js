import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
    name: {
      type: String,
      required: [true, "Please add product name"],
    },
    description: {
      type: String,
      required: [true, "Please add product description"],
    },
    hsnCode: {
      type: String,
      required: [true, "Please add HSN code"],
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
