const { Schema, model } = require("mongoose");

const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    synopsis: {type: String, required: true},
    likes: Number,
    views: Number,
    novel: { type: Schema.Types.ObjectId, ref: "Novel", required: true },
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

module.exports = model("Book", bookSchema);
