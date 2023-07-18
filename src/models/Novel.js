const { Schema, model } = require("mongoose");

const novelsSchema = new Schema(
  {
    title: { type: String, required: true },
    synopsis: { type: String, required: true },
    author: { type: String, required: true },
    books: [{type: Schema.Types.ObjectId, ref: "Book"}],
    chapters: [{type: Schema.Types.ObjectIdj, ref: "Chapter"}]
  },
  {
    timestamps: true,
  },
);

module.exports = model("Novel", novelsSchema);
