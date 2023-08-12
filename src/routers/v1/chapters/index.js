const chaptersRouter = require("express").Router({ mergeParams: true });
const chaptersCtrl = require("../../../controllers/chapters.controller");

chaptersRouter.get("/", chaptersCtrl.getChapters);

module.exports = chaptersRouter;
