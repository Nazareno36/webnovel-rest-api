const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

//Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

//main routers
app.use("/api/v1", require("./routers/v1"));

module.exports = app;
