import Novel from "../models/Novel.js";
import Book from "../models/Book.js";
import Chapter from "../models/Chapter.js";

export const getChapters = async (req, res) => {
	try {
		const databaseQuery = req.params.bookId
			? { bookId: req.params.bookId }
			: req.params.novelId
			? { novelId: req.params.novelId }
			: {};
		const foundChapters = await Chapter.find(databaseQuery);
		res.json(foundChapters);
	} catch (error) {
		console.error(error);
		res.status(400).json(error.message);
	}
};

export const getChapter = async (req, res) => {
	try {
		const databaseQuery = req.params.bookId
			? { bookId: req.params.bookId }
			: req.params.novelId
			? { novelId: req.params.novelId }
			: {};
		const foundChapter = await Chapter.findOne({ _id: req.params.chapterId, ...databaseQuery });
		if (foundChapter != null) res.json(foundChapter);
		else res.sendStatus(404);
	} catch (error) {
		console.error(error);
		res.status(400).json(error.message);
	}
};

export const createChapter = async (req, res) => {
	try {
		const foundNovel = await Novel.findById(req.params.novelId);
		if (foundNovel.books !== [] && !req.params.bookId)
			throw new Error("You can't create a chapter without a book if the novel has books.");
		const newChapter = new Chapter({ ...req.body, ...req.params });
		await newChapter.save();
		foundNovel.chapters.push(newChapter.id);
		await foundNovel.save();
		if (newChapter.bookId) await Book.findOneAndUpdate({ _id: req.body.book }, { $push: { chapters: newChapter.id } });
		res.status(202).json({ id: newChapter.id });
	} catch (error) {
		console.error(error);
		res.status(400).send(error.message);
	}
};

export const patchChapter = async (req, res) => {
	try {
		const patchedChapter = req.params.bookId
			? await Chapter.findOneAndUpdate({ _id: req.params.chapterId, BookId: req.params.bookId }, req.body)
			: await Chapter.findByIdAndUpdate(req.params.chapterId, req.body);
		if (patchedChapter != null) res.sendStatus(204);
		else res.sendStatus(404);
	} catch (error) {
		console.error(error);
		res.status(400).json(error.message);
	}
};

export const deleteChapters = async (req, res) => {
	try {
		const deletedChapters = req.params.bookId
			? await Chapter.deleteMany({ bookId: req.params.bookId })
			: await Chapter.deleteMany({ novelId: req.params.novelId });
		if (deletedChapters.deletedCount > 0) res.sendStatus(204);
		else res.sendStatus(404);
	} catch (error) {
		console.error(error);
		res.status(400).json(error.message);
	}
};

export const deleteChapter = async (req, res) => {
	try {
		const deletedChapter = req.params.bookId
			? await Chapter.findOneAndDelete({ _id: req.params.chapterId, bookId: req.params.bookId })
			: await Chapter.findOneAndDelete({ _id: req.params.chapterId, novelId: req.params.novelId });
		if (deletedChapter != null) res.sendStatus(204);
		else res.sendStatus(404);
	} catch (error) {
		console.error(error);
		res.status(400).json(error.message);
	}
};
