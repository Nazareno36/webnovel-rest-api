import Novel from "../models/Novel.js";
import Book from "../models/Book.js";

export const getBooks = async (req, res) => {
	try {
		const novelId = req.params.novelId;
		const foundBooks = novelId ? await Book.find({ ...req.query, novelId: novelId }) : await Book.find({ ...req.query });
		if (foundBooks != null) res.json(foundBooks);
		else res.sendStatus(404);
	} catch (error) {
		console.error(error);
		res.status(400).json(error.message);
	}
};

export const getBookById = async (req, res) => {
	try {
		const { novelId, bookId } = req.params;
		const foundBook = novelId ? await Book.findOne({ _id: bookId, novelId: novelId }) : await Book.findById(bookId);
		if (foundBook != null) res.json(foundBook);
		else res.sendStatus(404);
	} catch (error) {
		console.error(error);
		res.status(400).json(error.message);
	}
};

export const createBook = async (req, res) => {
	try {
		const novelId = req.params.novelId;
		req.body.novelId = novelId ? novelId : req.body.novelId;
		const newBook = new Book(req.body);
		await newBook.save();
		await Novel.findOneAndUpdate({ _id: req.body.novelId }, { $push: { books: newBook.id } });
		res.status(201).send({ id: newBook.id });
	} catch (error) {
		console.error(error);
		res.status(400).send(error.message);
	}
};

export const patchBook = async (req, res) => {
	try {
		const patchedBook = await Book.findOneAndUpdate({ _id: req.params.bookId }, req.body);
		if (patchedBook != null) res.sendStatus(204);
		else res.sendStatus(404);
	} catch (error) {
		console.error(error);
		res.status(400).send(error.message);
	}
};

export const deleteBooks = async (req, res) => {
	try {
		const deletedBooks = req.params.novelId
			? await Book.deleteMany({ novelId: req.params.novelId })
			: await Book.deleteMany({ ...req.query });
		if (deletedBooks != null) res.sendStatus(204);
		else res.sendStatus(404);
	} catch (error) {
		console.error(error);
		res.status(400).send(error.message);
	}
};

export const deleteBook = async (req, res) => {
	try {
		const deletedBook = req.params.novelId
			? await Book.findOneAndDelete({ _id: req.params.bookId, novelId: req.params.novelId })
			: await Book.findOneAndDelete({ _id: req.params.bookId });
		if (deletedBook != null) res.sendStatus(204);
		else res.sendStatus(404);
	} catch (error) {
		console.error(error);
		res.status(400).send(error.message);
	}
};
