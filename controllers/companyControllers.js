import asyncHandler from "express-async-handler";
import Company from "../schema/companySchema.js";
import User from "../schema/userModel.js";
import Product from "../schema/productSchema.js";
import Client from "../schema/clientSchema.js";

export const getCompany = asyncHandler(async (req, res) => {
  const company = await Company.findOne({ user: req.user._id }).populate();

  if (!company) {
    throw new Error("No companies found");
  }

  res.status(200).json({
    message: "Get Company",
    company,
  });
});

export const createCompany = asyncHandler(async (req, res) => {
  const { name, imageUrl, email, phone, gst, address, city, state } = req.body;

  if (
    !name ||
    !imageUrl ||
    !email ||
    !phone ||
    !address ||
    !gst ||
    !city ||
    !state
  ) {
    throw new Error("Please Add All Fields");
  }

  const companyExists = await Company.findOne({ email });

  if (companyExists) {
    throw new Error(
      "Company alerady exists or provided email is already is in use"
    );
  }

  const company = await Company.create({
    user: req.user._id,
    name,
    imageUrl,
    email,
    phone,
    gst,
    address,
    city,
    state,
  });

  if (company) {
    await User.findByIdAndUpdate(
      req.user._id,
      {
        $push: {
          company: {
            companyId: company._id,
            companyName: company.name,
          },
        },
      },
      { new: true }
    );
    res.status(200).json({
      message: "Company Created Successfully",
      company,
    });
  } else {
    res.status(400).json({
      message: "Invalid Company Data",
    });
  }
});

export const updateCompany = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Update Company",
  });
});

export const deleteCompany = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Delete Company",
  });
});

export const fetchProductOfCompany = asyncHandler(async (req, res) => {
  const { companyId } = req.body;

  const products = await Product.findOne({ company: companyId });

  console.log(products);

  res.status(200).json({
    message: "Fetch Products",
  });
});

export const fetchClientsOfCompany = asyncHandler(async (req, res) => {
  const { companyId } = req.body;

  const clients = await Client.findOne({ company: companyId });

  console.log(products);

  res.status(200).json({
    message: "Fetch Products",
  });
});
