// Creation and configuration of the Express APP
const express = require("express");
const cors = require("cors");
const path = require("path");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use("/images", express.static(path.join(__dirname, "public/images")));

// Route configuration
// Ex.
app.use("/api", require("./routes/api.routes"));

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({
    message: "Not found",
  });
});

//uptimeRobot
app.get("/healthcheck", (req, res) => {
  res.status(200).send("OK");
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message });
});

module.exports = app;
