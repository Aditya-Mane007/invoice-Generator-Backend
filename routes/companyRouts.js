import { Router } from "express";

import {
  getCompany,
  createCompany,
  updateCompany,
  deleteCompany,
} from "../controllers/companyControllers.js";
import { protect } from "../middleware/authMiddleware.js";
const router = Router();

router.get("/", protect, getCompany);

router.post("/", protect, createCompany);

router.put("/:id", protect, updateCompany);

router.delete("/:id", protect, deleteCompany);

export default router;
