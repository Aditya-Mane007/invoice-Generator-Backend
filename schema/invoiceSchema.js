import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema({
  company: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

const Invoice = mongoose.model("Invoice", invoiceSchema);

export default Invoice;
