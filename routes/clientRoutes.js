import { Router } from "express";
import {
  getClient,
  createClient,
  updateClient,
  deleteClient,
} from "../controllers/clientController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = Router();

router.get("/", protect, getClient);

router.post("/", protect, createClient);

router.put("/:id", protect, updateClient);

router.delete("/:id", protect, deleteClient);

export default router;
