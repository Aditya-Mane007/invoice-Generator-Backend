import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: [true, "Please add a company name"],
    },
    email: {
      type: String,
      required: [true, "Please add an company email Address"],
      unique: true,
    },
    phone: {
      type: String,
      required: [true, "Please add company phone number"],
    },
    gst: {
      type: String,
      required: [true, "Please add a company GST numbers"],
    },
    address: {
      type: String,
      required: [true, "Please add company address"],
    },
    city: {
      type: String,
      required: [true, "Please add city wherer company is located"],
    },
    state: {
      type: String,
      required: [true, "Please add state where compant is located"],
    },
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        productName: {
          type: String,
          ref: "Product",
        },
      },
    ],
    clients: [
      {
        clientId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Client",
        },
        clientName: {
          type: String,
          ref: "Client",
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Company = mongoose.model("Company", companySchema);

export default Company;
