const { Schema, model } = require("mongoose");

const adminSchema = new Schema({
	password: { type: String, required: true },
});

module.exports = model("Admin", adminSchema);
