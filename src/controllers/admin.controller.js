const Admin = require("../models/Admin");

const adminCtrl = {
	getAdmins: async (req, res) => {
		try {
			const admins = await Admin.find();
			res.json(admins);
		} catch (error) {
			console.error(error);
			res.status(400).json(error.message);
		}
	},

	createAdmin: async (req, res) => {
		try {
			const newAdmin = new Admin(req.body);
			await newAdmin.save();
			res.send("Admin created succesfully");
		} catch (error) {
			console.error(error);
			res.status(400).json(error.message);
		}
	},

	verifyAdmin: async (req, res) => {
		try {
			const [foundAdmin] = await Admin.findAndUpdate(req.body, {
				online: true,
			});
			if (foundAdmin != null) {
				res.sendStatus(200);
			} else res.sendStatus(406);
		} catch (error) {
			console.error(error);
			res.status(400).json(error.message);
		}
	},
};

module.exports = adminCtrl;
