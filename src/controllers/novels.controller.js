const Novel = require("../models/Novel");

const novelsCtrl = {
	getNovels: async (req, res) => {
		try {
			const novels = await Novel.find();
			res.json(novels);
		} catch (error) {
			console.error(error);
			res.status(400).json(error.message);
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
			res.status(201).json({ id: newNovel.id });
		} catch (error) {
			console.error(error);
			res.status(400).send(error.message);
		}
	},

	deleteNovels: async (req, res) => {
		try {
			const deletedNovels = await Novel.deleteMany();
			console.log(`Deleted novels: ${deletedNovels}`);
			if (deletedNovels != null) res.sendStatus(204);
			else res.sendStatus(404);
		} catch (error) {
			console.error(error);
			res.status(400).send(error.message);
		}
	},

	deleteNovelById: async (req, res) => {
		try {
			const deletedNovel = await Novel.findByIdAndDelete(req.params.novelId);
			console.log(`Deleted novel: ${deletedNovel}`);
			if (deletedNovel != null) res.sendStatus(204);
			else res.sendStatus(404);
		} catch (error) {
			console.error(error);
			res.status(400).send(error.message);
		}
	}

};

module.exports = novelsCtrl;
