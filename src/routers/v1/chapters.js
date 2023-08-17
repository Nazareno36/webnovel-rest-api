import { Router } from "express";
import { createChapter, getChapters, getChapter } from "../../controllers/chapters.controller.js";
import { deleteBook, deleteBooks, patchBook } from "../../controllers/books.controller.js";

const chaptersRouter = Router();

chaptersRouter.get("/", getChapters);
chaptersRouter.get("/:chapterId", getChapter);

chaptersRouter.post("/", createChapter);

chaptersRouter.patch("/:chapterId", patchBook);

chaptersRouter.delete("/", deleteBooks);
chaptersRouter.delete("/:chapterId", deleteBook);

export default chaptersRouter;
