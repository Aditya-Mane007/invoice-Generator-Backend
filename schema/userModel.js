import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Pleasea add an email address"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
    company: [
      {
        companyId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Company",
        },
        companyName: {
          type: String,
          ref: "Company",
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
