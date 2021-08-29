import express from "express";
import routes from "./src/routes/crmRoute";
import mongoose from "mongoose";
import bodyParser from "body-parser";
require("dotenv").config();
const { PORT, MONGODB_URL } = process.env;
const app = express();
import jsonwebtoken from "jsonwebtoken";

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

// JWT setup
app.use((req, res, next) => {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "JWT"
  ) {
    jsonwebtoken.verify(
      req.headers.authorization.split(" ")[1],
      "RESTFULAPIs",
      (err, decode) => {
        if (err) req.user = undefined;
        req.user = decode;
        next();
      }
    );
  } else {
    req.user = undefined;
    next();
  }
});

routes(app);

app.get("/", (req, res) =>
  res.send(`Node and Express server running on PORT ${PORT}`)
);

app.listen(PORT, () => console.log(`Your server is running on PORT ${PORT}`));
