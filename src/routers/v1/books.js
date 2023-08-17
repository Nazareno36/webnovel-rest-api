import { createBook, deleteBook, deleteBooks, getBookById, getBooks, patchBook } from "../../controllers/books.controller.js";
import chaptersRouter from "./chapters.js";
import { Router } from "express";

const booksRouter = Router();

booksRouter.get("/", getBooks);
booksRouter.get("/:bookId", getBookById);

booksRouter.post("/", createBook);

booksRouter.patch("/:bookId", patchBook);

booksRouter.delete("/", deleteBooks);
booksRouter.delete("/:bookId", deleteBook);

booksRouter.use("/:bookId/chapters", chaptersRouter);

export default booksRouter;
