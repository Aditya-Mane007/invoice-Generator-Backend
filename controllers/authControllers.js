import asyncHandler from "express-async-handler";
import User from "../schema/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const getUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Get User",
    user: req.user,
  });
});

export const registerUser = asyncHandler(async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      throw new Error("Please add all fields");
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
      throw new Error("User Alreay Exists");
    }

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    if (user) {
      res.status(200).json({
        message: "User Registerd Successfully",
        user,
        toeken: generateToken(user._id),
      });
    } else {
      res.status(400).json({
        message: "Invalid User Data",
      });
    }
  } catch (error) {
    throw new Error(`User Register Error : ${error}`);
  }
});

export const loginUser = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("Please Add All Fields");
    }

    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("User Does Not Exists");
    }

    if (user && (await bcrypt.compare(password, user.password))) {
      res.status(200).json({
        message: "User Logged In Successfully",
        user,
        toeken: generateToken(user._id),
      });
    } else {
      res.status(400).json({
        message: "Invalid User Data",
      });
    }
  } catch (error) {
    throw new Error(`User Login Error : ${error}`);
  }
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export const updateUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Update User",
  });
});

export const deleteUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Delete User",
  });
});
