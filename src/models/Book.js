import { Schema, model } from "mongoose";

const bookSchema = new Schema(
	{
		title: { type: String, required: true },
		synopsis: { type: String, required: true },
		novelId: { type: Schema.Types.ObjectId, ref: "Novel" },
		chapters: [
			{
				type: Schema.Types.ObjectId,
				ref: "Chapter",
			},
		],
	},
	{
		timestamps: true,
	},
);

export default model("Book", bookSchema);
