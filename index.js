import express from "express";
import routes from "./src/routes/crmRoute";

const app = express();
const PORT = 4000;

routes(app);

app.get("/", (req, res) =>
  res.send(`Node and Express server running on PORT ${PORT}`)
);

app.listen(PORT, () => console.log(`Your server is running on PORT ${PORT}`));
