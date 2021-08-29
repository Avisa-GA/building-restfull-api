import express from "express";
import routes from "./src/routes/crmRoute";
import mongoose from "mongoose";
import bodyParser from "body-parser";
require("dotenv").config();
const { PORT, MONGODB_URL } = process.env;
const app = express();

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// serving static files
app.use(express.static("public"));

routes(app);

app.get("/", (req, res) =>
  res.send(`Node and Express server running on PORT ${PORT}`)
);

app.listen(PORT, () => console.log(`Your server is running on PORT ${PORT}`));
