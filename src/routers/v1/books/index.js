const booksRouter = require("express").Router({ mergeParams: true });
const booksCtrl = require("../../../controllers/books.controller");

booksRouter.get("/", booksCtrl.getBooks);
booksRouter.get("/:bookId", booksCtrl.getBookById);

booksRouter.post("/", booksCtrl.createBook);

booksRouter.use("/:bookId/chapters", require("../chapters"));

module.exports = booksRouter;
