import { Schema, model } from "mongoose";

const chapterSchema = new Schema(
	{
		title: { type: String, required: true },
		content: { type: String, required: true },
		bookId: { type: Schema.Types.ObjectId, ref: "Book" },
		novelId: { type: Schema.Types.ObjectId, ref: "Novel", required: true },
	},
	{
		timestamps: true,
	},
);

export default model("Chapter", chapterSchema);
