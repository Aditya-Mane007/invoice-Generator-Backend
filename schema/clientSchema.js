import mongoose from "mongoose";

const clientSchema = new mongoose.Schema(
  {
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
    name: {
      type: String,
      required: [true, "Please add a client name"],
    },
    email: {
      type: String,
      required: [true, "Please add an client email Address"],
      unique: true,
    },
    phone: {
      type: String,
      required: [true, "Please add company phone number"],
    },
    gst: {
      type: String,
      required: [true, "Please add a client GST numbers"],
    },
    address: {
      type: String,
      required: [true, "Please add client address"],
    },
    city: {
      type: String,
      required: [true, "Please add city wherer client is located"],
    },
    state: {
      type: String,
      required: [true, "Please add state where compant is located"],
    },
  },
  {
    timestamps: true,
  }
);

const Client = mongoose.model("Client", clientSchema);

export default Client;
