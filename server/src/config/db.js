const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const mongoUrl = process.env.MONGODB_URI || process.env.MONGODB_URL;

    if (!mongoUrl) {
      throw new Error("MongoDB connection string is not set in environment variables.");
    }

    await mongoose.connect(mongoUrl);

    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;