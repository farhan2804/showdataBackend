const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
require("./connection");
const Portfolioviewers = require("./db");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from our side");
});

// Route to get all records
app.get("/view", async (req, res) => {
  try {
    const records = await Portfolioviewers.find();
    res.status(200).json(records);
  } catch (err) {
    console.error(err);
    res.status(500).json();
  }
});

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
