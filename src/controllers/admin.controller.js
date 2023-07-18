const adminCtrl = {};
const Admin = require("../models/Admin");

adminCtrl.getAdmins = async (req, res) => {
	const admins = await Admin.find();
	res.json(admins);
};

adminCtrl.createAdmin = async (req, res) => {
	const newAdmin = new Admin(req.body);
	await newAdmin.save();
	res.send("Admin created succesfully");
};

adminCtrl.verifyAdmin = async (req, res) => {
	const [foundAdmin] = await Admin.find(req.body);
	if(foundAdmin) res.status(200).end();
	else res.status(406).end();
};

module.exports = adminCtrl;
