const mainRouterV1 = require("express").Router();

mainRouterV1.use("/admin", require("./admin"));
mainRouterV1.use("/novels", require("./novels"));
mainRouterV1.use("/books", require("./books"));
mainRouterV1.use("/chapters", require("./chapters"));

module.exports = mainRouterV1;
