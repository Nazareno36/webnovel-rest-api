const novelsRouter = require("express").Router();
const novelsCtrl = require("../../../controllers/novels.controller");

novelsRouter.get("/", novelsCtrl.getNovels);

novelsRouter.get("/:novelId", novelsCtrl.getNovelById);

novelsRouter.use("/:novelId/books", require("../books"));

module.exports = novelsRouter;
