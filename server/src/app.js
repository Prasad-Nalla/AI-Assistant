const express = require("express");
const cors = require("cors");
const documentRoutes = require("./routes/documentRoutes");

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/documents", documentRoutes);

module.exports = app;