import express, { json, urlencoded } from "express";
import "colors";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import { dbConnect } from "./config/dbConnect.js";
import errorMiddleware from "./middleware/errorMiddleware.js";

// Routes
import authRoutes from "./routes/authRoutes.js";
import companyRoutes from "./routes/companyRouts.js";
import clientRoutes from "./routes/clientRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import invoiceRoutes from "./routes/invoiceRoutes.js";

dbConnect();

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/company", companyRoutes);
app.use("/api/client", clientRoutes);
app.use("/api/product", productRoutes);
app.use("/api/invoice", invoiceRoutes);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`.blue.underline);
});
