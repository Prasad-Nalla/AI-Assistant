const express = require("express");
const cors = require("cors");
const path = require("path");
const documentRoutes = require("./routes/documentRoutes");

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/documents", documentRoutes);
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));
module.exports = app;