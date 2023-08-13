const Novel = require("../models/Novel");
const Book = require("../models/Book");

const booksCtrl = {
	getBooks: async (req, res) => {
		try {
			const novelId = req.params.novelId;
			const foundBooks = novelId ? await Book.find({ ...req.query, novelId: novelId }) : await Book.find({ ...req.query });
			if (foundBooks != null) res.json(foundBooks);
			else res.sendStatus(404);
		} catch (error) {
			console.error(error);
			res.status(400).json(error.message);
		}
	},

	getBookById: async (req, res) => {
		try {
			const { novelId, bookId } = req.params;
			const foundBook = novelId ? await Book.findOne({ _id: bookId, novelId: novelId }) : await Book.findById(bookId);
			if (foundBook != null) res.json(foundBook);
			else res.sendStatus(404);
		} catch (error) {
			console.error(error);
			res.status(400).json(error.message);
		}
	},

	createBook: async (req, res) => {
		try {
			const novelId = req.params.novelId;
			req.body.novelId = novelId ? novelId : req.body.novelId;
			console.log(req.body);
			const newBook = new Book(req.body);
			await newBook.save();
			await Novel.findOneAndUpdate({ _id: req.body.novelId }, { $push: { books: newBook.id } });
			res.status(201).send({ id: newBook.id });
		} catch (error) {
			console.error(error);
			res.status(400).send(error.message);
		}
	},
};

module.exports = booksCtrl;
