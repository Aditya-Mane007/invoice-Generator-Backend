import asyncHandler from "express-async-handler";
import Product from "../schema/productSchema.js";
import Company from "../schema/companySchema.js";

export const getProduct = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Get Product",
  });
});

export const createProduct = asyncHandler(async (req, res) => {
  try {
    const { companyId, name, description, hsnCode } = req.body;

    if (!companyId || !name || !description || !hsnCode) {
      throw new Error("Please add all fields");
    }

    const productExists = await Product.findOne({ hsnCode });

    if (productExists) {
      throw new Error("Product already exists");
    }

    const product = await Product.create({
      company: companyId,
      name,
      description,
      hsnCode,
    });

    if (product) {
      await Company.findByIdAndUpdate(companyId, {
        $push: {
          products: {
            productId: product._id,
            productName: product.name,
          },
        },
      });

      res.status(200).json({
        message: "Create Product",
        product,
      });
    } else {
      res.status(400).json({
        message: "Invalid product data",
      });
    }
  } catch (error) {
    throw new Error(`Create Product : ${error}`);
  }
});

export const updateProduct = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Update Product",
  });
});

export const deleteProduct = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Delete Product",
  });
});
