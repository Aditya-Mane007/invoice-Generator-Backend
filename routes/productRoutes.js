import { Router } from "express";
import {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productControllers.js";
import { protect } from "../middleware/authMiddleware.js";
const router = Router();

router.get("/", protect, getProduct);

router.post("/", protect, createProduct);

router.put("/:id", protect, updateProduct);

router.delete("/:id", protect, deleteProduct);

export default router;
