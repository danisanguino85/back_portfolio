// Server creation and configuration
const http = require("node:http");
const app = require("./src/app");

// Config .env
require("dotenv").config();

//config DB
require("./src/config/db.config");

// Server creation
const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
server.listen(PORT);

//uptimeRobot
app.get("/healthcheck", (req, res) => {
  res.status(200).send("OK");
});

// Listeners
server.on("listening", () => {
  console.log(`Server listening on port ${PORT}`);
});

server.on("error", (error) => {
  console.log(error);
});
