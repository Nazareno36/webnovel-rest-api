import { Router } from "express";
import {
	getNovels,
	getNovelById,
	createNovel,
	deleteNovels,
	deleteNovelById,
	patchNovelById,
} from "../../controllers/novels.controller.js";
import booksRouter from "./books.js";

const novelsRouter = Router();

novelsRouter.get("/", getNovels);
novelsRouter.get("/:novelId", getNovelById);

novelsRouter.post("/", createNovel);

novelsRouter.patch("/:novelId", patchNovelById);

novelsRouter.delete("/", deleteNovels);
novelsRouter.delete("/:novelId", deleteNovelById);

novelsRouter.use("/:novelId/books", booksRouter);

export default novelsRouter;
