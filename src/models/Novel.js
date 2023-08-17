import { Schema, model } from "mongoose";

const novelsSchema = new Schema(
	{
		title: { type: String, required: true },
		synopsis: { type: String, required: true },
		author: { type: String, required: true },
		books: [{ type: Schema.Types.ObjectId, ref: "Book" }],
		chapters: [{ type: Schema.Types.ObjectId, ref: "Chapter" }],
	},
	{
		timestamps: true,
	},
);

export default model("Novel", novelsSchema);
