import "dotenv/config.js";
import "./database.js";
import app from "./app.js";

app.listen(process.env.SERVER_PORT, () => {
	console.log(`server is running on port ${process.env.SERVER_PORT}`);
});
