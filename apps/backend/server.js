require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db");
const contactRoutes = require("./src/routes/contactRoutes");
const authRoutes=require("./src/routes/authRoutes")

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/contact",contactRoutes)
app.use("/api/auth",authRoutes)

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});


// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});