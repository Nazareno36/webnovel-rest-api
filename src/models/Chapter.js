const { Schema, model } = require("mongoose");

const chapterSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    likes: Number,
    views: Number,
    book: {type: Schema.Types.ObjectId, ref: "Book"},
    novel: { type: Schema.Types.ObjectId, ref: "Novel", required: true },
  },
  {
    timestamps: true,
  },
);

module.exports = model("Chapter", chapterSchema);
