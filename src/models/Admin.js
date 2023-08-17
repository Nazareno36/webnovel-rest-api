import { Schema, model } from "mongoose";

const adminSchema = new Schema({
	password: { type: String, required: true },
	online: { type: Boolean, default: false },
});

export default model("Admin", adminSchema);
