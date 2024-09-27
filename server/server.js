

const express = require("express");
const app = express();
const task = require("../server/Routes/tasks");
const cors = require("cors");
app.use(cors());
app.use(express.json());
require("./db/connect");

app.get("/", (req, res) => {
  res.send("todo app");
});

app.use("/api/v1/tasks", task);
app.listen(7001, console.log("Server is running on port 7001"));
