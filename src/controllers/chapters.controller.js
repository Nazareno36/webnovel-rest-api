const Chapter = require("../models/Chapter");
const chaptersCtrl = {
	getChapters: async (req, res) => {
		try {
			const chapters = await Chapter.find();
			res.json(chapters);
		} catch (error) {
			console.error(error);
			res.status(400).json(error.message);
		}
	},

	createChapter: async (req, res) => {
		try {
			const novel = await Novel.findById(req.body.novel);
			if (novel.books !== [] && !req.body.book)
				throw new Error(
					"You can't miss the 'book' argument if you have at least one book in your novel",
				);
			const newChapter = new Chapter(req.body);
			await newChapter.save();
			novel.chapters.push(newChapter.id);
			await novel.save();
			if (newChapter.book)
				await Book.findOneAndUpdate(
					{ _id: req.body.book },
					{ $push: { chapters: newChapter.id } },
				);
			res.send({ id: newChapter.id });
		} catch (error) {
			console.error(error);
			res.status(400).send(error.message);
		}
	},
};

module.exports = chaptersCtrl;
