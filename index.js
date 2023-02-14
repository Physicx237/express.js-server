import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from "express-fileupload";

const PORT = 5000;
const DB_URL =
  "mongodb+srv://user:user@cluster.jtrvjqo.mongodb.net/?retryWrites=true&w=majority";

const app = express();

mongoose.set("strictQuery", true);

app.use(express.json());
app.use(express.static("static"));
app.use(fileUpload({}));
app.use("/api", router);

async function startApp() {
  try {
    mongoose.connect(DB_URL);
    app.listen(PORT, () => {
      console.log("Server started on port " + PORT);
    });
  } catch (e) {
    console.log(e);
  }
}

startApp();
