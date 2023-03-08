const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cors=require("cors");
// Connect DB
mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongodb is connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(cors());
app.use(express.json());

app.use("/auth", require("./routes/user"));

const PORT = process.env.PORT || 5043;

app.listen(5043, () => console.log("Server is running"));
module.exports = app;
