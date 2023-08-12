const { Schema, model } = require("mongoose");

const adminSchema = new Schema({
	password: { type: String, required: true },
	online: { type: Boolean, default: false },
});

module.exports = model("Admin", adminSchema);
