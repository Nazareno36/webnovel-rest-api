const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

//Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

//Routers:
const novelsRouter = require("./routes/novels.routes");
const adminRouter = require("./routes/admin.routes");

//Routes:
app.use("/api/novels", novelsRouter);
app.use("/api/admin", adminRouter);

module.exports = app;
