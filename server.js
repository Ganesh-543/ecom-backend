const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
dotenv.config();

const app = express();
app.use(express.json());

app.use("/", productRoutes);
app.use("/auth", authRoutes);
mongoose
  .connect(process.env.MONGODB_URL)

  .then(() => {
    console.log("database connected");
    app.listen(3000, () => {
      console.log("server is running");
    });
  })

  .catch((error) => {
    console.log("error connecting to database:", error.message);
  });
