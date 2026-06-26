require("dotenv").config();
const mongoose = require("mongoose");

console.log("Testing MongoDB connection...");
console.log("URI:", process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI, {
  serverSelectionTimeoutMS: 5000,
  connectTimeoutMS: 5000,
})
.then(() => {
  console.log("✓ MongoDB Connected Successfully!");
  process.exit(0);
})
.catch((error) => {
  console.error("✗ MongoDB Connection Failed:");
  console.error("Error:", error.message);
  console.error("Code:", error.code);
  process.exit(1);
});
