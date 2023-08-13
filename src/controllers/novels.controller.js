const Novel = require("../models/Novel");

const novelsCtrl = {
	getNovels: async (req, res) => {
		try {
			const novels = await Novel.find();
			res.json(novels);
		} catch (error) {
			console.error(error);
			res.status(400).send(error.message);
		}
	},

	getNovelById: async (req, res) => {
		try {
			const foundNovel = await Novel.findById(req.params.novelId).populate("books");
			if (foundNovel != null) res.json(foundNovel);
			else res.sendStatus(404);
		} catch (error) {
			console.error(error);
			res.status(400).send(error.message);
		}
	},

	createNovel: async (req, res) => {
		try {
			const newNovel = new Novel(req.body);
			await newNovel.save();
			res.json({ id: newNovel.id });
		} catch (error) {
			console.error(error);
			res.status(400).send(error.message);
		}
	},
};

module.exports = novelsCtrl;
