import asycHandler from "express-async-handler";
import User from "../schema/userModel.js";
import jwt from "jsonwebtoken";

export const protect = asycHandler(async (req, res, next) => {
  let token;

  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decodedToken.id).select("-password");
      next();
    } catch (error) {
      throw new Error(error.message);
    }
  } else {
    res.status(400);
    throw new Error("Not Authorized");
  }

  if (!token) {
    throw new Error("No Token, Not Authorized");
  }
});
