const { Router } = require("express");
const router = Router();
const novelsCtrl = require("../controllers/novels.controller");

router.get("/", novelsCtrl.getNovels);

router.post("/", novelsCtrl.createNovel);

router.get("/books", novelsCtrl.getBooks);

router.post("/books", novelsCtrl.createBook);

router.get("/chapters", novelsCtrl.getChapters);

router.post("/chapters", novelsCtrl.createChapter);

router.get("/:id", novelsCtrl.getNovelById)

module.exports = router;