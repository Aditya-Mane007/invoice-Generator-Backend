import { Router } from "express";
import {
  getInvoice,
  createInvoice,
  updateInvoice,
  deleteInvoice,
} from "../controllers/invoiceControllers.js";
import { protect } from "../middleware/authMiddleware.js";
const router = Router();

router.get("/", protect, getInvoice);

router.post("/", protect, createInvoice);

router.put("/:id", protect, updateInvoice);

router.delete("/:id", protect, deleteInvoice);

export default router;
