const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT || 1000;
const auth = require("./routes/auth");
const list = require("./routes/list");

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api/v1", auth);
app.use("/api/v2", list);

app.listen(PORT, () => {
  console.log(`server started  ${PORT}`);
});
