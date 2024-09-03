import asyncHandler from "express-async-handler";

export const getInvoice = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Get Invoice",
  });
});

export const createInvoice = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Create Invoice",
  });
});

export const updateInvoice = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Update Invoice",
  });
});

export const deleteInvoice = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Delete Invoice",
  });
});
