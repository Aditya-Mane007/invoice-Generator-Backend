import asyncHandler from "express-async-handler";
import Client from "../schema/clientSchema.js";
import Company from "../schema/companySchema.js";

export const getClient = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Get Client",
  });
});

export const createClient = asyncHandler(async (req, res) => {
  try {
    const { companyId, name, email, phone, gst, address, city, state } =
      req.body;

    if (
      !companyId ||
      !name ||
      !email ||
      !phone ||
      !gst ||
      !address ||
      !city ||
      !state
    ) {
      throw new Error("Please add fileds");
    }

    const clientExists = await Client.findOne({ email });
    if (clientExists) {
      throw new Error(
        "Client already exists or provided email is already is in user"
      );
    }

    const client = await Client.create({
      company: companyId,
      name,
      email,
      phone,
      gst,
      address,
      city,
      state,
    });

    if (client) {
      await Company.findByIdAndUpdate(companyId, {
        $push: {
          clients: {
            clientId: client._id,
            clientName: client.name,
          },
        },
      });
      res.status(200).json({
        message: "Create Client",
        client,
      });
    }
  } catch (error) {
    throw new Error(`Create Client Error : ${error}`);
  }
});

export const updateClient = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Update Client",
  });
});

export const deleteClient = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Delete Client",
  });
});
