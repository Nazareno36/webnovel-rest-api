import { Router } from "express";
import adminRouter from "./admin.js";
import novelsRouter from "./novels.js";
import booksRouter from "./books.js";
import chaptersRouter from "./chapters.js";

const mainRouterV1 = Router();

mainRouterV1.use("/admin", adminRouter);
mainRouterV1.use("/novels", novelsRouter);
mainRouterV1.use("/books", booksRouter);
mainRouterV1.use("/chapters", chaptersRouter);

export default mainRouterV1;
