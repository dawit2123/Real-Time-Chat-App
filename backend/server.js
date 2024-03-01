const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config({ path: "config.env" });

const PORT = process.env.PORT;
console.log(PORT);
app.get("/", (req, res, next) => {
  res.send("Hello world and I am back with Dave.");
});
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
