const novelsCtrl = {};

const Novel = require("../models/Novel");
const Book = require("../models/Book");
const Chapter = require("../models/Chapter");

novelsCtrl.getNovels = async (req, res) => {
	try {
		const novels = await Novel.find();
		res.json(novels);
	} catch(error) {
		console.error(error);
		res.status(400).send(error.message);
	}
};

novelsCtrl.getNovelById = async (req, res) => {
	try {
		const novel = await Novel.findById(req.params.id).populate("books");
		res.json(novel);
	} catch(error) {
		console.error(error);
		res.status(400).send(error.message);
	}
}

novelsCtrl.getBooks = async (req, res) => {
	try{
		const books = await Book.find();
		res.json(books);
	} catch(error) {
		console.error(error);
		res.status(400).send(error.message);
	}
}

novelsCtrl.getChapters = async (req, res) => {
	try{
		const chapter = await Chapter.find();
		res.json(chapter);
	} catch(error) {
		console.error(error);
		res.status(400).send(error.message);
	}
}

novelsCtrl.createNovel = async (req, res) => {
	try {
		const newNovel = new Novel(req.body);
		await newNovel.save();
		res.json({ id: newNovel.id});
	} catch (error) {
		console.error(error);
		res.status(400).send(error.message);
	}
};

novelsCtrl.createBook = async (req, res) => {
	try {
		const newBook = new Book(req.body);
		await newBook.save();
		await Novel.findOneAndUpdate({_id: req.body.novel}, {$push: {books: newBook.id}})
		res.send({ id: newBook.id});
	} catch(error) {
		console.error(error);
		res.status(400).send(error.message);
	}
};

novelsCtrl.createChapter = async (req, res) => {
	try {
		const novel = await Novel.findById(req.body.novel);	
		if(novel.books != [] && !req.body.book) throw new Error("You can't miss the 'book' argument if you have at least one book in your novel"); 
		const newChapter = new Chapter(req.body);
		await newChapter.save();
		novel.chapters.push(newChapter.id);
		await novel.save();
		if(newChapter.book) await Book.findOneAndUpdate({_id: req.body.book}, {$push: {chapters: newChapter.id}});
		res.send({ id: newChapter.id});
	} catch(error) {
		console.error(error);
		res.status(400).send(error.message);
	}
};

module.exports = novelsCtrl;
