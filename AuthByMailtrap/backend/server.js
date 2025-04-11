import app from "./app.js";
import dotenv from "dotenv";
dotenv.config({ path: "backend/config/config.env" });

import { connectMongoDB } from "./config/db.js";

const port = process.env.PORT || 4000;

app.listen(port, () => {
  connectMongoDB();
  console.log("server is listening at port :", port);
});
