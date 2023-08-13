require("dotenv").config();
require("./database");
const app = require("./app");

app.listen(process.env.SERVER_PORT, () => {
  console.log(`server is running on port ${process.env.SERVER_PORT}`);
});
