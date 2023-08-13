const mongoose = require("mongoose");

mongoose
  .connect(process.env.DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((db) => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.error(err);
  });
