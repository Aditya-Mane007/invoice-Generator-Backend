import mongoose from "mongoose";

export const dbConnect = async () => {
  let isConnected;
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is connected");
    return;
  }
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    isConnected = true;
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(error);
    process.exit(10);
  }
};
