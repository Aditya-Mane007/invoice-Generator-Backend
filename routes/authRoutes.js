import { Router } from "express";
import {
  getUser,
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
} from "../controllers/authControllers.js";
import { protect } from "../middleware/authMiddleware.js";
const router = Router();

router.get("/", protect, getUser);

router.post("/register", registerUser);

router.post("/login", loginUser);

router.put("/:id", protect, updateUser);

router.delete("/:id", protect, deleteUser);

export default router;
